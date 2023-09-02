import aboutMeImage from '../../../images/AFKmRfaf6X4-min.jpg'
import Portfolio from "../Portfolio/Portfolio";
import {Element} from "react-scroll";

function AboutMe() {
   return(
      <section className="aboutMe">
         <Element name="about" className="container">
            <div className="section__header">
               <h2 className="section__title">Студент</h2>
               <div className="section__horizontal-line"></div>
            </div>
            <div className="aboutMe__info">
               <div className="aboutMe__info-text">
                  <h3 className="aboutMe__name">Владислав</h3>
                  <p className="aboutMe__description">Фронтенд-разработчик, 22 года</p>
                  <p className="aboutMe__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                     и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                     С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                     начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                  <a className="aboutMe__github-link" href="https://github.com/">Github</a>
               </div>
               <div className="aboutMe__image">
                  <img className="aboutMe__photo" src={aboutMeImage} alt="Фотография Владислава Потылицына"/>
               </div>
            </div>
            <Portfolio />
         </Element>
      </section>
   );
}

export default AboutMe;