import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="group bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/40">

        <div className="relative overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-[350px] object-contain bg-gray-800 transition duration-500 group-hover:scale-110"
          />

          <div className="absolute top-3 right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
            ⭐ {movie.vote_average.toFixed(1)}
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-white text-lg font-bold truncate">
            {movie.title}
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            📅 {movie.release_date?.slice(0, 4)}
          </p>
        </div>

      </div>
    </Link>
  );
}

export default MovieCard;