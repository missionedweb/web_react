import React,{ useEffect, useState } from 'react'
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

function createData(S_no,courses,conducted,present,absent,attendance,absentDates) {
  return { S_no,courses,conducted,present,absent,attendance,absentDates };
}

const rows = [
  createData(1, 'Physics', 50, 49, 1,((49/50)*100),"12 Sep"),
  createData(2, 'Chemistry', 40, 38, 2,((38/40)*100),"12 Sep\n13 Sep"),
  createData(3, 'Maths', 30, 30, 0,100,"-"),
];

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
});

const AttendanceTable = () => {
    const classes = useStyles();
    const [att,setAtt] = useState(0);
    var at;
    const handleCalculate = () => {
        at = 0;
        rows.map(row => at+=row.attendance);
        at = at/rows.length;
        console.log(at);
        setAtt(at);
    }

    useEffect(() => {
        handleCalculate();
    },[]);

    return (
        <div className="container-fluid">
        <div className="row" style={{marginBottom:20}}>
          <div className="col-xs-3"><Link to='/dashboard/profile'><ArrowBackTwoToneIcon color="primary" fontSize="large" /></Link></div>
          <div className="col-xs-2"></div>
          <div className="col-xs-7"><h2 style={{marginLeft:20,color:"#5840bb" }}>Attendance</h2></div>
        </div>
        <div className="row" style={{marginBottom:20}}>
          <div className="col-xs-12 col-md-4"><h3 style={{color:"#5840bb"}}>Attendance Details</h3></div>
          <div className="col-md-6"></div>
          <div className="col-xs-12 col-md-2"><Button variant="contained" color="primary" style={{borderRadius:20}}>Semester 1</Button></div>
        </div>
        <div className="row" style={{marginBottom:30}}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="sticky table" stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell>S.No.</StyledTableCell>
                <StyledTableCell align="center">Courses</StyledTableCell>
                <StyledTableCell align="center">Conducted</StyledTableCell>
                <StyledTableCell align="center">Present</StyledTableCell>
                <StyledTableCell align="center">Absent</StyledTableCell>
                <StyledTableCell align="center">Attendance</StyledTableCell>
                <StyledTableCell align="center">Absent Dates</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} hover="true">
                  <TableCell component="th" scope="row"  size="small">
                    {row.S_no}
                  </TableCell>
                  <TableCell align="center">{row.courses}</TableCell>
                  <TableCell align="center" size="small">{row.conducted}</TableCell>
                  <TableCell align="center" size="small">{row.present}</TableCell>
                  <TableCell align="center" size="small">{row.absent}</TableCell>
                  <TableCell align="center" size="small">{row.attendance}%</TableCell>
                  <TableCell align="center">{row.absentDates}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        <div className="row" style={{display:"flex", justifyContent:"space-between"}}>
          <h5 style={{color:"#5840bb"}}>Aggregate:  <span style={{fontWeight:700}}>{att}</span>%</h5>
        </div>
        </div>
    
    )
}

export default AttendanceTable; 