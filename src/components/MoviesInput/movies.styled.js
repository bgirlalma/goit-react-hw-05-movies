import styled from 'styled-components';

export const FormMovies = styled.form`
width: 320px;
padding-top: 20px;
padding-bottom: 20px;
display: flex;
`;

export const InputMovies = styled.input`
border-color: black;
border-radius: 40px;
width: 100%;
padding-top: 10px;
padding-bottom: 10px;

font-family: BlinkMacSystemFont, sans-serif;
font-size: 16px;
color: black;
padding-left: 20px;

`;

export const ButtonMovies = styled.button`
border: none;
margin-left: 10px;
padding: 15px 10px;

font-family: BlinkMacSystemFont, sans-serif;
font-size: 16px;
border-radius: 50%;
background-color: rgb(171, 192, 255);
color: #fff;

&:hover{
background-color: rgb(1, 111, 252);
color: rgb(1, 255, 195);
}
`;