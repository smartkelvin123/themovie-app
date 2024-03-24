export const fetchWatchlistMovies = async () => {
    const url =
      'https://api.themoviedb.org/3/account/21050033/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer   eyJhdWQiOiI3Y2JiZTVmMzc3NzJmZDZiNzE2ZjU1YTE3YWQ3YTA2NSIsInN1YiI6IjY1ZmZhMTdhNzcwNzAwMDE3YzBkNWJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ',
      },
    };
  
    const res = await fetch(url, options);
  
    if (!res.ok) {
      throw new Error('Failed to fetch movies');
    }
  
    const json = await res.json();
    return json.results;
  };
  
  export const addMovieToWatchList = async (movieId: number) => {
    const url = 'https://api.themoviedb.org/3/account/21050033/watchlist';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization:
          'Bearer  eyJhdWQiOiI3Y2JiZTVmMzc3NzJmZDZiNzE2ZjU1YTE3YWQ3YTA2NSIsInN1YiI6IjY1ZmZhMTdhNzcwNzAwMDE3YzBkNWJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ',
      },
      body: JSON.stringify({
        media_type: 'movie',
        media_id: movieId,
        watchlist: true,
      }),
    };
  
    const res = await fetch(url, options);
  
    if (!res.ok) {
      throw new Error('Failed to fetch movies');
    }
  
    const json = await res.json();
    return json;
  };