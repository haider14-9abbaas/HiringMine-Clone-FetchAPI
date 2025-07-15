import React, { useState, useEffect } from 'react'

const JobListings = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://hiringmine-railway-production.up.railway.app/api/jobAds/all?limit=9&pageNo=1&keyWord=&category=&isPending=false")
      
      if (!response.ok) {
        throw new Error('Failed to fetch jobs')
      }
      
      const data = await response.json()
      setJobs(data.data || [])
    } catch (err) {
      setError(err.message)
      console.error('Error fetching jobs:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container text-center">
        <div className="alert alert-danger" role="alert">
          Error loading jobs: {error}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1 className="heading-2">Latest And Top <span className="heading-3">Job Openings</span></h1>
          </div>
        </div>
      </div>
      
      <div className="main" style={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        padding: '10px', 
        margin: '10px'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: '10px'
        }}>
          {jobs.map((job, index) => (
            <div key={index} className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{job.designation}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{job.companyName}</h6>
                <h6>{job.jobFeseability}</h6>
                <p className="card-text">
                  {job.payRangeEnd === 0 
                    ? 'No Salary Mentioned' 
                    : `Salary: ${job.payRangeStart} - ${job.payRangeEnd}`
                  }
                </p>
                <button className="btn btn-primary">
                  {job.city || job.country}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default JobListings