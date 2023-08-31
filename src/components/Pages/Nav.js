import styled from 'styled-components';
import { NavLink} from "react-router-dom";

const StyledLink = styled(NavLink)`
font-family: Fira Sans;
font-size: 18px;
text-decoration: none;
  color: black;

  &.active {
    color: orange;
  }
`;

const Navigation = styled.nav`
display: flex;
gap: 10px;
`;

const Nav = () => {
    return (
<nav>
        <Navigation>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
          </Navigation>
</nav>
    );
};

export default Nav;