import SectionHeader from "../SectionHeader/SectionHeader";


function AboutProject() {

   return(
      <section className="aboutProject ">
         <div className="container">
            <SectionHeader title="О проекте" />
            <ul className="aboutProject__list">
               <li className="aboutProject__item">
                  <h3 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h3>
                  <p className="aboutProject__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
               </li>
               <li className="aboutProject__item">
                  <h3 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h3>
                  <p className="aboutProject__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
               </li>
            </ul>
            <div className="aboutProject__timeline">
               <div className="aboutProject__timeline-item">
                  <div className="aboutProject__timeline-duration">
                     <p>1 неделя</p>
                  </div>
                  <p className="aboutProject__timeline-title">Back-end</p>
               </div>
               <div className="aboutProject__timeline-item">
                  <div className="aboutProject__timeline-duration aboutProject__timeline-duration_frontend">
                     <p>4 недели</p>
                  </div>
                  <p className="aboutProject__timeline-title">Front-end</p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default AboutProject;