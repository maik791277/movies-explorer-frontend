import {useNavigate} from "react-router-dom";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import RegAuthBlock from "../RegAuthBlock/RegAuthBlock";
import InputForm from "../InputForm/InputForm";


function Login(props) {
   const {values, handleChange, errors, isValid, resetForm, setValues, setIsValid} = useFormAndValidation({})
   const navigate = useNavigate();

   function handleSubmit(e) {
      e.preventDefault();
      props.isAuthorization(true)
      navigate('/');
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
            name="register_email"
            id="register_email-input"
            type="email"
            minLength="2"
            nameInputText="E-mail"
            maxLength="40"
            placeholder="E-mail"
            onChange={handleChange}
            error={errors}
            isValid={isValid}
            />
            <InputForm
            className="login__input"
            name="register_password"
            id="profile-name-input"
            type="password"
            minLength="2"
            nameInputText="Пароль"
            maxLength="40"
            placeholder="Пароль"
            onChange={handleChange}
            error={errors}
            isValid={isValid}
            />
         </RegAuthBlock>
      </div>
   </div>

   );
}

export default Login;