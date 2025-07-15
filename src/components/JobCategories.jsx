import React from 'react'

const JobCategories = () => {
  const categories = [
    { name: 'Marketing & Sales', jobs: 652, icon: 'storefront' },
    { name: 'Development', jobs: 411, icon: 'storefront' },
    { name: 'Art & Illustration', jobs: 174, icon: 'storefront' },
    { name: 'Animation', jobs: 99, icon: 'storefront' },
    { name: 'Management', jobs: 80, icon: 'storefront' },
    { name: 'Information Tech', jobs: 80, icon: 'storefront' }
  ]

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1 className="heading-8">
              Countless Career Options <span className="heading-9">Are Waiting For You To Explore</span>
            </h1>
          </div>
        </div>
      </div>
      
      <div className="main-3">
        <div className="box-4">
          <span className="material-symbols-outlined" id="color">
            {categories[0].icon}
          </span>
          <h4 id="color">{categories[0].name}</h4>
          <p>{categories[0].jobs} Jobs</p>
        </div>
        <div className="box-5">
          <span className="material-symbols-outlined" id="color">
            {categories[1].icon}
          </span>
          <h4 id="color">{categories[1].name}</h4>
          <p>{categories[1].jobs} Jobs</p>
        </div>
      </div>
      
      <div className="main-4">
        <div className="box-6">
          <span className="material-symbols-outlined" id="color">
            {categories[2].icon}
          </span>
          <h4 id="color">{categories[2].name}</h4>
          <p>{categories[2].jobs} Jobs</p>
        </div>
        <div className="box-7">
          <span className="material-symbols-outlined" id="color">
            {categories[3].icon}
          </span>
          <h4 id="color">{categories[3].name}</h4>
          <p>{categories[3].jobs} Jobs</p>
        </div>
      </div>
      
      <div className="main-5">
        <div className="box-8">
          <span className="material-symbols-outlined" id="color">
            {categories[4].icon}
          </span>
          <h4 id="color">{categories[4].name}</h4>
          <p>{categories[4].jobs} Jobs</p>
        </div>
        <div className="box-9">
          <span className="material-symbols-outlined" id="color">
            {categories[5].icon}
          </span>
          <h4 id="color">{categories[5].name}</h4>
          <p>{categories[5].jobs} Jobs</p>
        </div>
      </div>
    </>
  )
}

export default JobCategories