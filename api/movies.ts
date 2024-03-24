// const apiKey =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjhhMTE5YzAzODNlNWUxM2VkODQxNjY4ZWRlNzU4MiIsInN1YiI6IjY1ZTFlN2FhNDFhNTYxMDE4Njg0MGVlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UJVtqRNQ-1QFfb4733gzUQ5VgFYFj1Iimk_1GvDwSMo';



const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2JiZTVmMzc3NzJmZDZiNzE2ZjU1YTE3YWQ3YTA2NSIsInN1YiI6IjY1ZmZhMTdhNzcwNzAwMDE3YzBkNWJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lO-iHva0tvjt23mWX5MQ4LPGpsOZfugpVG8GKLehMX8"

export const fetchTopRatedMovies = async () => {
  const url =
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + apiKey,
    },
  };



  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();
  return json.results;
};