const BASE_URL = "https://api.v-porulitsun-bitfilms.nomoreparties.co";

function checkResponse(res) {
   if (res.ok) {
      return res.json();
   } else {
      switch (res.status) {
         case 400:
            return Promise.reject('Некорректный запрос');
         case 401:
            return Promise.reject('Неправильная почта или пароль');
         case 403:
            return Promise.reject('Доступ запрещен');
         case 404:
            return Promise.reject('Ресурс не найден');
         case 409:
            return Promise.reject('Пользователь с таким email уже существует');
         case 500:
            return Promise.reject('Внутренняя ошибка сервера');
         default:
            return Promise.reject(`Ошибка ${res.status}`);
      }
   }
}

export const login = (email, password) => {
   return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         "email": email,
         "password": password
      }),
      credentials: 'include',
   })
   .then(res => checkResponse(res));
};

export const register = (name, email, password) => {
   return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         "name" : name,
         "email": email,
         "password": password
      }),
      credentials: 'include',
   })
   .then(res => checkResponse(res));
};

export const signOut = () => {
   return fetch(`${BASE_URL}/signout`, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json",
      },
      credentials: 'include',
   })
   .then(res => checkResponse(res));
}

export const usersMe = () => {
   return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json",
         "Authorization" : `Bearer`
      },
      credentials: 'include',
   })
   .then(res => checkResponse(res));
}

export const updateUser  = (name, email) => {
   return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
         "Content-Type": "application/json",
         "Authorization" : `Bearer`
      },
      body: JSON.stringify({
         "email": email,
         "name": name
      }),
      credentials: 'include',
   })
   .then(res => checkResponse(res));
}

export const SaveMovies = () => {
   return fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json",
         "Authorization" : `Bearer`
      },
      credentials: 'include',
   })
   .then(res => checkResponse(res));
}

export const createMovie = ({country, director, duration, year, description, image, trailerLink, id, nameRU, nameEN, owner }) => {
   return fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         "country" : country,
         "director" : director,
         "duration" : duration,
         "year" : year,
         "description" : description,
         "image" : `https://api.nomoreparties.co/${image.url}`,
         "trailerLink" : trailerLink,
         "thumbnail" : `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
         "movieId" : id,
         "nameRU" : nameRU,
         "nameEN" : nameEN,
         "owner" : owner,
      }),
      credentials: 'include',
   })
   .then(res => checkResponse(res));
}

export const deleteMovie = (cardId) => {
   return fetch(`${BASE_URL}/movies/${cardId}`, {
      method: 'DELETE',
      headers: {
         "Content-Type": "application/json",
         "Authorization" : `Bearer`
      },
      credentials: 'include',
   })
   .then(res => checkResponse(res));
}




