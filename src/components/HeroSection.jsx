import React, { useState } from 'react'

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    console.log('Searching for:', searchTerm)
    // Add search functionality here
  }

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1 className="heading">Dig. Apply <br /> Prepare Your Future</h1>
            <p className="paragraph">
              Hiring Mine connects employer and job seekers, where employers are the source of <br /> 
              the resources and the job seeker can find and apply for their targeted job.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <input 
          type="text" 
          style={{ width: '600px', height: '40px' }} 
          placeholder="Search By Role or Keyboard"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="btn">
        <button id="find" onClick={handleSearch}>Find Jobs</button>
      </div>
    </>
  )
}

export default HeroSection