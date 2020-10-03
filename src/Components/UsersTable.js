import React, {useState, useEffect} from "react";
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const UsersTable = ({users, handleClick}) => {
  const classes = useStyles();

  const usersList = users.map((u) => <tr key={u._id}>
    <td>{u.name}</td>
    <td>{u.lastName}</td>
    <td>{u.email}</td>
    <td>{u.age}</td>
    <td>
      <button onClick={() => handleClick(u._id)}>Ver</button>
    </td>
  </tr>);

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Last name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((u) => (
            <StyledTableRow key={u.name}>
              <StyledTableCell component="th" scope="row">
                {u.name}
              </StyledTableCell>
              <StyledTableCell align="right">{u.lastName}</StyledTableCell>
              <StyledTableCell align="right">{u.email}</StyledTableCell>
              <StyledTableCell align="right">{u.age}</StyledTableCell>
              <StyledTableCell align="right"><IconButton onClick={() => handleClick(u._id)}><QueueMusicIcon></QueueMusicIcon></IconButton></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UsersTable;