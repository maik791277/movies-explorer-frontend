import {useEffect, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

function App() {
   const [isAuthorization, setIsAuthorization] = useState(false)
   const [isNotHeader, setIsNotHeader] = useState(false);
   const [isNotFooter, setIsNotFooter] = useState(false);
   const location = useLocation();

   const resetScroll = () => {
      window.scrollTo(0, 0);
   };

   useEffect(() => {
      const routeHeader = [
         '/',
         '/movies',
         '/saved-movies',
         '/profile',
      ].includes(location.pathname);

      const routeFooter = [
         '/',
         '/movies',
         '/saved-movies',
      ].includes(location.pathname);

      setIsNotHeader(!routeHeader);
      setIsNotFooter(!routeFooter)
   }, [location.pathname]);

   useEffect(() => {
      resetScroll();
   }, [location.pathname]);

   return (
      <div className="app__body">
         <div className="app__page">
            {!isNotHeader && <Header isAuthorization={isAuthorization} />}
            <div className="content">
               <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/saved-movies" element={<SavedMovies />} />
                  <Route path="/profile" element={<Profile isAuthorized={setIsAuthorization}/>} />
                  <Route path="/signup" element={<Register />} />
                  <Route path="/signin" element={<Login isAuthorization={setIsAuthorization}/>} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </div>
            {!isNotFooter && <Footer />}
         </div>
      </div>
  );
}

export default App;
