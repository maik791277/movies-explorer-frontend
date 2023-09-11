import { useState, useCallback, useEffect } from 'react';

export function useFormAndValidation(e) {
   const [values, setValues] = useState({});
   const [errors, setErrors] = useState({});
   const [isValid, setIsValid] = useState(false);

   const handleChange = (e) => {
      const { name, value, type } = e.target;

      setValues({ ...values, [name]: value });

      if (type === 'email') {
         const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
         setErrors((prevErrors) => ({ ...prevErrors, [name]: isValidEmail ? '' : 'Введите корректный email' }));
      } else if (type === 'password') {
         const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value);
         setErrors((prevErrors) => ({ ...prevErrors, [name]: isValidPassword ? '' : 'Пароль должен содержать минимум 8 символов' }));
      } else {
         setErrors({ ...errors, [name]: e.target.validationMessage });
      }

      const form = e.target.closest('form');
      const formInputs = form.querySelectorAll('input');
      const isFormValid = Array.from(formInputs).every((input) => input.checkValidity());
      setIsValid(isFormValid);
   };

   function validateInputsHandleSubmit(type, value) {
      const errors = {};

      switch (type) {
         case 'text':
            if (!value || value.trim() === '') {
               errors[type] = 'Это поле обязательно для заполнения';
            } else if (value.trim().length < 2 || value.trim().length > 30) {
               errors[type] = 'Имя должно быть не короче 2 символов и не длиннее 30 символов';
            }
            break;
         case 'email':
            const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            if (!isValidEmail) {
               errors[type] = 'Введите корректный email';
            }
            break;
         case 'password':
            const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value);
            if (!isValidPassword) {
               errors[type] = 'Пароль: 8+ символов, заглавная и строчная буквы, цифры.';
            }
            break;
         default:
            break;
      }

      return errors;
   }

   useEffect(() => {
      const hasErrors = Object.values(errors).some((error) => error !== '');
      if (isValid && !hasErrors) {
         setIsValid(true);
      } else {
         setIsValid(false);
      }
   }, [errors, isValid]);

   const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
   }, [setValues, setErrors, setIsValid]);

   return { values, handleChange, validateInputsHandleSubmit, errors, isValid, resetForm, setValues, setIsValid };
}





