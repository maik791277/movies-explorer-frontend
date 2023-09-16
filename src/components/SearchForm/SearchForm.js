import searchIcon from "../../images/icon.svg"
import searchButtonIcon from "../../images/find.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {

   const handleSearch = (e) => {
      e.preventDefault();
      props.handleSubmit()
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
               value={props.searchText}
               onChange={(e) => props.setSearchText(e.target.value)}
               required
               />
               <button onClick={handleSearch} disabled={props.disabledButton} type="submit" className="searchForm__button">
                  <img className="searchForm__buttonIcon" src={searchButtonIcon} alt="Иконка кнопки поиска"/>
               </button>
               {props.formSubmitted && <label className="searchForm__label"> <p>Это поле не должно быть пустым</p> </label>}
            </div>
            <div className="searchForm__filter">
               <FilterCheckbox className="searchForm__filterCheckbox" isChecked={props.showShortMovies} toggleSwitch={props.setShowShortMovies}/>
            </div>
         </form>
      </section>
   );
}

export default SearchForm;
