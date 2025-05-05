import React from 'react'
import movies from './movies.json'
import Movie from './movie'

const MovieClone = () => {
  
  return (
    <div>

    <div className='main'>

    {
      movies.map((e)=>{
        return(
          <Movie
            img={e.Poster}
            title={e.Title}
            year={e.Year}
          />
        )
      })
    }
    

     </div>

     </div>
  )
}

export default MovieClone