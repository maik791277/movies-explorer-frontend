import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useEffect, useState} from "react";
const moviesArray = [
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
      link: 'https://sun9-70.userapi.com/c9763/u14937646/116030038/z_c9844dc8.jpg',
      time: 97,
      metrag: true
   },
   {
      Name: '33 слова о дизайне ',
      link: 'https://sun9-39.userapi.com/c9763/u14937646/116030038/z_51fdd45c.jpg',
      time: 97
   },
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-68.userapi.com/c9763/u14937646/116030038/z_405b2ee5.jpg',
      time: 97,
      metrag: true
   },
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-68.userapi.com/c9763/u14937646/116030038/y_2d4a6dfb.jpg',
      time: 97
   },
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-72.userapi.com/c9763/u14937646/116030038/z_2bba0eaa.jpg',
      time: 97
   },
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-78.userapi.com/c9763/u14937646/116030038/z_45625e0d.jpg',
      time: 97
   },
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-74.userapi.com/c9763/u14937646/116030038/z_55e1ad7d.jpg',
      time: 97,
      metrag: true
   },
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-69.userapi.com/c9763/u14937646/116030038/z_7377dfe2.jpg',
      time: 97
   },
   {
      Name: '33 словаasdasdasd asdasd dasdasdas о дизайне',
      link: 'https://sun9-73.userapi.com/c9763/u14937646/116030038/z_f295b343.jpg',
      time: 97,
      metrag: true
   },
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-36.userapi.com/c9763/u14937646/116030038/y_9c2633ed.jpg',
      time: 97,
      metrag: true
   },
   {
      Name: '33 слова aasdasd asdasdasdsad asdasdadо дизайне',
      link: 'https://sun9-36.userapi.com/c9763/u14937646/116030038/y_9c2633ed.jpg',
      time: 97,
      metrag: true
   },
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-36.userapi.com/c9763/u14937646/116030038/y_9c2633ed.jpg',
      time: 97,
      metrag: true
   },
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-36.userapi.com/c9763/u14937646/116030038/y_9c2633ed.jpg',
      time: 97,
      metrag: true
   },
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-36.userapi.com/c9763/u14937646/116030038/y_9c2633ed.jpg',
      time: 97,
      metrag: true
   },
   {
      Name: '33 слова о дизайне',
      link: 'https://sun9-36.userapi.com/c9763/u14937646/116030038/y_9c2633ed.jpg',
      time: 97,
      metrag: true
   },
];

function Movies () {
   const [showShortMovies, setShowShortMovies] = useState(false);

   function ClickShowShortMovies() {
      setShowShortMovies(!showShortMovies)
   }
   return(
   <section className="movies">
      <SearchForm  setShowShortMovies={ClickShowShortMovies} showShortMovies={showShortMovies}/>
      <section className="movies__container">
         <MoviesCardList  moviesArray={moviesArray} showShortMovies={showShortMovies}/>
      </section>
   </section>
   );
 }

 export default Movies;