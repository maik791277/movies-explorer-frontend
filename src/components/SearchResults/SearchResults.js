import filmsIcon from "../../images/filmIcon.svg"
import {useLocation} from "react-router-dom";

function SearchResults (props) {
   const location = useLocation();
   const isOnHomePage = location.pathname === '/saved-movies';
   return(
   <section className="searchResults">
      <div>
         <div className="searchResults__image">
            <img className="searchResults__svg" src={filmsIcon} alt="Описание изображения" />
         </div>
         <div className="search-results__text">
            {props.notFoundMovies
            ? <p className="search-results__title">Фильмы не найдены !</p>
            : <p className="search-results__title">{isOnHomePage ? "У вас нету сохраненных фильмов !" : "Давайте найдём фильм !"}</p>}
         </div>
      </div>
   </section>
   );
}

export default SearchResults;
