import React from 'react'
import Typography from '@material-ui/core/Typography';
import Job from './Job';

export default function Jobs({jobs}){
    return(
        <div><Typography variant = "h2">Entry level software jobs</Typography>
        {
           jobs.map(
                job => <Job job = {job} />
            )
        }
        </div>   
        )
}