
function InputForm(props) {

   const hasError = props.error && props.error[props.name];

   return (
   <div className={`inputForm ${props.className}`}>
      <label className="inputForm__name">{props.nameInputText}</label>
      <input
      className={`inputForm__input ${props.classNameInput} ${hasError && !props.isValid ? "inputForm__input-error" : ""}`}
      type={props.type}
      name={props.name}
      id={props.id}
      minLength={props.minLength}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required
      />
   </div>
   );
}

export default InputForm;
