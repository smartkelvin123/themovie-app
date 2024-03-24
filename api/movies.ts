
const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2JiZTVmMzc3NzJmZDZiNzE2ZjU1YTE3YWQ3YTA2NSIsInN1YiI6IjY1ZmZhMTdhNzcwNzAwMDE3YzBkNWJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lO-iHva0tvjt23mWX5MQ4LPGpsOZfugpVG8GKLehMX8"
const headers = {
    accept: 'application/json',
    Authorization: 'Bearer ' + apiKey,
  };
  export const fetchTopRatedMovies = async ({ pageParam }) => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageParam}`;
    const options = {
      method: 'GET',
      headers,
    };
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error('Failed to fetch movies');
    }
    const json = await res.json();
    return json.results;
  };
  export const fetchMovie = async (id: number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: 'GET',
      headers,
    };
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error('Failed to fetch movies');
    }
    const json = await res.json();
    return json;
  };