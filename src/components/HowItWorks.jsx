import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      icon: 'person',
      title: 'Create Account',
      description: 'Join our vibrant community. Create your account and unlock boundless opportunities.'
    },
    {
      icon: 'search',
      title: 'Search a Job',
      description: 'Discover your ideal job. Our intuitive search feature makes job hunting effortless.'
    },
    {
      icon: 'upload_file',
      title: 'Upload CV/Resume',
      description: 'Showcase your expertise. Upload your CV or resume and stand out to employers.'
    },
    {
      icon: 'work',
      title: 'Get a Job',
      description: 'Achieve your career goals. Apply for jobs and embark on your next adventure.'
    }
  ]

  return (
    <div className="container">
      <h1 className="heading-4">Get Hired In 4 <span className="heading-5">Quick Easy Steps</span></h1>
      <p>The quickest and the most effective way to get hired by the top firm.</p>
      
      <div className="main">
        <div className="box">
          <span className="material-symbols-outlined" id="color">
            {steps[0].icon}
          </span>
          <h4 id="color">{steps[0].title}</h4>
          <p>{steps[0].description}</p>
        </div>
        <div className="box-1">
          <span className="material-symbols-outlined" id="color">
            {steps[1].icon}
          </span>
          <h4 id="color">{steps[1].title}</h4>
          <p>{steps[1].description}</p>
        </div>
      </div>
      
      <div className="main-1">
        <div className="box-2">
          <span className="material-symbols-outlined" id="color">
            {steps[2].icon}
          </span>
          <h4 id="color">{steps[2].title}</h4>
          <p>{steps[2].description}</p>
        </div>
        <div className="box-3">
          <span className="material-symbols-outlined" id="color">
            {steps[3].icon}
          </span>
          <h4 id="color">{steps[3].title}</h4>
          <p>{steps[3].description}</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks