import React from 'react'

const PopularSearches = () => {
  const searchTerms = [
    'Software', 'Developer', 'Backend', 'React', 'Node', 
    'React Native', 'Flutter', 'UI/UX', 'Designer', 'Web', 
    'SEO', 'Marketing', 'Writer'
  ]

  return (
    <>
      <div className="container text-center btn-2">
        <div className="row">
          <div className="col">
            <h1 className="heading-1">Popular Searches</h1>
          </div>
        </div>
      </div>
      
      <div className="col btn-1">
        {searchTerms.map((term, index) => (
          <button 
            key={index}
            type="button" 
            className="btn btn-light btn-2"
            onClick={() => console.log(`Searching for: ${term}`)}
          >
            {term}
          </button>
        ))}
      </div>
    </>
  )
}

export default PopularSearches