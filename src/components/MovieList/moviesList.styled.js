import styled from 'styled-components';

export const Loader  = styled.div`
display: flex;
justify-content: center;
`;

export const Container = styled.div`
padding: 0 20px;
`;

export const TitleList = styled.h2`
font-family: Fira Sans;
font-size: 24px;

display: flex;
justify-content: center;
margin-bottom: 20px;

`;

export const Wrapp = styled.div`
display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px; 
`;

export const StyledImages = styled.img`
width: 100%;
height: 300px;
object-fit: cover;
`;

export const WrapperContainer = styled.div`
padding: 10px 5px 0 5px;
`;

export const MovieTitle = styled.h3`
font-family: Fira Sans;
font-size: 16px;
color: blue;
margin-bottom: 10px;
`;

export const DescTitle = styled.p`
font-family: Fira Sans;
font-size: 14px;
`;

