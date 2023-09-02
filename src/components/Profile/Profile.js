import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";

function Profile(props) {
   const [isEditing, setIsEditing] = useState(false)
   const [isProfileMasive, setIsProfileMasive] = useState({
      name: "Виталий",
      email: "pochta@yandex.ru"
   })
   const {values, handleChange, errors, isValid, resetForm, setValues, setIsValid} = useFormAndValidation({})
   const navigate = useNavigate();

   useEffect(() => {
      setValues({
         profile__name: isProfileMasive.name,
         profile__email: isProfileMasive.email
      })
   }, [isEditing])

   function editingClick() {
      setIsEditing(!isEditing)
   }

   function handleSubmit(e) {
      e.preventDefault();
      setIsProfileMasive({
         name: values.profile__name,
         email: values.profile__email
      })
      setIsEditing(!isEditing)
      setIsValid(false)
   }
   
   function isAuthorizedExit() {
      props.isAuthorized(false)
      navigate("/")
   }

   return(
   <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      {isEditing ?
      <form className="profile__container" noValidate>
         <div className="profile__item">
            <div className="profile__item-label">Имя</div>
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
            <div className="profile__separator"></div>
         </div>
         <div className="profile__item">
            <div className="profile__item-label">E-mail</div>
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
      </form>
      :
      <div className="profile__container">
         <div className="profile__item">
            <div className="profile__item-label">Имя</div>
            <div className="profile__item-value">{isProfileMasive.name}</div>
            <div className="profile__separator"></div>
         </div>
         <div className="profile__item">
            <div className="profile__item-label">E-mail</div>
            <div className="profile__item-value">{isProfileMasive.email}</div>
         </div>
      </div>}
      <div className="profile__links">
         {isEditing ?
         <div className="profile__button-container-form">
            <p className={`profile__input-error`}>
               {Object.values(errors).some(error => error) ? "При обновлении профиля произошла ошибка." : ""}
            </p>
            <button className={`profile__button-form ${!isValid ? 'profile__button-form_error' : ''}`} onClick={handleSubmit}>Сохранить</button>
         </div>
         :
         <div className="profile__button-container">
            <button className="profile__button" onClick={editingClick}>
               Редактировать
            </button>
            <button className="profile__button" onClick={isAuthorizedExit}>
               Выйти из аккаунта
            </button>
         </div>}
      </div>
   </section>
   );
}

export default Profile;