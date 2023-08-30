import axios from "axios";

const token  = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWJmN2ZhMjVmM2VmMTk5Y2IzNmIyYTUwMDc4NWFkMiIsInN1YiI6IjY0ZWY0YTZmY2FhNTA4MDEyYjA1Yjc0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CT6TQvVW2dOCQMAccK8zGfXDSrp2d0zmJbmoledCtMs'

const authorizationMovies = {
headers: {
Authorization: `Bearer ${token}`,
}} 

// функция для отримання списку популярних фильмів
const FetchMovies = async () => {
try {
const url = `https://api.themoviedb.org/3/trending/movie/day`;
const response = axios.get(url, authorizationMovies);
return (await response).data.results;
} catch (error) {
console.error('Помилка при завантаженні фільма: ', error);
throw error;
}
}

// Пошук по назві фільма
 const KeywordSearch = async (query) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query="${query}"`
      const response = await axios.get(url, authorizationMovies);
      return response.data.results;
    } catch (error) {
      console.error('Помилка при пошуку фільма:', error);
      throw error;
    }
  };
  
//   Детальна информація про фільм по його ID
 const QueryInfoMovies = async (movieId) => {
    try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}`
      const response = await axios.get(url, authorizationMovies);
      return response.data;
    } catch (error) {
      console.error('Неможливо отримати інформація про поточний фільм: ', error);
      throw error;
    }
  }
  
//   const RequestSearchActor = async () => {
//     try {
//       const response = await AuthorizationMovies.get('/movies/get-movie-credits');
//       return response.data;
//     } catch (error) {
//       console.error('Error searching movie credits:', error);
//       throw error;
//     }
//   }
  
//    const RequestPageReview = async () => {
//     try {
//       const response = await AuthorizationMovies.get('/movies/get-movie-reviews');
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching movie reviews:', error);
//       throw error;
//     }
//   }

  export { QueryInfoMovies, KeywordSearch, FetchMovies} 