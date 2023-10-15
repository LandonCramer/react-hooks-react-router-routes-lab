import { movies } from "../data";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const movieList = movies.map((movie) => {
    return <MovieCard key={movie.title} title={movie.title} />;
  });
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
}

export default Home;
