import { NavLink, useLocation } from 'react-router-dom';

const CustomNavLink = ({ to, className, classNameActive, children, onClick }) => {
   const location = useLocation();
   const isActive = location.pathname === to;

   return (
   <NavLink
   to={to}
   className={`${className} ${isActive ? classNameActive : ''}`}
   onClick={onClick}>
      {children}
   </NavLink>
   );
};

export default CustomNavLink
