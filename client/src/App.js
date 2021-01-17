import fetch from 'node-fetch';
import './App.css';
import Jobs from './components/Jobs';
import React from 'react'
import Paper from '@material-ui/core/Paper';
const JOB_API_URL = "http://localhost:3001/jobs"

const mockJobs = [
  {title: 'SWE-1', company: 'Google'},
  {title: 'SWE-1', company: 'Google'}
]

async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL)
  const json = await res.json(); 
  
  updateCb(json)
  console.log({json})
}


function App() {
  
  const [jobList, updateJobs] = React.useState([])

  //similar to componentdidmount
  React.useEffect(
    () => {
        fetchJobs(updateJobs);
    }, [])

  return (
    <div className="App">
      <Jobs jobs = {jobList}/>
    </div>
  );
}

export default App;
