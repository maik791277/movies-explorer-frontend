import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import RegAuthBlock from "../RegAuthBlock/RegAuthBlock";
import InputForm from "../InputForm/InputForm";

function Login(props) {
   const {values, handleChange, validateInputsHandleSubmit, errors, isValid} = useFormAndValidation({})


   function handleSubmit(e) {
      e.preventDefault();

      const emailErrors = validateInputsHandleSubmit('email', values.login_email);
      const passwordErrors = validateInputsHandleSubmit('password', values.login_password);

      const errors = { ...emailErrors, ...passwordErrors };

      if (Object.keys(errors).length === 0) {
         props.handleSubmitLogin(values.login_email, values.login_password);
      } else {
         props.setErrorMessage("Произошла ошибка валидации");
         props.setShowError(true);
      }
   }


   return(
   <div className="login">
      <div className="login__container">
         <RegAuthBlock
         errors={errors}
         isValid={isValid}
         onSubmit={handleSubmit}
         title="Рады видеть!"
         buttonText="Войти"
         text="Ещё не зарегистрированы?"
         toLink="/signup"
         textLink="Регистрация">
            <InputForm
            className="login__input"
            name="login_email"
            id="login_email-input"
            type="email"
            minLength="2"
            nameInputText="E-mail"
            maxLength="40"
            placeholder="E-mail"
            onChange={handleChange}
            onFocus={handleChange}
            value={values.login_email || ''}
            error={errors}
            isValid={isValid}
            />
            <InputForm
            className="login__input"
            name="login_password"
            id="login-password-input"
            type="password"
            minLength="2"
            nameInputText="Пароль"
            maxLength="40"
            placeholder="Пароль"
            onChange={handleChange}
            onFocus={handleChange}
            value={values.login_password || ''}
            error={errors}
            isValid={isValid}
            />
         </RegAuthBlock>
      </div>
   </div>

   );
}

export default Login;
