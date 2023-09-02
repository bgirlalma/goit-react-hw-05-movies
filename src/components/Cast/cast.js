import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QueryInfoMovies } from "components/Api";
import { RotatingLines } from "react-loader-spinner";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Cast = () => {

    const {movieId} = useParams();
    const [infoCast, setInfoCast] = useState(null);

    useEffect(() => {
        async function SearchMoviesId() {
          
            try{
        const movieInfoCast = await QueryInfoMovies(`${movieId}/credits`);
        setInfoCast(movieInfoCast)
            }catch(error){
                console.error(error)
            }
        }
    
        
SearchMoviesId()
    }, [movieId])

    if (!infoCast) {
        return (
        <div className="container">
            <RotatingLines  
            strokeColor="red"
            strokeWidth="5"
            animationDuration="1.5"
            width="96"
            visible={true}/> 
        </div>
        );
    }
   
    return (
        <div>

{infoCast ? (
    infoCast.filter((actor) => actor.id === movieId).map(({id, name, profile_path }) => (
        <div key={id}>
        <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
        <div className="wrapper-container">
          <h2>{name}</h2>
          <p> </p>
        </div>
      </div>
    ))
) : (
    Notify.failure("Unable to download actor information!")
)}
        </div>
    )}



export default Cast;