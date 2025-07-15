import React, { useState, useEffect } from 'react'

const TopProfiles = () => {
  const [profiles, setProfiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProfiles()
  }, [])

  const fetchProfiles = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://hiringmine-railway-production.up.railway.app/api/users/home?sortBy=mostViewed")
      
      if (!response.ok) {
        throw new Error('Failed to fetch profiles')
      }
      
      const data = await response.json()
      setProfiles(data.data?.slice(0, 9) || [])
    } catch (err) {
      setError(err.message)
      console.error('Error fetching profiles:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading profiles...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container text-center">
        <div className="alert alert-danger" role="alert">
          Error loading profiles: {error}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1 className="heading-6">Our Top <span className="heading-7">Profiles</span></h1>
            <p>
              Explore a curated selection of the most talented and skilled professionals from diverse industries. We connect <br />
              top-tier individuals with companies seeking exceptional expertise to achieve their goals.
            </p>
          </div>
        </div>
      </div>
      
      <div className="main-2" style={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-around'
      }}>
        <div className="container-1" style={{
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-around', 
          gap: '30px'
        }}>
          {profiles.map((profile, index) => (
            <div key={index} className="card" style={{ width: '18rem' }} id="cards">
              <img 
                src={profile.profilePic || './assets/download.jpg'} 
                className="card-img-top picture" 
                alt="Profile"
                onError={(e) => {
                  e.target.src = './assets/download.jpg'
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{profile.firstName} {profile.lastName}</h5>
                <h5 className="card-text">
                  {profile.jobTitle?.length > 20 
                    ? profile.jobTitle.slice(0, 18) + "..." 
                    : profile.jobTitle
                  }
                </h5>
                <button className="btn btn-primary">Profile View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TopProfiles