import logo from '../../images/logo.svg';
import userIcon from '../../images/icon__COLOR_icon-main.svg';
import {Link, useLocation} from "react-router-dom";
import CustomNavLink from "../CustomNavLink/CustomNavLink";
import Burger from "../Burger/Burger";
function Header(props) {
   const location = useLocation();
   const isOnHomePage = location.pathname === '/';

   const headerAuthorization = location.pathname === '/signup' || location.pathname === '/signin';
 return(
   <header className={`header ${isOnHomePage ? "header_color" : ""}`}>
      <div className="header__container">
         <Link className="header__logo-link" to="/">
            <img className="header__logo" src={logo} alt="Логотип сайта" />
         </Link>
         <nav className="header__container-content">
            {props.isAuthorization ?
            <div className="header__inner-div-type-2">
               <ul className="header__navigation">
                  <li className={"header__navigation-item"}>
                     <CustomNavLink
                        className={`header__navigation-link 
                        ${isOnHomePage ? "header__navigation-link-homePage" : ""}`}
                        classNameActive="header__navigation-link-active"
                        to="/movies">
                        Фильмы
                     </CustomNavLink>
                  </li>
                  <li className={"header__navigation-item"}>
                     <CustomNavLink
                        className={`header__navigation-link 
                        ${isOnHomePage ? "header__navigation-link-homePage" : ""}`}
                        classNameActive="header__navigation-link-active"
                        to="/saved-movies">
                        Сохранённые фильмы
                     </CustomNavLink>
                  </li>
               </ul>
               <div className="header__user">
                  <CustomNavLink className="header__user-link"  to="/profile">
                     <p className={`header__user-text ${isOnHomePage ? "header__user-text_white" : ""}`}>Аккаунт</p>
                     <div className={`header__user-link-container-icon ${isOnHomePage && "header__user-link-container-icon_color"}`}>
                        <img className="header__user-icon" src={userIcon} alt="Иконка сылки на профиль"/>
                     </div>
                  </CustomNavLink>
               </div>
               <Burger isAuthorization={props.isAuthorization}/>
            </div>
            :
            <div className="header__inner-div--type-1">
               <Link className={`header__registration-link ${headerAuthorization && "header__registration-link_color"}`} to="/signup">Регистрация</Link>
               <Link className="header__login-link" to="/signin">Войти</Link>
            </div>}
         </nav>
      </div>
   </header>
 );
}

export default Header;
