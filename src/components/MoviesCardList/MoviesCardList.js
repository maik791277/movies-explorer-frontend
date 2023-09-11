import Preloader from "../Preloader/Preloader";
import {useLocation} from "react-router-dom";

function MoviesCardList(props) {
   const location = useLocation();
   const isSavedPage = location.pathname === '/saved-movies';

   return (
   <section className="moviesCardList">
      {props.isLoading ?
      (<Preloader />)
      :
      (<div>
         <ul className="moviesCardList__list">
            {props.children}
         </ul>
         {!isSavedPage && props.visibleCards < props.moviesArray.length && (
         <div className="moviesCardList__load-more">
            <button type="button" onClick={props.loadMoreCards} className="moviesCardList__button">
               Ещё
            </button>
         </div>
         )}
      </div>
      )}
   </section>
   );
}

export default MoviesCardList;
