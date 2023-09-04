import promoPlanetIcon from "../../../images/text__COLOR_landing-logo.svg"
import { Link } from 'react-scroll';

function Promo() {

   return(
      <section className="promo">
         <div className="container">
            <div className="promo__container">
               <img className="promo__planet-icon" src={promoPlanetIcon} alt="Иконка планеты"/>
               <h1 className="promo__title">
                  Учебный проект студента
                  факультета <span className="promo__title-major">Веб-разработки.</span>
               </h1>
               <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
               <Link to="about" smooth={true} duration={500} className="promo__button">Узнать больше</Link>
            </div>
         </div>
      </section>
   );
}

export default Promo;