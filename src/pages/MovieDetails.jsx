import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const addToFavorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const isExist = favorites.find(
    (item) => item.id === movie.id
  );

  if (!isExist) {
    favorites.push(movie);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }
};

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await api.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="text-white text-center text-2xl mt-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full rounded-xl shadow-xl"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold mb-4">
            {movie.title}
          </h1>

          <p className="text-yellow-400 text-xl mb-3">
            ⭐ {movie.vote_average.toFixed(1)}
          </p>

          <p className="mb-3">
            <span className="font-bold">Release Date:</span>{" "}
            {movie.release_date}
          </p>

          <p className="mb-3">
            <span className="font-bold">Language:</span>{" "}
            {movie.original_language.toUpperCase()}
          </p>

          <p className="mb-3">
            <span className="font-bold">Runtime:</span>{" "}
            {movie.runtime} min
          </p>

          <p className="mb-3">
            <span className="font-bold">Budget:</span>{" "}
            ${movie.budget.toLocaleString()}
          </p>

          <p className="mb-6">
            <span className="font-bold">Revenue:</span>{" "}
            ${movie.revenue.toLocaleString()}
          </p>

          <h2 className="text-2xl font-bold mb-3">
            Overview
          </h2>

          <p className="text-gray-300 leading-8">
            {movie.overview}
          </p>

          <Link
            to="/"
            className="inline-block mt-8 bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            ← Back to Home
          </Link>
          <button
  onClick={addToFavorites}
  className="mt-4 ml-4 bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-500 transition"
>
  ❤️ Add to Favorites
</button>
        </div>

      </div>
    </div>
  );
}

export default MovieDetails;