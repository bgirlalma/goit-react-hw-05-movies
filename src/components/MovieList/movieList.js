import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container,TitleList, StyledList, StyledImages, MovieTitle } from './moviesList.styled';

export const MoviesList = ({ movies, title }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
    };

    return (
        <Container>
            <TitleList>{title}</TitleList>
            <StyledList>
            <Slider {...settings}>
                {movies && movies.map(movie => {
                    const { id, title, poster_path, overview, release_date } = movie;
                    return (
                        <div key={id}>
                            <Link to={`/movies/${id}`}>
                                <StyledImages src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${title} Poster`} />
                            
                                <MovieTitle>{title}</MovieTitle>
                                <p>{overview}</p>
                                <p>Release Date: {release_date}</p>
                            </Link>
                        </div>
                    )
                })}
            </Slider>
            </StyledList>
           
        </Container>
    );
}