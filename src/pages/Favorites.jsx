import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Favorites() {

  const [favorites, setFavorites] = useState([]);


  useEffect(() => {

    const savedMovies = JSON.parse(
      localStorage.getItem("favorites")
    ) || [];

    setFavorites(savedMovies);

  }, []);



  const removeFromFavorites = (id) => {

    const updatedFavorites = favorites.filter(
      (movie) => movie.id !== id
    );


    setFavorites(updatedFavorites);


    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

  };



  return (
    <div className="min-h-screen bg-gray-900 px-6 py-8">


      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        My Favorites ❤️
      </h1>



      {favorites.length === 0 ? (

        <p className="text-center text-gray-400 text-xl mt-10">
          No favorite movies yet
        </p>


      ) : (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


          {favorites.map((movie) => (

            <div key={movie.id}>

              <MovieCard movie={movie} />


              <button
                onClick={() => removeFromFavorites(movie.id)}
                className="
                  w-full
                  mt-3
                  bg-red-600
                  text-white
                  py-2
                  rounded-lg
                  font-bold
                  hover:bg-red-500
                  transition
                "
              >
                🗑️ Remove from Favorites
              </button>


            </div>

          ))}


        </div>

      )}


    </div>
  );
}


export default Favorites;