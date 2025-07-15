import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PopularSearches from './components/PopularSearches'
import JobListings from './components/JobListings'
import HowItWorks from './components/HowItWorks'
import JobCategories from './components/JobCategories'
import TopProfiles from './components/TopProfiles'
import ConnectSection from './components/ConnectSection'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.body.style.background = "black"
    } else {
      document.body.style.background = "linear-gradient(180deg, #ffffff 0%, #eeebff 69.79%, #ebe8ff 99.99%, #e1deff 100%)"
    }
  }

  return (
    <div className="App">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <PopularSearches />
      <img src="./assets/art work-df4f7a46.png" alt="Artwork" style={{width: '100%'}} />
      <JobListings />
      <HowItWorks />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1>Find Your Dream Job <span className="heading-5">Super Fast Ever.</span></h1>
            <p>We are here to help jobseekers connect with organizer and companies. We are <br /> provides the best opportunities to professional people.</p>
            <img src="./assets/banner_career-4b7d86fb.webp" className="img-fluid" alt="Career Banner" />
          </div>
        </div>
      </div>
      <TopProfiles />
      <JobCategories />
      <ConnectSection />
      <Footer />
    </div>
  )
}

export default App