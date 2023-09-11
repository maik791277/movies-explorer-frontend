import { useEffect, useState} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import {ProtectedRoute} from "../../hooks/ProtectedRoute";
import {useAuth} from "../../contexts/СurrentUser.js";
import {login, usersMe} from "../../utils/MainApi";
import ErrorPopup from "../ErrorPopup/ErrorPopup";

function App() {
   const { isAuthenticated, updateAuthStatus, updateUsers } = useAuth();
   const [isNotHeader, setIsNotHeader] = useState(false);
   const [isNotFooter, setIsNotFooter] = useState(false);
   const [showError, setShowError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   const location = useLocation();
   const navigate = useNavigate();
   const resetScroll = () => {
      window.scrollTo(0, 0);
   };

   function handleLoginFormSubmit ( email, password) {
      login(email, password)
      .then(() => {
         usersMe()
         .then((data) => {
            updateUsers(data)
         })
         .catch((err) => alert(err));
         updateAuthStatus(true)
         navigate('/movies');
      })
      .catch((err) => {
         setShowError(true)
         setErrorMessage(err)
      });
   }

   useEffect(() => {
      resetScroll();

      const routeHeader = [
         "/",
         "/movies",
         "/saved-movies",
         "/profile",
      ].includes(location.pathname);

      const routeFooter = ["/", "/movies", "/saved-movies"].includes(
      location.pathname
      );

      setIsNotHeader(!routeHeader);
      setIsNotFooter(!routeFooter);
   }, [location.pathname]);

   return (
      <div className="app">
         <div className="app__page">
            {!isNotHeader && <Header isAuthorization={isAuthenticated} />}
            <main className="app__content">
               <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/movies" element={<ProtectedRoute
                  element={Movies}
                  loggedIn={isAuthenticated}/>} />
                  <Route path="/saved-movies" element={<ProtectedRoute
                  element={SavedMovies}
                  loggedIn={isAuthenticated}/>} />
                  <Route path="/profile" element={<ProtectedRoute
                  element={Profile}
                  setErrorMessage={setErrorMessage}
                  setShowError={setShowError}
                  loggedIn={isAuthenticated}/>} />
                  <Route path="/signup" element={<ProtectedRoute
                  element={Register}
                  setErrorMessage={setErrorMessage}
                  setShowError={setShowError}
                  handleSubmitLogin={handleLoginFormSubmit}
                  loggedIn={!isAuthenticated}/>} />
                  <Route path="/signin" element={<ProtectedRoute
                  element={Login}
                  setErrorMessage={setErrorMessage}
                  setShowError={setShowError}
                  handleSubmitLogin={handleLoginFormSubmit}
                  loggedIn={!isAuthenticated}/>} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </main>
            {!isNotFooter && <Footer />}
         </div>
         <ErrorPopup
         isVisible={showError}
         message={errorMessage}
         onClose={() => setShowError(false)}
         />
      </div>
  );
}

export default App;
