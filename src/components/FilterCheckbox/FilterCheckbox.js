import {useState} from "react";

function FilterCheckbox(props) {

   return (
   <label className="filterCheckbox">
      <input type="checkbox" checked={props.isChecked} onChange={props.toggleSwitch} />
      <span className="filterCheckbox__slider"></span>
   </label>
   );
}

export default FilterCheckbox;