import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#5840bb",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Sl_no,course,grade,gradePoint,remark) {
  return { Sl_no,course,grade,gradePoint,remark };
}

const rows = [
  createData(1, 'Physics', 'A+', 9, "Excellent"),
  createData(2, 'Chemistry', 'B+', 7, "Good"),
  createData(3, 'Maths', 'O', 10, "Excellent")
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Grades = () => {
    const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="sticky table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>Sl no.</StyledTableCell>
            <StyledTableCell align="center">Course</StyledTableCell>
            <StyledTableCell align="center">Grade</StyledTableCell>
            <StyledTableCell align="center">Grade Point</StyledTableCell>
            <StyledTableCell align="center">Remark/Suggestion</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} hover="true">
              <TableCell component="th" scope="row"  size="small">
                {row.Sl_no}
              </TableCell>
              <TableCell align="center">{row.course}</TableCell>
              <TableCell align="center" size="small">{row.grade}</TableCell>
              <TableCell align="center" size="small">{row.gradePoint}</TableCell>
              <TableCell align="center">{row.remark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Grades;
