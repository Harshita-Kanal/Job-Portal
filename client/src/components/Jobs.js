import { Typography } from '@material-ui/core';
import React from 'react'
// import Typography from '@material-ui/core/Typography';
import Job from './Job';

export default function Jobs({jobs}){
    return(
        <div><h1 className = "head">Entry level software jobs</h1>
        {
           jobs.map(
                (job, i) => <Job key = {i} job = {job} />
            )
        }
        </div>   
        )
}