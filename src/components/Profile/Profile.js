import { useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import {signOut, updateUser} from "../../utils/MainApi";
import {useAuth} from "../../contexts/СurrentUser.js";

function Profile(props) {
   const { user, updateAuthStatus, updateUsers } = useAuth();
   const [isEditing, setIsEditing] = useState(false)
   const [disabledButton, setDisabledButton] = useState(false)
   const {values, handleChange, validateInputsHandleSubmit, errors, isValid, setValues, setIsValid} = useFormAndValidation({})
   const navigate = useNavigate();
   function editingClick() {
      setIsEditing(!isEditing)
   }

   function handleSubmit(e) {
      e.preventDefault();
      setDisabledButton(true)

      const nameErrors = validateInputsHandleSubmit('text', values.profile__name);
      const emailErrors = validateInputsHandleSubmit('email', values.profile__email);

      const errors = { ...nameErrors, ...emailErrors };

      if (Object.keys(errors).length === 0) {
         if (
         values.profile__name !== user.name ||
         values.profile__email !== user.email
         ) {
            updateUser(values.profile__name, values.profile__email)
            .then((data) => {
               updateUsers(data)
               setIsEditing(!isEditing)
               setIsValid(false)
               props.setErrorMessage("Успешно отправлено и изменено.")
               props.setShowError(true)
               props.setShowAllGoodIcon(true)
               setDisabledButton(false)
            })
            .catch((err) => {
               props.setErrorMessage(err)
               props.setShowError(true)
               props.setShowAllGoodIcon(false)
            });
         } else {
            props.setErrorMessage("Нет изменений для сохранения")
            props.setShowError(true)
            props.setShowAllGoodIcon(false)
         }
      } else {
         props.setErrorMessage("Произошла ошибка валидации")
         props.setShowError(true)
         props.setShowAllGoodIcon(false)
      }
   }

   function handleSignOut() {
      setDisabledButton(true)
      signOut()
      .then(() => {
         localStorage.removeItem('movies');
         localStorage.removeItem('searchData');
         updateUsers(null)
         updateAuthStatus(false)
         setDisabledButton(false)
         navigate("/")
      })
      .catch((err) => alert(err))
   }

   useEffect(() => {
      setValues({
         profile__name: user.name,
         profile__email: user.email
      })
   }, [user.email, user.name, isEditing, setValues])

   useEffect(() => {
      if (
      values.profile__name === user.name &&
      values.profile__email === user.email
      ) {
         setIsValid(false);
      } else {
         setIsValid(true);
      }
   }, [values.profile__name, values.profile__email, user.name, user.email, setIsValid]);

   return(
   <section className="profile">
      <h1 className="profile__title">Привет, {user.name}!</h1>
      {isEditing ?
      <form className="profile__container" noValidate>
         <div className="profile__item">
            <label className="profile__item-label">Имя</label>
            <input
            className="profile__item-value"
            type="text"
            name="profile__name"
            id="profile__name-input"
            minLength="2"
            maxLength="20"
            placeholder="Имя"
            value={values.profile__name}
            onChange={handleChange}
            required
            autoFocus/>
         </div>
         <div className="profile__item">
            <label className="profile__item-label">E-mail</label>
            <input
            className="profile__item-value"
            type="email"
            name="profile__email"
            id="profile__email-input"
            minLength="2"
            maxLength="40"
            placeholder="Email"
            value={values.profile__email}
            onChange={handleChange}
            required/>
         </div>
         <div className="profile__button-container-form">
            <p className={`profile__input-error`}>
               {Object.values(errors).find(error => error) || ""}
            </p>
            <button className={`profile__button-form 
            ${!isValid ? 'profile__button-form_error' : ''}
            ${Object.values(errors).some(error => error) ? 'profile__button-form_error' : ''}`} type="submit"  disabled={disabledButton} onClick={handleSubmit}>Сохранить</button>
         </div>
      </form>
      :
      <div className="profile__container">
         <div className="profile__item">
            <p className="profile__item-label">Имя</p>
            <div className="profile__item-value">{user.name}</div>
         </div>
         <div className="profile__item">
            <p className="profile__item-label">E-mail</p>
            <div className="profile__item-value">{user.email}</div>
         </div>
      </div>}
      {!isEditing && <div className="profile__links">
         <div className="profile__button-container">
            <button type="button" className="profile__button" onClick={editingClick}>
               Редактировать
            </button>
            <button type="button" className="profile__button" onClick={handleSignOut}>
               Выйти из аккаунта
            </button>
         </div>
      </div>}
   </section>
   );
}

export default Profile;
