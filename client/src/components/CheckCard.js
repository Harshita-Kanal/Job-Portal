import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';

export default function CheckCard({value, setValue}) {
    
    const handleChange = (event) => {
      setValue(event.target.value);
      console.log(value)
    };
  
    return (
    <Paper className = {'card'}   elevation = {3} >
      <FormControl  component="fieldset">
        <RadioGroup row className = {'radioItem'} aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel  value="All" control={<Radio />} label= "All" />
          <FormControlLabel value= "US" control={<Radio />} label="US" />
          <FormControlLabel value= "UK" control={<Radio />} label="UK" />
          <FormControlLabel value="Remote" control={<Radio />} label="Remote" />
          <FormControlLabel value= "Full Time" control={<Radio />} label="Full-Time" />
          <FormControlLabel value="Contract" control={<Radio />} label="Contract" />
        </RadioGroup>
      </FormControl>
    </Paper>
    );
  }