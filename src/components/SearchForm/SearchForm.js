import React from 'react';

const SearchForm = () => {

  const submitHandler = (e) => {
    e.preventDefault();

    console.log('submit');
  }

  const selectHandler = (e) => {
    console.log(e.target.value);
  }
  
  return (
    <form className="search-form" onSubmit={submitHandler}>
      <div className="search-form__inner">
        <input type="text" className="search-form__input"/>
        <button type="submit" className="search-form__btn" />
      </div>
      <div className="search-form__categories-wrapper">
        <label htmlFor="categories" className="search-form__categories-label">Categories</label>
        <select name="categories" id="categories" className="search-form__categories" onChange={selectHandler}>
          <option value="all" className="search-form__category" selected>all</option>
          <option value="art" className="search-form__category">art</option>
          <option value="biogrphy" className="search-form__category">biogrphy</option>
          <option value="computers" className="search-form__category">computers</option>
          <option value="history" className="search-form__category">history</option>
          <option value="medical" className="search-form__category">medical</option>
          <option value="poetry" className="search-form__category">poetry</option>
        </select>
      </div>
      <div className="search-form__filter-wrapper">
        <label htmlFor="filter" className="search-form__filter-label">Sorting by</label>
        <select name="filter" id="filter" className="search-form__filter" defaultValue="relevanse">
          <option value="relevanse" className="search-form__filter-option" selected>relevance</option>
          <option value="newest" className="search-form__filter-option">newest</option>
        </select>
      </div>

    </form>
  )
}
export default SearchForm;