import searchIcon from "../../images/icon.svg"
import searchButtonIcon from "../../images/find.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useState} from "react";

function SearchForm(props) {
   const [searchText, setSearchText] = useState("");

   const handleSearch = (e) => {
      e.preventDefault();

      console.log(searchText)
   };
   return(
      <section className="searchForm">
         <form className="searchForm__form">
            <div className="searchForm__form-search-field">
               <img className="searchForm__icon" src={searchIcon} alt="Иконка поиска"/>
               <input
               className="searchForm__input"
               type="text"
               placeholder="Фильм"
               value={searchText}
               onChange={(e) => setSearchText(e.target.value)}
               required
               />
               <button onClick={handleSearch} type="submit" className="searchForm__button">
                  <img className="searchForm__buttonIcon" src={searchButtonIcon} alt="Иконка кнопки поиска"/>
               </button>
            </div>
            <div className="searchForm__filter">
               <FilterCheckbox className="searchForm__filterCheckbox" isChecked={props.showShortMovies} toggleSwitch={props.setShowShortMovies}/>
               <p className="searchForm__filter-title">Короткометражки</p>
            </div>
         </form>
      </section>
   );
}

export default SearchForm;