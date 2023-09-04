import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useState} from "react";

const SavemoviesArray = [
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-66.userapi.com/c9763/u14937646/116030038/z_e2d3fc87.jpg',
      time: 97
   },
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-45.userapi.com/impg/md6_3IXZdPccX11S9vx_-Rt90MNyXC0AzXrE0w/1yVK1Q12ZyE.jpg?size=2000x869&quality=96&sign=21e3eaf1237b4f77b8690458d869d2ec&type=album',
      time: 97
   },
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-36.userapi.com/c9763/u14937646/116030038/y_9c2633ed.jpg',
      time: 97,
      metrag: true
   },
];

function SavedMovies () {
   const [showShortMovies, setShowShortMovies] = useState(false);

   function ClickShowShortMovies() {
      setShowShortMovies(!showShortMovies)
   }
   return(
   <section className="movies">
      <SearchForm  setShowShortMovies={ClickShowShortMovies} showShortMovies={showShortMovies}/>
      <section className="movies__container">
         <MoviesCardList  moviesArray={SavemoviesArray} showShortMovies={showShortMovies}/>
      </section>
   </section>
   );
}

export default SavedMovies;