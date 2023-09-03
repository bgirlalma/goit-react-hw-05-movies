import styled from 'styled-components';

export const Container = styled.div`
padding-left: 20px;
padding-right: 20px;
`;

export const WrapperList = styled.ul`
display: grid;
grid-template-columns: repeat(8, 1fr); 
gap: 10px;

padding-top: 20px;
`;

export const Image = styled.img`
width: 100%;
height: 200px;
object-fit: cover;
`;

export const InfoWrapp = styled.div`
padding: 10px;
`;

export const TitleCast = styled.h2`
font-family: Fira Sans;
font-size: 16px;
`;

export const DescCast = styled.p`
font-family: Fira Sans;
font-size: 14px;
`;