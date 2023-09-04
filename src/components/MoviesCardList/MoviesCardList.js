import MoviesCard from "../MoviesCard/MoviesCard";
import {useEffect, useState} from "react";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
   const [isLoading, setIsLoading] = useState(true);
   const [visibleCards, setVisibleCards] = useState(12);

   const loadMoreCards = () => {
      setVisibleCards(visibleCards + 4);
   };

   const updateVisibleCards = () => {
      if (window.innerWidth >= 770) {
         setVisibleCards(12);
      } else if (window.innerWidth >= 480) {
         setVisibleCards(8);
      } else if (window.innerWidth <= 480) {
         setVisibleCards(5);
      }
   };

   useEffect(() => {
      window.addEventListener('resize', updateVisibleCards);

      updateVisibleCards();

      return () => {
         window.removeEventListener('resize', updateVisibleCards);
      };
   }, []);

   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false);
      }, 1000);
   }, []);

   return (
   <div className="moviesCardList">
      {isLoading ? (
      <Preloader />
      ) : (
      <div>
         <ul className="moviesCardList__list">
            {props.moviesArray
            .filter((movie) => !props.showShortMovies || movie.metrag)
            .slice(0, visibleCards)
            .map((movie, index) => {
               return (
               <li key={index} className="moviesCardList__item">
                  <MoviesCard
                  name={movie.Name}
                  time={movie.time}
                  image={movie.link}
                  metrag={movie.metrag}
                  />
               </li>
               );
            })}
         </ul>
         {visibleCards < props.moviesArray.length && (
         <div className="moviesCardList__load-more">
            <button type="button" onClick={loadMoreCards} className="moviesCardList__button">
               Ещё
            </button>
         </div>
         )}
      </div>
      )}
   </div>
   );
}

export default MoviesCardList;