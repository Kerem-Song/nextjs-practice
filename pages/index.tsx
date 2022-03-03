import { useEffect, useState } from 'react';
import Seo from '../components/Seo';

const API_KEY = '74f10d5523eea415cf2a4eb63747800f';
interface Movies {
  id: number;
  original_title: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movies[]>([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
        )
      ).json();
      console.log(results);
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
