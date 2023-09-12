import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useEffect, useState} from "react";
import {SaveMovies} from "../../utils/MainApi";
import SearchResults from "../SearchResults/SearchResults";
import MoviesSaveCard from "../MoviesSaveCard/MoviesSaveCard";

function SavedMovies () {
   const [showShortMovies, setShowShortMovies] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [movies, setMovies] = useState([]);
   const [moviesList, setMoviesList] = useState(null);
   const [pastMovies, setPastMovies] = useState([])
   const [searchQuery, setSearchQuery] = useState('');
   const [notFoundMovies, setNotFoundMovies] = useState(false);

   function getSaveMovies() {
      SaveMovies()
      .then((data) => {
         if (Array.isArray(data) && data.length > 0) {
            setMovies(data);
            setMoviesList(data);
            setPastMovies(data)
            setIsLoading(true);
         } else {
            setMovies([]);
            setMoviesList(null);
            setIsLoading(false);
            setNotFoundMovies(false);
         }
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

      setPastMovies(filteredMovies)
      setMoviesList(filteredMovies);

      setNotFoundMovies(filteredMovies.length === 0);
   }

   function ClickShowShortMovies() {
         setShowShortMovies(!showShortMovies);
         const shortMovies = !showShortMovies
         ? pastMovies.filter((movie) => movie.duration <= 50)
         : pastMovies;
      setMoviesList(shortMovies);
   }

   useEffect(() => {
      getSaveMovies()
   },[])

   useEffect(() => {
      if (moviesList === null || moviesList.length === 0) {
         setMoviesList(null);
      }
   }, [moviesList]);

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
               pastMovies={pastMovies}
               setPastMovies={setPastMovies}
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

