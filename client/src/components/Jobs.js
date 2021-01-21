import { Typography } from '@material-ui/core';
import React from 'react'
// import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Job from './Job';
import JobModal from './JobModal'
import CheckCard from './CheckCard'

export default function Jobs({jobs}){
    // const numJobs = jobs.length
     
    const useStyles = makeStyles({
        root: {
          maxWidth: 400,
          flexGrow: 1,
        },
    });
      
    //modal
    const [open, setOpen] = React.useState(false);
    const [selectedJob, selectJob]  = React.useState({});
    const [value, setValue] = React.useState('All');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    
    var remJobs = []
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    
    if(value === "All"){
      for(var i = 0; i < jobs.length; i++){
          remJobs.push(jobs[i])   
      }
      var jobsOnPage = remJobs.slice(activeStep * 30, (activeStep * 30) + 30)
    }
    
    else if(value === "Remote"){
     
      for(var i = 0; i < jobs.length; i++){
        if(jobs[i].location.toString() === "Remote"){
            remJobs.push(jobs[i])
        }
    }
      var jobsOnPage = remJobs.slice(activeStep * 30, (activeStep * 30) + 30)
    }

    else if(value === "US"){  
    for(var i = 0; i < jobs.length; i++){
      if(jobs[i].location.toString().includes("US")){
        remJobs.push(jobs[i])
      }
    }
      var jobsOnPage = remJobs.slice(activeStep * 30, (activeStep * 30) + 30)
    }
    else if(value === "UK") {
      for(var i = 0; i < jobs.length; i++){
        if(jobs[i].location.toString().includes("UK") ){
          remJobs.push(jobs[i])
        }
      }
      var jobsOnPage = remJobs.slice(activeStep * 30, (activeStep * 30) + 30)
    }
    else if(value === "Full Time") {
      for(var i = 0; i < jobs.length; i++){
        if(jobs[i].type === "Full Time"){
          remJobs.push(jobs[i])
        }
      }
      var jobsOnPage = remJobs.slice(activeStep * 30, (activeStep * 30) + 30)
    }

    else if(value === "Contract") {
      for(var i = 0; i < jobs.length; i++){
        if(jobs[i].type === "Contract"){
          remJobs.push(jobs[i])
        }
      }
      var jobsOnPage = remJobs.slice(activeStep * 30, (activeStep * 30) + 30)
    }
    else{
      for(var i = 0; i < jobs.length; i++){
        remJobs.push(jobs[i])   
    }
    var jobsOnPage = remJobs.slice(activeStep * 30, (activeStep * 30) + 30)
    }
    
    //numJobs
    // const numPages = Math.ceil(numJobs / 30)
    var numPages, numJobs;
    if(remJobs.length > 30){
      numJobs = remJobs.length
      numPages = Math.ceil(numJobs / 30)
    }
    else{
      numPages = 1
    }
    //no of jobs per page = 50

    const handleNext = () => {
        if(numPages > 1){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    return(
        <div>
        <JobModal open = {open}  job = {selectedJob} handleClose = {handleClose}/>    
        <h1 className = "head">Entry level software jobs</h1>
        <h4 className = "subhead">Found {numJobs} Jobs</h4>
        <CheckCard value = {value} setValue = {setValue} />
        {

           jobsOnPage.map(
                (job, i) => <Job key = {i} job = {job} onClick = {() => {
                    handleClickOpen();
                    selectJob(job)}}/>
            )
        }
         
        <div style = {{textAlign: 'center', color: 'white'}}>
            Page {activeStep + 1} of {numPages}
        </div>
        <div class = "step-align">
         <MobileStepper    
            variant="progress"
            steps={numPages}
            position="static"
            activeStep={activeStep}
            className={classes.root}
            nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                Next
                <KeyboardArrowRight />
            </Button>
            }
            backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                <KeyboardArrowLeft />
                Back
            </Button>
            }
        />
        </div>
          <br/>
        </div>  
         
        )
}