import svgArrow from "../../../images/text__COLOR_font-main.svg"

const myArray = [
   {
      link: 'https://github.com/maik791277/russian-travel',
      text: 'Статичный сайт'
   },
   {
      link: 'https://github.com/maik791277/mesto',
      text: 'Адаптивный сайт'
   },
   {
      link: 'https://github.com/maik791277/react-mesto-api-full-gha',
      text: 'Одностраничное приложение'
   },
];

function Portfolio() {
   return(
      <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
               {myArray.map((item, index) => {
                  return(
                  <li key={index} className="portfolio__item">
                     <a className="portfolio__link" href={item.link} target="_blank">
                        <p className="portfolio__description">{item.text}</p>
                        <img className="portfolio__arrow" src={svgArrow} alt="Стрелка"/>
                     </a>
                  </li>
                  );
               })}
            </ul>
      </div>
   );
}

export default Portfolio;