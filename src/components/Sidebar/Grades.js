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
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
    const gpa = 6;
    const agGpa = 4;
  return (
    <div className="container-fluid">
    <div className="row" style={{marginBottom:20}}>
      <div className="col-xs-3"><Link to='/dashboard/profile'><ArrowBackTwoToneIcon color="primary" fontSize="large" /></Link></div>
      <div className="col-xs-2"></div>
      <div className="col-xs-7"><h2 style={{marginLeft:20,color:"#5840bb" }}>MARKSHEET</h2></div>
    </div>
    <div className="row" style={{marginBottom:20}}>
      <div className="col-md-4"></div>
      <div className="col-xs-12 col-md-4"><h5 style={{color:"#5840bb"}}>Academic Outlook</h5></div>
      <div className="col-md-2"></div>
      <div className="col-xs-12 col-md-2"><Button variant="contained" color="primary" style={{borderRadius:20}}>Semester 1</Button></div>
    </div>
    <div className="row" style={{marginBottom:30}}>
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
    </div>
    <div className="row" style={{display:"flex", justifyContent:"space-between"}}>
      <h5 style={{color:"#5840bb"}}>GPA:  <span style={{fontWeight:700}}>{gpa}</span>/10</h5>
      <h5 style={{color:"#5840bb"}}>Aggregate GPA: <span style={{fontWeight:700}}>{agGpa}</span>/10</h5>
    </div>
    </div>
  );
}
export default Grades;
