import styled from 'styled-components';

export const Loader  = styled.div`
display: flex;
justify-content: center;
`;

export const Button = styled.button`
border: 1px solid #5e0080;
border-radius: 10px;
padding: 5px;
margin-left: 20px;

font-family: Droid Sans, sans-serif;
font-size: 16px;


`;

export const Wrapp = styled.div`
display: flex;
padding: 20px 20px 0 20px;
`;

export const Image = styled.img`
width: 420px;
height: 100%;
object-fit: contain;
`;

export const InfoWrapp = styled.div`
margin-left: 20px;
margin-right: 20px;
`;

export const InfoTitle = styled.h2`
font-family: Droid Sans, sans-serif;
font-size: 22px;
margin-top: 10px;
`;

export const InfoOverview = styled.h3`
font-family: Droid Sans, sans-serif;
font-size: 18px;
margin-bottom: 10px;
`;

export const InfoGenres = styled.h4`
font-family: Droid Sans, sans-serif;
font-size: 16px;
margin-bottom: 10px;
`;

export const InfoDesc = styled.p`
font-family: Droid Sans, sans-serif;
font-size: 16px;
margin-bottom: 10px;

&:last-child{
    margin-bottom: 0;
}
`;
