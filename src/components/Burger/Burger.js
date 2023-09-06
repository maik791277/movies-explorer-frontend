import CustomNavLink from "../CustomNavLink/CustomNavLink";
import userIcon from "../../images/icon__COLOR_icon-main.svg";
import {useEffect, useState} from "react";

function Burger(props) {
   const [menuOpen, setMenuOpen] = useState();
   const [menuClose, setMenuClose] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   const closeMenu = () => {
      setMenuOpen(!menuOpen);
      setMenuClose(true)
   };

   useEffect(() => {
      if (menuOpen) {
         document.body.classList.add('scroll-locked');
      } else {
         document.body.classList.remove('scroll-locked');
      }
   }, [menuOpen]);

   return(
   <div className="burger">
      <div className="burger__button-open">
         <button className={`burger__button-open-icon`} type="button" onClick={toggleMenu}>
            <span className={`burger__button-open-line`}></span>
            <span className={`burger__button-open-line`}></span>
            <span className={`burger__button-open-line`}></span>
         </button>
      </div>
      <div className={`burger__menu ${menuOpen ? 'burger__menu_active' : "burger__menu_close"}`}>
         <div className={`burger__menu-container ${menuOpen ? 'burger__menu-container_active' : ''} ${menuClose ? 'burger__menu-container_close' : ''}`}>
            <button className="burger__menu-button-close" type="button" onClick={closeMenu}>
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="7.16016" y="9.28249" width="3" height="22" transform="rotate(-45 7.16016 9.28249)" fill="black"/>
                  <rect x="22.7168" y="7.16117" width="3" height="22" transform="rotate(45 22.7168 7.16117)" fill="black"/>
               </svg>
            </button>
            <nav className="burger__menu-container-block">
               <ul className="burger__menu-container-link">
                  <li className="burger__menu-container-link-item">
                     <CustomNavLink className="burger__menu-link" classNameActive="burger__menu-link_active" to="/" onClick={closeMenu}>
                        Главная
                     </CustomNavLink>
                  </li>
                  <li className="burger__menu-container-link-item">
                     <CustomNavLink className="burger__menu-link" classNameActive="burger__menu-link_active"  to="/movies" onClick={closeMenu}>
                        Фильмы
                     </CustomNavLink>
                  </li>
                  <li className="burger__menu-container-link-item">
                     <CustomNavLink className="burger__menu-link" classNameActive="burger__menu-link_active"  to="/saved-movies" onClick={closeMenu}>
                        Сохранённые фильмы
                     </CustomNavLink>
                  </li>
               </ul>
               <div className="burger__menu-container-account">
                  <CustomNavLink className="burger__menu-user-link" classNameActive="burger__menu-user-link_active" to="/profile" onClick={closeMenu}>
                     <p className="burger__menu-user-text">Аккаунт</p>
                     <img className="burger__menu-user-icon" src={userIcon} alt="Иконка сылки на профиль"/>
                  </CustomNavLink>
               </div>
            </nav>
         </div>
      </div>
   </div>
   );
}

export default Burger;