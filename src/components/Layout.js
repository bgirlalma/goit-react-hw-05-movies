import styled from 'styled-components';
import {Outlet} from "react-router-dom";
import Nav from "./Pages/Nav";

const Container = styled.div`
padding: 20px 0 0 0;
`;

const Layout = () => {
    return (
    <Container>
        <Nav/>
        <hr/>

        <Outlet/>
    </Container>
    )
}

export default Layout;