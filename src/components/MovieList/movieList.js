import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { RotatingLines } from "react-loader-spinner";
import {Loader, Container,TitleList, StyledImages, WrapperContainer, MovieTitle, DescTitle, Wrapp} from './moviesList.styled';

 const StyledLink = styled(Link)`
 text-decoration: none;
 color: black;
`;

 export const MoviesList = ({ movies, title }) => {

    if(!movies.length){
    return(
    <Loader> 
        <RotatingLines  
        strokeColor="red"
        strokeWidth="5"
        animationDuration="1.5"
        width="96"
        visible={true}/>
    </Loader>
    )
    }

    return (
        <Container>
            <TitleList>{title}</TitleList>
            <Wrapp>
             {Array.isArray(movies) && movies.map(movie => {
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
            </Wrapp>
           
        </Container>
    );
}
