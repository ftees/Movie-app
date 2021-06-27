import React from 'react'

const MovieList = props => {
  const Favourites = props.favorites;
  return (
       <>
      {props.movie.map((movie,index) =>(
         
           <div className="d-flex justify-content-start m-2 image-container" onClick ={() => props.openDetail(movie.imdbID)}>
           <img src={movie.Poster} alt=""></img>
           <div className="overlay d-flex justify-content-center align-items-center" onClick={() => props.addFavorites(movie)}>
             <Favourites />
           </div>
         </div>
         
      ))}
    </>
        
  )
}


export default MovieList
