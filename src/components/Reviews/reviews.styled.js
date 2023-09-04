import styled from 'styled-components';

export const Container = styled.div`
padding: 20px;
`;

export const Wrapper = styled.div`
max-width: 760px;
`;

export const ReviewsTitle = styled.h2`
font-family: Droid Sans, sans-serif;
font-size: 16px;
margin-bottom: 10px;
color: #990000;
`;

export const ReviewsDesc = styled.p`
font-family: Droid Sans, sans-serif;
font-size: 14px;
margin-bottom: 10px;

&:last-child{
    margin-bottom: 0;
}
`;