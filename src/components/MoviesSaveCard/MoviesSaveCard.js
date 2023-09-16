import iconFavouritesromDelete from "../../images/daleteCards.svg"
import {deleteMovie} from "../../utils/MainApi";

function MoviesCard(props) {
   const formattedTime = `${Math.floor(props.time / 60)}ч ${props.time % 60}м`;

   function handleRemoveClick () {
      deleteMovie(props.movie._id)
      .then(() => {
         const updatedMovies = props.movies.filter(movie => movie._id !== props.movie._id);
         props.setMovies(updatedMovies);
         const updatedMoviesList = props.moviesList.filter(movie => movie._id !== props.movie._id);
         props.setMoviesList(updatedMoviesList);
         const updatedPastMovies = props.pastMovies.filter(movie => movie._id !== props.movie._id);
         props.setPastMovies(updatedPastMovies);
      })
      .catch((err) => console.log(err));
   }

   return(
   <div className="moviesCard" key={props.key}>
      <div className="moviesCard__content">
         <div className="moviesCard__info">
            <h2 className="moviesCard__title">{props.name}</h2>
            <p className="moviesCard__description">{formattedTime}</p>
         </div>
         <button
         className="moviesCard__favourites"
         type="button"
         onClick={handleRemoveClick}>
            <img src={iconFavouritesromDelete} alt="Иконка кнопки для удаления филма"/>
         </button>
      </div>
      <a href={props.link} target="_blank" className="moviesCard__image-container">
         <img className="moviesCard__image" src={props.image} alt={props.name}/>
      </a>
   </div>
   );
}

export default MoviesCard;
