import React, { createContext, useContext, useState, useEffect } from 'react';
import {usersMe} from "../utils/MainApi";

const CurrentUser = createContext({
   isAuthenticated: false,
   user: null,
   loading: true,
   updateAuthStatus: () => {},
   updateUsers: () => {}
});

export const AuthUserProvider = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const checkAuthentication = async () => {
      try {
         const user = await usersMe();
         setUser(user);
         setIsAuthenticated(true);
      } catch (err) {
         setIsAuthenticated(false);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      checkAuthentication();
   }, []);

   const updateAuthStatus = (newStatus) => {
      setIsAuthenticated(newStatus);
   };

   const updateUsers = (newUserData) => {
      setUser(newUserData);
   };

   return (
   <CurrentUser.Provider value={{ isAuthenticated, user, loading, updateAuthStatus, updateUsers }}>
      {!loading && children}
   </CurrentUser.Provider>
   );
};

export const useAuth = () => {
   return useContext(CurrentUser);
};
