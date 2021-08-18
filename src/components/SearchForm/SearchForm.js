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
    <form className="container-sm w-50" onSubmit={submitHandler}>
      <input type="text" className="form-control"/>

      <div className="container">
        <div className="row">
          <div className="col">
            <label htmlFor="categories" className="text-white fs-5">Categories</label>
            <select className="form-select" id="categories">
              <option selected>All</option>
              <option value="art">Art</option>
              <option value="biography">Biography</option>
              <option value="computers">Computers</option>
              <option value="history">History</option>
              <option value="medical">Medical</option>
              <option value="Poetry">Poetry</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="filter" className="text-white fs-5">Sorting by</label>
            <select className="form-select mb-3" id="filter">
              <option selected>relevance</option>
              <option value="newest">newest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-light">Search</button>
      </div>


      
    </form>
  )
}
export default SearchForm;