import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import api from "../services/api";

function Home({ search }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        let response;

        if (search.trim() === "") {
          response = await api.get("/trending/movie/week");
        } else {
          response = await api.get("/search/movie", {
            params: {
              query: search,
            },
          });
        }

        setMovies(response.data.results);

      } catch (error) {
        console.log(error);
      }
    };

    getMovies();

  }, [search]);


  return (
    <>
      <div className="container mx-auto px-6 py-8">

        <h1 className="text-4xl font-bold mb-8 text-center text-black">
          {search ? "Search Results" : "Trending Movies"}
        </h1>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {movies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
            />
          ))}

        </div>

      </div>
    </>
  );
}

export default Home;