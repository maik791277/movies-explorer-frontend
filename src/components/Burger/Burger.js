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
   <section className="Burger">
      <div className="burger-button__open">
         <button className={`burger-button__icon`} onClick={toggleMenu}>
            <span className={`burger-button__line`}></span>
            <span className={`burger-button__line`}></span>
            <span className={`burger-button__line`}></span>
         </button>
      </div>
      <div className={`burger-menu ${menuOpen && 'active'} ${menuClose && 'close'}`}>
         <div className="burger-menu__container">
            <button className="burger-button__icon-close" onClick={closeMenu}>
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="7.16016" y="9.28249" width="3" height="22" transform="rotate(-45 7.16016 9.28249)" fill="black"/>
                  <rect x="22.7168" y="7.16117" width="3" height="22" transform="rotate(45 22.7168 7.16117)" fill="black"/>
               </svg>
            </button>
            <div className="burger-menu__container-block">
               <div className="burger-menu__container-link">
                  <CustomNavLink className="burger-menu__link" classNameActive="burger-menu__link-active" to="/" onClick={closeMenu}>
                     Главная
                  </CustomNavLink>
                  <CustomNavLink className="burger-menu__link" classNameActive="burger-menu__link-active" to="/movies" onClick={closeMenu}>
                     Фильмы
                  </CustomNavLink>
                  <CustomNavLink className="burger-menu__link" classNameActive="burger-menu__link-active" to="/saved-movies" onClick={closeMenu}>
                     Сохранённые фильмы
                  </CustomNavLink>
               </div>
               <div className="burger-menu__container--account">
                  <CustomNavLink className="burger-menu__user-link" classNameActive="burger-menu__link-active" to="/profile" onClick={closeMenu}>
                     <p className="burger-menu__user-text">Аккаунт</p>
                     <img className="burger-menu__user-icon" src={userIcon}/>
                  </CustomNavLink>
               </div>
            </div>
         </div>
      </div>
   </section>
   );
}

export default Burger;