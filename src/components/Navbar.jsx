import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar({search , setSearch}) {
    
  return (
   <nav className="bg-gray-900 text-white flex justify-between items-center px-8 py-4 shadow-lg">

  <h1 className="text-3xl font-bold text-red-500">
    🎬 MovieHub
  </h1>

 <input
  type="text"
  placeholder="Search movies..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none w-72"
/>
 <ul className="flex gap-6 font-medium">

  <li className="cursor-pointer hover:text-yellow-400 transition">
    <Link to="/">
      Home
    </Link>
  </li>

  <li className="cursor-pointer hover:text-yellow-400 transition">
    <Link to="/favorites">
      Favorites
    </Link>
  </li>

</ul>
</nav>
)
}

export default Navbar;