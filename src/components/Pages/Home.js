import { useEffect, useState } from "react";
import { FetchMovies } from "components/Api";

const HomePages = () => {
    const [movies, setMovies] = useState([]);

useEffect(() => {

async function fetchTopMovies() {
    try{
        const moviesData = await FetchMovies();
        setMovies( moviesData.results);
    }catch(error){
        console.log('Данні не знайденні', error);
    }
}

fetchTopMovies();

}, [])
    

    return (
        <div>
           <ul>
           {movies && movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
           ))}
           </ul>
        </div>
    )
}

export default HomePages;

  