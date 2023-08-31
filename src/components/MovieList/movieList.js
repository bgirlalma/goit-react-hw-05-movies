import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container,TitleList, StyledList, StyledImages, WrapperContainer, MovieTitle, DescTitle } from './moviesList.styled';

 const StyledLink = styled(Link)`
 text-decoration: none;
 color: black;
`;

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
            <ul>
            <Slider {...settings}>
                {movies && movies.map(movie => {
                    const { id, title, poster_path, release_date } = movie;
                    return (
                        <div key={id}>
                            <StyledLink to={`/movies/${id}`}>
                                <StyledImages src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${title} Poster`} />
                            
                            <WrapperContainer>
                            <MovieTitle>{title}</MovieTitle>
                                <DescTitle>Release Date: {release_date}</DescTitle>
                            </WrapperContainer>
                            </StyledLink>
                        </div>
                    )
                })}
            </Slider>
            </ul>
           
        </Container>
    );
}