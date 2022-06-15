import MovieCard from "./MovieCard"
const MovieList=({movies,setMovies,titleF,ratingF})=>{
  var movieToShow = movies.filter(movie=>movie.title.toUpperCase().includes(titleF.toUpperCase()) && movie.rating <= ratingF).map(movie=><MovieCard movie={movie} setMovies={setMovies} movies={movies}/>)        

return(
          <div className= "List" >
            {
              movieToShow.length == 0 ? <img src= '/noResult.jpg'/> : movieToShow
            }
            {/* <img  className= "imgRad" src={el.posterURL}/> */}      
          </div>

)
}

export default MovieList 