

function AboutProject() {

   return(
      <section className="aboutProject ">
         <div className="container">
            <div className="section__header">
               <h2 className="section__title">О проекте</h2>
               <div className="section__horizontal-line"></div>
            </div>
            <ul className="aboutProject__list">
               <li className="aboutProject__item">
                  <p className="aboutProject__subtitle">Дипломный проект включал 5 этапов</p>
                  <p className="aboutProject__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
               </li>
               <li className="aboutProject__item">
                  <p className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</p>
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
                  <div className="aboutProject__timeline-duration aboutProject__timeline_duration__frontend">
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