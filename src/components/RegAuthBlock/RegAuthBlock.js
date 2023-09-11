import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";

function RegAuthBlock(props) {

   return(
   <section className="regAuthBlock">
      <Link className="regAuthBlock__link-main" to={"/"}>
         <img className="regAuthBlock__link-img" src={logo} alt="Логотип сайта"/>
      </Link>
      <h1 className="regAuthBlock__heading">{props.title}</h1>
      <form className="regAuthBlock__form" onSubmit={props.onSubmit} noValidate>
         <div className="regAuthBlock__form-container">
            {props.children}
            <p className={`regAuthBlock__input-error`}>
               {Object.values(props.errors).find(error => error) || ""}
            </p>
         </div>
         <button className={`regAuthBlock__button ${props.isValid ? 'regAuthBlock__button_type_error' : ''}`} type="submit">{props.buttonText}</button>
      </form>
      <div className="regAuthBlock__login">
         <p className="regAuthBlock__paragraph">
            {props.text}
            <Link to={props.toLink} className="regAuthBlock__link">{props.textLink}</Link>
         </p>
      </div>
   </section>
   );
}

export default RegAuthBlock;
