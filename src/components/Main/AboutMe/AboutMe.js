import aboutMeImage from '../../../images/AFKmRfaf6X4-min.jpg'
import Portfolio from "../Portfolio/Portfolio";
import SectionHeader from "../SectionHeader/SectionHeader";

function AboutMe() {
   return(
      <section className="aboutMe">
         <div id="MainAbout" className="container">
            <SectionHeader title="Студент" />
            <div className="aboutMe__info">
               <div className="aboutMe__info-text">
                  <h3 className="aboutMe__name">Владислав</h3>
                  <p className="aboutMe__description">Фронтенд-разработчик, 22 года</p>
                  <p className="aboutMe__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                     и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                     С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                     начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                  <a className="aboutMe__github-link" href="https://github.com/" target="_blank">Github</a>
               </div>
               <div className="aboutMe__image">
                  <img className="aboutMe__photo" src={aboutMeImage} alt="Фотография Владислава Потылицына"/>
               </div>
            </div>
            <Portfolio />
         </div>
      </section>
   );
}

export default AboutMe;