
function FilterCheckbox(props) {
   const handleChange = (e) => {
      e.stopPropagation();
      props.toggleSwitch();
   };

   return (
   <label className="filterCheckbox" htmlFor="checkboxId">
      <input type="checkbox" id="checkboxId" checked={props.isChecked} onChange={handleChange} />
      <span className="filterCheckbox__slider"></span>
      <span className="filterCheckbox__slider-title">
         Короткометражки
      </span>
   </label>
   );
}

export default FilterCheckbox;
