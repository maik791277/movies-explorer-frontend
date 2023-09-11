import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useEffect, useState} from "react";
import {SaveMovies} from "../../utils/MainApi";
import SearchResults from "../SearchResults/SearchResults";
import MoviesSaveCard from "../MoviesSaveCard/MoviesSaveCard";

function SavedMovies () {
   const [showShortMovies, setShowShortMovies] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [movies, setMovies] = useState(null);
   const [moviesList, setMoviesList] = useState(null);
   const [searchQuery, setSearchQuery] = useState('');
   const [notFoundMovies, setNotFoundMovies] = useState(false);

   function getSaveMovies() {
      SaveMovies()
      .then((data) => {
         setMovies(data);
         setMoviesList(data)
         setIsLoading(true);
      })
      .catch((err) => console.log(err))
      .finally(() => {
         setIsLoading(false);
      });
   }

   function handleSubmit() {

      const shortMovies = showShortMovies
      ? movies.filter((movie) => movie.duration <= 50)
      : movies;

      const searchTerm = searchQuery.toLowerCase();

      const filteredMovies = shortMovies.filter((movie) => {
         const nameEN = movie.nameEN.toLowerCase();
         const nameRU = movie.nameRU.toLowerCase();

         return nameEN.includes(searchTerm) || nameRU.includes(searchTerm);
      });


      setMoviesList(filteredMovies);

      setNotFoundMovies(filteredMovies.length === 0);
   }

   useEffect(() => {
      if (moviesList === null || moviesList.length === 0) {
         setMoviesList(null);
      }
   }, [moviesList]);


   useEffect(() => {
      getSaveMovies()
   },[])


   function ClickShowShortMovies() {
      setShowShortMovies(!showShortMovies)
   }
   return(
   <div className="movies">
      <SearchForm
      setShowShortMovies={ClickShowShortMovies}
      showShortMovies={showShortMovies}
      handleSubmit={handleSubmit}
      setSearchText={(text) => setSearchQuery(text)} // Обновлено
      searchText={searchQuery} // Обновлено
      />
      <section className="movies__container">
         {moviesList !== null
         ? (
         <MoviesCardList
         isLoading={isLoading}
         showShortMovies={showShortMovies}
         >
            {moviesList
            .map((movie, index) => (
            <li key={index} className="moviesCardList__item">
               <MoviesSaveCard
               movies={movies}
               movie={movie}
               setMovies={setMovies}
               moviesList={moviesList}
               setMoviesList={setMoviesList}
               name={movie.nameRU}
               time={movie.duration}
               image={movie.image}
               metrag={movie.metrag}
               link={movie.trailerLink}
               />
            </li>
            ))}
         </MoviesCardList>
         ) : (
         <SearchResults movies={movies} notFoundMovies={notFoundMovies}/>
         )}
      </section>
   </div>
   );
}

export default SavedMovies;

