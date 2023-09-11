import InputForm from "../InputForm/InputForm";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import RegAuthBlock from "../RegAuthBlock/RegAuthBlock";
import { register } from "../../utils/MainApi";
import {useNavigate} from "react-router-dom";

function Register(props) {
   const {values, handleChange, validateInputsHandleSubmit, errors, isValid,} = useFormAndValidation({})

   function handleSubmit(e) {
      e.preventDefault();

      const emailErrors = validateInputsHandleSubmit('email', values.register_email);
      const passwordErrors = validateInputsHandleSubmit('password', values.register_password);
      const nameErrors = validateInputsHandleSubmit('text', values.register_name);

      const errors = { ...emailErrors, ...passwordErrors, ...nameErrors };

      if (Object.keys(errors).length === 0) {
         register(values.register_name, values.register_email, values.register_password)
         .then(() => {
            props.handleSubmitLogin(values.register_email, values.register_password)
         })
         .catch((err) => {
            props.setErrorMessage(err);
            props.setShowError(true);
         });
      } else {
         props.setErrorMessage("Произошла ошибка валидации");
         props.setShowError(true);
      }
   }

   return(
   <div className="register">
      <div className="register__container">
         <RegAuthBlock
         errors={errors}
         isValid={isValid}
         onSubmit={handleSubmit}
         title="Добро пожаловать!"
         buttonText="Зарегистрироваться"
         text="Уже зарегистрированы?"
         toLink="/signin"
         textLink="Войти">
            <InputForm
            className="register__input"
            name="register_name"
            id="register-name-input"
            type="text"
            minLength="2"
            nameInputText="Имя"
            maxLength="40"
            placeholder="Имя"
            onChange={handleChange}
            value={values.register_name || ''}
            error={errors}
            isValid={isValid}
            />
            <InputForm
            className="register__input"
            name="register_email"
            id="register-email-input"
            type="email"
            minLength="2"
            nameInputText="E-mail"
            maxLength="40"
            placeholder="E-mail"
            onChange={handleChange}
            value={values.register_email || ''}
            error={errors}
            isValid={isValid}
            />
            <InputForm
            className="register__input"
            name="register_password"
            id="register-password-input"
            type="password"
            minLength="8"
            nameInputText="Пароль"
            maxLength="40"
            placeholder="Пароль"
            onChange={handleChange}
            value={values.register_password || ''}
            error={errors}
            isValid={isValid}
            />
         </RegAuthBlock>
      </div>
   </div>

   );
}

export default Register;
