import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default function Job({job, onClick}){
    return(
        <div>
        <Paper onClick = {onClick} className = {'job'}   elevation = {3} >
          
                <div className = "res">
                        <div className = "header">{job.title}</div>
                        <div className = "comp">{job.company}</div> 
                        <div className = "top">{job.location}</div>
                </div> 
                <div className = "res2">
                        <div>{job.created_at.split(' ').slice(0, 4).join(' ')}</div> 
                </div> 
       
        </Paper> 
        <br/>
        </div>
       
    )
}