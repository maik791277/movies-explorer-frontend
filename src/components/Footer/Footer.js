import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Footer() {

   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

   useEffect(() => {
      setCurrentYear(new Date().getFullYear());
   }, []);

   return(
   <footer className="footer">
      <div className="footer__container">
         <Link to={"/"} className="footer__project-name">Учебный проект Яндекс.Практикум х BeatFilm.</Link>
         <div className="footer__horizontal-line"></div>
         <div className="footer__info">
            <p className="footer__year">© {currentYear}</p>
            <ul className="footer__links">
               <li className="footer__link-item">
                  <a href="https://practicum.yandex.ru/web/" className="footer__link" target="_blank">Яндекс.Практикум</a>
               </li>
               <li className="footer__link-item">
                  <a href="https://github.com/maik791277" className="footer__link" target="_blank">Github</a>
               </li>
            </ul>
         </div>
      </div>
   </footer>
   );
}

export default Footer;