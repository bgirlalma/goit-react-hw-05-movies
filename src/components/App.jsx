import { NavLink, Route, Routes } from "react-router-dom";
import { GlobalStyled } from "components/global.styled";
import { MoviesInput } from "./MoviesInput/moviesInput";
import { TrendingMovies } from "./Trending/trending";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<div><TrendingMovies/></div>}/>
        <Route path="/movies" element={<div><MoviesInput/></div>}/>
      </Routes>

      <GlobalStyled/>
    </div>
  );
};

