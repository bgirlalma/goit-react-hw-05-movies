import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoCast } from "components/Api";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { WrapperList, Image, Container, InfoWrapp, TitleCast, DescCast} from "./cast.styled";

const Cast = () => {
    const {movieId} = useParams();
    const [infoCast, setInfoCast] = useState(null);

useEffect(() => {
async function SearchMoviesId() {
    try{
        const movieInfoCast = await InfoCast(movieId);
        console.log(movieInfoCast);
    if (movieInfoCast && movieInfoCast.cast && movieInfoCast.cast.length > 0) {
        setInfoCast(movieInfoCast.cast);
    } else {
        console.error("No cast data received");
    }
    }catch(error){
        console.error(error)
    }
    }
          
SearchMoviesId()
    }, [movieId])

    if (!infoCast) {
        return (
        <div className="container">
          <p>Loading Cast...</p>
        </div>
        );
    }
   
return (
    <Container>
        <WrapperList>
    {infoCast && infoCast.length > 0 ? (
    infoCast.map(({ id, name, character, profile_path }) => (
        <div key={id}>
            
                <li>
                <Image src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />

                <InfoWrapp className="wrapper-container">
                    <TitleCast>{name}</TitleCast>
                    <DescCast>{character}</DescCast>
                </InfoWrapp> 
                </li>   
      </div>
    ))
    ) : (
        Notify.failure("Unable to download actor information!")
    )}
     </WrapperList>
        </Container>
    )}

export default Cast;