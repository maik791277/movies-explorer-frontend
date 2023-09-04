import { useNavigate} from "react-router-dom";

function NotFound() {
   const navigate = useNavigate();
   console.log(window.history.length)

   const handleButtonClick = () => {
      if (window.history.length > 2) {
         navigate(-1);
      } else {
         navigate('/');
      }
   };

   return(
   <section className="NotFound">
         <h2 className="NotFound__title">404</h2>
         <p className="NotFound__text">Страница не найдена</p>
         <button type="button" className="NotFound__button" onClick={handleButtonClick}>Назад</button>
   </section>
   );
}

export default NotFound;