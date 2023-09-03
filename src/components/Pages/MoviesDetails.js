import { useEffect, useState } from "react";
import { useLocation, useParams, Outlet, Link } from "react-router-dom";
import { QueryInfoMovies } from "components/Api";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { RotatingLines } from "react-loader-spinner";
import { Loader, Button, Wrapp, Image, InfoWrapp, InfoTitle, InfoOverview ,InfoGenres, InfoDesc } from "components/StyledPages/moviesDetails.styled";
import { AiOutlineCaretLeft } from "react-icons/ai";
import styled from 'styled-components';

export const StyledLink = styled(Link)`
text-decoration: none;
`;

const MoviesDetails = () => {
    const {movieId} = useParams();
    const [moviesInfo, setMoviesId] = useState(null);
    const location = useLocation()

    const backLinkHref = location?.state?.from ?? {pathname: "/"};

    useEffect(() => {
async function SearchMoviesId() {
  
    try{
const fetchMoviesId = await QueryInfoMovies(movieId);
setMoviesId(fetchMoviesId)
    }catch(error){
        console.error(error)
    }
}

SearchMoviesId()
    }, [movieId])

    if (!moviesInfo) {
        return (
        <Loader className="container">
            <RotatingLines  
            strokeColor="red"
            strokeWidth="5"
            animationDuration="1.5"
            width="96"
            visible={true}/> 
        </Loader>
        );
    }
    const { genres, overview, title, vote_average, release_date, poster_path } = moviesInfo;

    return (
        <div className="container">
           
           <Button>
                <StyledLink to={backLinkHref}><AiOutlineCaretLeft/>Home</StyledLink>
            </Button>
            {moviesInfo ? (
    <Wrapp>
        <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <InfoWrapp className="wrapper-container">
            <InfoTitle>{`${title} (${release_date ? release_date.substring(0, 4) : ''})`}</InfoTitle>
            <InfoDesc>User score: {vote_average}</InfoDesc>

            <InfoOverview>Overview</InfoOverview>
            <InfoDesc>{overview}</InfoDesc>

            <InfoGenres>Genres</InfoGenres>
                <InfoDesc>{genres.map((genre) => genre.name).join(', ')}</InfoDesc>
        </InfoWrapp>
    </Wrapp>
) : (
    Notify.failure("There is an error, please reload the page!")
)}

<div>
<hr/>
            <h2>{title}</h2>
    <ul>
    <li>
                <Link to={`/movies/${movieId}/cast`} >Cast</Link>
            </li>

            <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </li>
    </ul>
</div>
            
            <Outlet/>
        </div>
        
    )
};

export default MoviesDetails;