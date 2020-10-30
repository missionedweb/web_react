import React,{ useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const Jobs = () => {
    const classes = useStyles();
    const [selected,setSelected] = useState("Internships");

    return (
        
            <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                    <TextField
                    id="outlined-adornment-search"
                    fullWidth
                    label="Search"
                    variant="outlined"
                    labelWidth={60}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button style={{color:(selected==='Jobs')?'#5840bb':'grey', fontWeight:(selected==='Jobs')?700:300}} onClick={e => setSelected("Jobs")}>Jobs</Button>
                    <Button style={{color:(selected==='Internships')?'#5840bb':'grey', fontWeight:(selected==='Internships')?700:300}} onClick={e => setSelected("Internships")}>Internships</Button>
                    <Button style={{color:(selected==='Events')?'#5840bb':'grey', fontWeight:(selected==='Events')?700:300}} onClick={e => setSelected("Events")}>Events</Button>
                    <Button style={{color:(selected==='Q/A')?'#5840bb':'grey', fontWeight:(selected==='Q/A')?700:300}} onClick={e => setSelected("Q/A")}>Q/A</Button>
                </ButtonGroup>
                    
                </Grid>
            </Grid>
            
        
    )
}

export default Jobs;