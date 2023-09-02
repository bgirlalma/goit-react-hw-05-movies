import { Route, Routes } from "react-router-dom";
import { GlobalStyled } from "./global.styled";
import HomePages from "./Pages/Home";
import MoviesPage from "./Pages/Movies";
import MoviesDetails from "./Pages/MoviesDetails";
import Cast from "./Cast/cast";
import ReviewsMovies from "./Reviews/reviews";
import Layout from "./Layout";


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePages />}/>
          <Route path="movies" element={<MoviesPage />}/>
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="movies/:movieId/cast" element={<Cast />}/>
          <Route path="movies/:movieId/reviews" element={<ReviewsMovies />}/>
          {/* <Route path="*" element={<NotFound/>} /> */}
        </Route>
        </Route>
      </Routes>


      <GlobalStyled/>
    </>
  );
};

