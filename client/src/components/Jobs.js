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

export default function Jobs({jobs}){
    const numJobs = jobs.length
    const numPages = Math.ceil(numJobs / 30) 
    const useStyles = makeStyles({
        root: {
          maxWidth: 400,
          flexGrow: 1,
        },
    });
      
    //modal
    const [open, setOpen] = React.useState(false);
    const [selectedJob, selectJob]  = React.useState({});

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
 
    const jobsOnPage = jobs.slice(activeStep * 30, (activeStep * 30) + 30)

    //no of jops per page = 50

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    return(
        <div>
        <JobModal open = {open}  job = {selectedJob} handleClose = {handleClose}/>    
        <h1 className = "head">Entry level software jobs</h1>
        <h4 className = "subhead">Found {numJobs} Jobs</h4>
        {
           jobsOnPage.map(
                (job, i) => <Job key = {i} job = {job} onClick = {() => {
                    handleClickOpen();
                    selectJob(job)}}/>
            )
        }
         
        <div style = {{textAlign: 'center'}}>
            Page {activeStep + 1} of {numPages}
        </div>
        <div class = "step-align">
         <MobileStepper    
            variant="progress"
            steps={Math.ceil(numJobs / 30)}
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
          
        </div>  
         
        )
}