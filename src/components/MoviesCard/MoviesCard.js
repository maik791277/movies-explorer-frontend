import iconFavouritesTrue from "../../images/save9.svg"
import iconFavouritesrom from "../../images/save9d.svg"
import iconFavouritesromDelete from "../../images/daleteCards.svg"
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {createMovie, deleteMovie} from "../../utils/MainApi";

function MoviesCard(props) {
   const [favoriteMovies, setFavoriteMovies] = useState(false);
   const [isHovered, setIsHovered] = useState(false);
   const formattedTime = `${Math.floor(props.time / 60)}ч ${props.time % 60}м`;
   const location = useLocation();
   const isSavedPage = location.pathname === '/saved-movies';
   const [saveMoviesId, setSaveMoviesId] = useState("");

   function toggleFavoriteMovie() {
      if (favoriteMovies) {
         deleteMovie(saveMoviesId)
         .then(() => {
            setFavoriteMovies(false)
            props.setSaveMovies(props.saveMovies.filter(movie => movie._id !== saveMoviesId));
         })
         .catch((err) => console.log(err));
      } else {
            createMovie(props.movie)
            .then((data) => {
               setFavoriteMovies(true)
               props.setSaveMovies(prevMovies => [...prevMovies, data]);
            })
            .catch((err) => console.log(err))
      }
   }

   useEffect(() => {
      const movieObject = props.saveMovies && Array.isArray(props.saveMovies) && props.saveMovies.find((movie) => movie.movieId === props.movie.id);
      if (movieObject) {
         setSaveMoviesId(movieObject._id);
         setFavoriteMovies(true);
      } else {
         setFavoriteMovies(false);
      }
   }, [props.saveMovies, props.movie.id]);



   const handleMouseEnter = () => {
      setIsHovered(true);
   };

   const handleMouseLeave = () => {
      setIsHovered(false);
   };

   const handleRemoveClick = () => {
      const cardElement = document.querySelector('.moviesCard');
      cardElement.remove();
   };

   return(
   <div className="moviesCard" key={props.key}>
      <div className="moviesCard__content">
         <div className="moviesCard__info">
            <h2 className="moviesCard__title">{props.name}</h2>
            <p className="moviesCard__description">{formattedTime}</p>
         </div>
         {isSavedPage
         ?
         <button
            className="moviesCard__favourites"
            type="button"
            onClick={handleRemoveClick}>
            <img src={iconFavouritesromDelete} alt="Иконка кнопки для удаления филма"/>
         </button>
         : <button
         className="moviesCard__favourites"
         type="button"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         onClick={toggleFavoriteMovie}
         >
            <img
            src={
               isHovered
               ? iconFavouritesTrue
               : (favoriteMovies ? iconFavouritesTrue : iconFavouritesrom)
            }
            alt="Иконка кнопки для добавления фильма"
            />
         </button>}
      </div>
      <a href={props.link} target="_blank" className="moviesCard__image-container">
         <img className="moviesCard__image" src={props.image} alt={props.name}/>
      </a>
   </div>
   );
}

export default MoviesCard;
