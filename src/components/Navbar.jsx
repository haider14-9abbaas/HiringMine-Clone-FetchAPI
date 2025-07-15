import React from 'react'

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="./assets/Hiring Mine Logo-453a72d3.png" width="200px" height="50" alt="Hiring Mine Logo" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <a className="nav-link active" aria-current="page" href="#">About Us</a>
            <a className="nav-link" href="#">People</a>
            <a className="nav-link" href="#">Jobs</a>
            <a className="nav-link" href="#">Login</a>
            <a className="nav-link" href="#">Join Now</a>
            <a className="nav-link post" href="#">Employee / Post Job</a>
          </div>

          <div className="d-flex justify-content-center my-3 my-lg-0">
            <button 
              id="Dark" 
              className="btn btn-outline-secondary"
              onClick={toggleDarkMode}
            >
              <span className="material-symbols-outlined align-middle">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar