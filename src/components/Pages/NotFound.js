import styled from 'styled-components';

const StyledDesc = styled.p`
font-family: Fira Sans;
font-size: 30px;

display: flex;
justify-content: center;
align-items: center;
color: red;
`;

export const NotFound = () => {
    return (
        <div>
            <StyledDesc>Oppppsss! Error 404...</StyledDesc>
        </div>
    )
}