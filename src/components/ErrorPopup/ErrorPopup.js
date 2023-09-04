
function ErrorPopup() {
   return(
   <section className="errorPopup">
      <div className="errorPopup__overlay">
         <div className="errorPopup__content">
            <span className="errorPopup__icon">¯\_(ツ)_/¯</span>
            <p className="errorPopup__text">При авторизации произошла ошибка. Токен не передан или передан не в том формате.</p>
            <button className="errorPopup__closeButton" type="button">Закрыть</button>
         </div>
      </div>
   </section>
   );
}

export default ErrorPopup;