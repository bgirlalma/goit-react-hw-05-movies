import styled from 'styled-components';
import {Outlet} from "react-router-dom";
import Nav from "./Nav";

const Container = styled.main`
padding-left: 20px;
padding-right: 20px;

&.active {
    color: orange;
  }
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