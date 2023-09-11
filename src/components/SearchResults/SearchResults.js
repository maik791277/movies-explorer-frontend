import filmsIcon from "../../images/filmIcon.svg"
import Preloader from "../Preloader/Preloader";

function SearchResults (props) {
   return(
   <section className="searchResults">
      <div>
         <div className="searchResults__image">
            <img className="searchResults__svg" src={filmsIcon} alt="Описание изображения" />
         </div>
         <div className="search-results__text">
            {props.notFoundMovies
            ? <p className="search-results__title">Фильмы не найдены !</p>
            : <p className="search-results__title">Давайте найдём фильм !</p>}
         </div>
      </div>
   </section>
   );
}

export default SearchResults;
