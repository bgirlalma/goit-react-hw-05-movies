import { useEffect, useState } from "react";
import { FetchMovies } from "components/Api";
import { MoviesList } from "components/MovieList/movieList";

const HomePages = () => {
    const [movies, setMovies] = useState([]);
   

useEffect(() => {
async function fetchTopMovies() {
    try{
        const moviesData = await FetchMovies();
        setMovies(moviesData)
    }catch(error){
        console.log('Данні не знайденні', error);
    }
}

fetchTopMovies();

}, [])
    
    return (
        <div>
       <MoviesList title='Trending today' movies={movies}/>
        </div>
    )
}

export default HomePages;

  