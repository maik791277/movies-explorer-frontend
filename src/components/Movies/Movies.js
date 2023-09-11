import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import { getMovies } from "../../utils/MoviesApi";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchResults from "../SearchResults/SearchResults";
import {createMovie, SaveMovies} from "../../utils/MainApi";

function Movies() {
   const [searchData, setSearchData] = useState({
      searchQuery: "",
      showShortMovies: false,
   });
   const [movies, setMovies] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [visibleCards, setVisibleCards] = useState(null);
   const [notFoundMovies, setNotFoundMovies] = useState(false);
   const [formSubmitted, setFormSubmitted] = useState(false);
   const [saveMovies, setSaveMovies] = useState(null);

   function getSaveMovies() {
      SaveMovies()
      .then((data) => {
         setSaveMovies(data);
      })
      .catch((err) => console.log(err));
   }

   useEffect(() => {
      getSaveMovies();
   }, []);

   function handleSubmit() {
      if (!searchData.searchQuery) {
         setFormSubmitted(true)
         return;
      }else {
         setIsLoading(true);
         setFormSubmitted(false)
      }

      getMovies()
      .then((data) => {
         const searchTerm = searchData.searchQuery.toLowerCase();

         const shortMovies = searchData.showShortMovies
         ? data.filter((movie) => movie.duration <= 50)
         : data;

         const filteredMovies = shortMovies.filter((movie) => {
            const nameEN = movie.nameEN.toLowerCase();
            const nameRU = movie.nameRU.toLowerCase();

            return nameEN.includes(searchTerm) || nameRU.includes(searchTerm);
         });

         setMovies(filteredMovies);

         setNotFoundMovies(filteredMovies.length === 0);

         localStorage.setItem('movies', JSON.stringify(filteredMovies));
         localStorage.setItem('searchData', JSON.stringify(searchData));

         updateVisibleCards();
      })
      .catch((err) => console.log(err))
      .finally(() => {
         setIsLoading(false);
      })
   }

   const loadMoreCards = () => {
      if (window.innerWidth >= 881) {
         setVisibleCards(visibleCards + 3);
      } else if (window.innerWidth >= 280) {
         setVisibleCards(visibleCards + 2);
      }
   };

   const updateVisibleCards = () => {
      if (window.innerWidth >= 881) {
         setVisibleCards(12);
      } else if (window.innerWidth >= 601) {
         setVisibleCards(8);
      } else if (window.innerWidth >= 280) {
         setVisibleCards(5);
      }
   };

   function ClickShowShortMovies() {
      setSearchData((prevState) => {
         return {
            ...prevState,
            showShortMovies: !prevState.showShortMovies,
         };
      });
   }

   useEffect(() => {
      if (movies === null || movies.length === 0) {
         setMovies(null);
      }
   }, [movies]);

   useEffect(() => {
      let timeoutId;
      const handleResize = () => {
         clearTimeout(timeoutId);
         timeoutId = setTimeout(() => {
            updateVisibleCards();
         }, 300);
      };
      window.addEventListener('resize', handleResize);
      updateVisibleCards();

      const savedMovies = JSON.parse(localStorage.getItem('movies'));
      if (savedMovies) {
         setMovies(savedMovies);
      }
      const searchData = JSON.parse(localStorage.getItem('searchData'));
      if (searchData) {
         setSearchData(searchData);
      }

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
   <div className="movies">
      <SearchForm
      formSubmitted={formSubmitted}
      setShowShortMovies={ClickShowShortMovies}
      showShortMovies={searchData.showShortMovies}
      handleSubmit={handleSubmit}
      setSearchText={(text) =>
      setSearchData((prevState) => ({
         ...prevState,
         searchQuery: text,
      }))}
      searchText={searchData.searchQuery}/>
      <div className="movies__container">
         {movies !== null && saveMovies !==null
         ? (
         <MoviesCardList
         loadMoreCards={loadMoreCards}
         isLoading={isLoading}
         visibleCards={visibleCards}
         moviesArray={movies}
         showShortMovies={searchData.showShortMovies}>
            {movies
            .slice(0, visibleCards)
            .map((movie) => {
               return (
               <li key={movie.id} className="moviesCardList__item">
                  <MoviesCard
                  saveMovies={saveMovies}
                  movie={movie}
                  name={movie.nameRU}
                  time={movie.duration}
                  image={`https://api.nomoreparties.co/${movie.image.url}`}
                  metrag={movie.metrag}
                  link={movie.trailerLink}
                  getSaveMovies={getSaveMovies}/>
               </li>
               );
            })}
         </MoviesCardList>
         ) : (
         <SearchResults isLoading={isLoading} movies={movies} notFoundMovies={notFoundMovies}/>
         )}
      </div>
   </div>
   );
}

export default Movies;

