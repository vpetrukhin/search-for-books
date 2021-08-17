import React from 'react';

const SearchForm = () => {

  const submitHandler = (e) => {
    e.preventDefault();

    console.log('submit');
  }
  
  return (
    <form className="search-form" onSubmit={submitHandler}>
      <input type="text" className="search-form__input"/>
      <div className="search-form__categories-wrapper">
        <label htmlFor="categories" className="search-form__categories-label">Categories</label>
        <select name="categories" id="categories" className="search-form__categories">
          <option value="all" className="search-form__category">all</option>
          <option value="art" className="search-form__category">art</option>
          <option value="biogrphy" className="search-form__category">biogrphy</option>
          <option value="computers" className="search-form__category">computers</option>
          <option value="history" className="search-form__category">history</option>
          <option value="medical" className="search-form__category">medical</option>
          <option value="poetry" className="search-form__category">poetry</option>
        </select>
      </div>
      <div className="search-form__filter-wrapper">
        <label htmlFor="#" className="search-form__filter-label">Sorting by</label>
        <select name="filter" id="filter" className="search-form__filter">
          <option value="relevanse" className="search-form__filter-option">relevance</option>
          <option value="newest" className="search-form__filter-option">newest</option>
        </select>
      </div>

    </form>
  )
}
export default SearchForm;