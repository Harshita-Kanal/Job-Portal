const { job } = require('cron');
var fetch = require('node-fetch');
const { join } = require('path');
const redis = require("redis");
var client = redis.createClient();

const { promisify } = require("util");
//const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

//we are letting the client handle pagination and everything
//start redis with 
//redis-server
//redis-cli for getting cli
//get keyname for getting the corrseponsing data
const baseURL = 'https://jobs.github.com/positions.json'

 async function fetchGithub() {
    let resultCount = 1, onPage = 0;
    const allJobs = []

    //fetch all jobs
    while(resultCount > 0){
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json();
        allJobs.push(...jobs)
        resultCount = jobs.length
        console.log('got', resultCount, 'jobs')
        // console.log({jobs}) 
        onPage++
    }
    console.log('got total', allJobs.length);

    //if we do the same request for every client, it is a good case for
    //database normalization
    //filter the jobs as jr, sr etc
    const jrJobs = allJobs.filter(
        job => {
            const jobTitle = job.title.toLowerCase()
            let isJunior  = true;
            
            if(
                jobTitle.includes('senior') ||
                jobTitle.includes('sr') ||
                jobTitle.includes('manager') ||
                jobTitle.includes('architect')
            ){
                return false
            }

                return isJunior;
        }
    )

    console.log('filetered down to', jrJobs.length)


    //set in redis
    const success = await setAsync('github', JSON.stringify(jrJobs));
    console.log({success})

}

// fetchGithub();

module.exports = fetchGithub
