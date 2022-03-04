import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Seo from '../components/Seo';

interface Movies {
  id: number;
  original_title: string;
  poster_path?: string;
}

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const handleMovieClick = (id: number, original_title: string) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title: original_title,
        },
      },
      `/movies/${id}`,
    );
  };

  return (
    <div>
      <div className="container">
        <Seo title="home" />
        {results?.map((movie: Movies) => (
          <div
            className="movie"
            key={movie.id}
            onClick={() => handleMovieClick(movie.id, movie.original_title)}
          >
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        ))}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie {
            cursor: pointer;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}</style>
      </div>
    </div>
  );
}

export async function getServerSideProps({}: GetServerSideProps) {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
