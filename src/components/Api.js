import axios from "axios";

axios.defaults.baseURL = 'f45906a67bb4f8755162511f0bc0ffc5';

export const FetchMovies = async () => {
    const response = await axios.get('/trending/get-trending');
    return response.data;
}

export const KeywordSearch = async () => {
const response = await axios.get('/search/search-movies');
return response.data;
};

export const QueryInfoMovies = async () => {
     const response = await axios.get('/movies/get-movie-details');
     return response.data;
}

export const RequestSearchActor = async () => {
    const response = await axios.get('/movies/get-movie-credits ');
    return response.data;
}

export const RequestPageReview = async () => {
    const response = await axios.get('/movies/get-movie-reviews');
    return response.data;
}

