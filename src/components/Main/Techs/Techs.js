import SectionHeader from "../SectionHeader/SectionHeader";

const technologies = [
   'HTML',
   'CSS',
   'JS',
   'React',
   'Git',
   'Express.js',
   'mongoDB'
];

function Techs() {
   return(
      <section className="techs">
         <div className="container">
            <SectionHeader title="Технологии" />
            <div className="techs__info">
               <h2 className="techs__title">7 технологий</h2>
               <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <div className="techs__list">
               <ul className="techs__items">
                  {technologies.map((item, index) => {
                     return(
                     <li key={index} className="techs__item">
                        <p className="techs__item-text">{item}</p>
                     </li>
                     );
                  })}
               </ul>
            </div>
         </div>
      </section>
   );
}

export default Techs;