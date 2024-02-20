import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThmZmE0NDE4MGExNjIzNTI4M2I4YzYyZGFkYTBjYiIsInN1YiI6IjY1ZDEyN2Q1YWE2NTllMDE4NjQyODM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5B6314cItycUPZ96dF8XKEGzB2Kk_hOIaTyDuVlAhvc';
const apiKey = 'e58ffa44180a16235283b8c62dada0cb';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `/trending/movie/day?language=en-US&api_key=${apiKey}`
    );
    const data = response.data;
    const { results } = data;
    console.log(results);
    return results; 
  } catch (error) {
    console.log('Failed fetch data: ', error);
  }
};

export const searchMovie = async query => {
  try {
    const response = await axios.get(
      `/search/movie?query=${query}&api_key=${apiKey}&language=en-EU&page=1&include_adult=false`
    );
    const data = response.data;
    const { results } = data;
    return results; 
  } catch (error) {
    console.log(error);
    return []; 
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?language=en-US&page=1`
    );
    const data = response.data;
    const { results } = data;
    return results;
  } catch (error) {
    console.error('Failed to fetch movie reviews: ', error);
    throw error;
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`);
    const data = response.data;
    const { cast } = data;
    return cast;
  } catch (error) {
    console.error('Failed to fetch movie cast: ', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${apiKey}&language=en-US`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Błąd podczas pobierania szczegółów filmu");
  }
};
