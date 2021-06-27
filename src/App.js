import "./App.css";
import { useState } from "react";
import MovieList from "./components/MovieList";
import { useEffect } from "react";
import Heading from "./components/Heading";
import Search from "./components/Search";
import AddFavour from "./components/AddFavour";
import RemoveFavour from "./components/RemoveFavour";
import Detail from "./components/Detail";

function App() {
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("all");
  const [showDetail, setShowDetail] = useState(false);
  const [movieID, setMovieID] = useState("");
  const [favoritesList, setFavoritesList] = useState([]);
  const fetchMovie = async (searchValue) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=c9127ecc`
    );
    const results = await response.json();
    console.log(results);
    if (results.Search) {
      setMovie(results.Search);
    }
  };
  useEffect(() => {
    fetchMovie(searchValue);
  }, [searchValue]);
  const openDetail = (id) => {
    setMovieID(id);
    setShowDetail(true);
  };

  const saveFavorite = (movie) => {
    localStorage.setItem("favorites-movie",JSON.stringify(movie));
  };
  useEffect(() => {
    setFavoritesList(JSON.parse(localStorage.getItem("favorites-movie")));
  }, []);
  const addFavorites = (movie) => {
    const newFavorites = [...favoritesList, movie];
    const favouritesItems = newFavorites.filter((data,index)=>{
      return newFavorites.indexOf(data) === index;
    })
    setFavoritesList(favouritesItems);
    saveFavorite(favouritesItems);
  };

  const removeFavorites = (movie) => {
    const newFavorites = favoritesList.filter(
      (favorites) => favorites.imdbID !== movie.imdbID
    );
    setFavoritesList(newFavorites);
    saveFavorite(newFavorites);
  };

  return (
    <div className="container-fluid app">
      <h1 className="title-name">FTees.net</h1>
      <div className="row d-flex align-items-center mt-4 mb-4"></div>
      {showDetail ? (
        <div>
          <Heading title="Movie detail" />
          <Detail idPara={movieID} />
        </div>
      ) : (
        " "
      )}

      <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading title="Movies" />
        <Search value={searchValue} setSearchValue={setSearchValue}></Search>
      </div>
      <div className="row">
        <MovieList
          movie={movie}
          favorites={AddFavour}
          addFavorites={addFavorites}
          openDetail={openDetail}
        ></MovieList>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading title="Favourites Movie" />
      </div>
      <div className="row">
        <MovieList
          movie={favoritesList}
          favorites={RemoveFavour}
          addFavorites={removeFavorites}
          openDetail={openDetail}
        ></MovieList>
      </div>
    </div>
  );
}

export default App;
