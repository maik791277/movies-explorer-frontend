import InputForm from "../InputForm/InputForm";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import RegAuthBlock from "../RegAuthBlock/RegAuthBlock";

function Register() {

   const {values, handleChange, errors, isValid, resetForm, setValues, setIsValid} = useFormAndValidation({})

   return(
   <div className="register">
      <div className="register__container">
         <RegAuthBlock
         errors={errors}
         isValid={isValid}
         title="Добро пожаловать!"
         buttonText="Зарегистрироваться"
         text="Уже зарегистрированы?"
         toLink="/signin"
         textLink="Войти">
            <InputForm
            className="register__input"
            name="register_name"
            type="text"
            id="register-name-input"
            minLength="2"
            nameInputText="Имя"
            maxLength="40"
            placeholder="Имя"
            onChange={handleChange}
            error={errors}
            isValid={isValid}
            />
            <InputForm
            className="register__input"
            name="register_email"
            id="register_email-input"
            type="email"
            minLength="2"
            nameInputText="E-mail"
            maxLength="40"
            placeholder="Имя фамилия"
            onChange={handleChange}
            error={errors}
            isValid={isValid}
            />
            <InputForm
            className="register__input"
            name="register_password"
            id="profile-name-input"
            type="password"
            minLength="2"
            nameInputText="Пароль"
            maxLength="40"
            placeholder="Имя фамилия"
            onChange={handleChange}
            error={errors}
            isValid={isValid}
            />
         </RegAuthBlock>
      </div>
   </div>

   );
}

export default Register;