import iconOk from "../../images/ok.svg"

function ErrorPopup(props) {

   return(
   <section className={`errorPopup ${props.isVisible ? 'errorPopup__visible' : ''}`}>
      <div className="errorPopup__overlay">
         <div className="errorPopup__content">
            {props.showAllGoodIcon
            ? <img src={iconOk} alt="иконка всё хорошо"/>
            : <span className="errorPopup__icon">¯\_(ツ)_/¯</span>}
            <p className="errorPopup__text">{props.message}</p>
            <button className="errorPopup__closeButton" type="button" onClick={props.onClose}>Закрыть</button>
         </div>
      </div>
   </section>
   );
}

export default ErrorPopup;
