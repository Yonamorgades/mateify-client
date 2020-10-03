import React, {useState, useEffect, Fragment} from "react";
import UsersTable from './Components/UsersTable';
import FavoriteSongs from './Components/FavoriteSongs';
import {Box} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
function App() {
  const [users,
    setUsers] = useState([]);
  const [songs,
    setSongs] = useState([]);

  const getUsers = async() => {
    const response = await fetch("https://mateif-api.herokuapp.com/users");
    const data = await response.json();
    setUsers(data);
  };
  const classes = useStyles();

  const handleClickRow = (id) => {
    let favoriteSongs = users
      .find(u => u._id === id)
      .favoriteSongs
    setSongs(favoriteSongs)
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <AppBar position="static" color={"primary"}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} align="center">
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
        <Box mb={4} boxShadow={3} mt={3} >
          <UsersTable users={users} handleClick={handleClickRow}></UsersTable>
        </Box>
        <Box mt={4}>
          <FavoriteSongs songs={songs}></FavoriteSongs>
        </Box>
    </Fragment>
  );
}

export default App;
