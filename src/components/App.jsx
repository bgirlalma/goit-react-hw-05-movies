import { Route, Routes } from "react-router-dom";
import { GlobalStyled } from "./global.styled";
import HomePages from "./Pages/Home";
import MoviesPage from "./Pages/Movies";
import MoviesDetails from "./Pages/MoviesDetails";
import Cast from "./Cast/cast";
import Layout from "./Layout";
import Reviews from "./Reviews/reviews";
import { NotFound } from "./Pages/NotFound";


export const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} ></Route>
        <Route path="movies" element={<MoviesPage />} ></Route>

        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} ></Route>
          <Route path="reviews" element={<Reviews />} ></Route>
        </Route>
        <Route path="*" element={<NotFound/>} ></Route>
      </Route>
    </Routes>

    <GlobalStyled />
  </div>
);
};

