import React, { useState } from 'react';
import { connect } from 'react-redux';

import { changeForm } from '../../redux/actions';

const SearchForm = ({
    // formState,
    // changeInput,
    // changeCategory,
    // changeSort,
    changeForm,
  }) => {

  const [formValues, setFormValues] = useState({
    input: '',
    category: 'all',
    sort: 'relevance',
  })


  const submitHandler = (e) => {
    e.preventDefault();
    changeForm(formValues);
    setFormValues({
      ...formValues,
      input: ''
    })
  }

  const changeHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form className="container-sm w-50" onSubmit={submitHandler}>
      <input
        type="text"
        className="form-control"
        name="input"
        value={formValues.input}
        onChange={changeHandler}
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <label htmlFor="categories" className="text-white fs-5">
              Categories
            </label>
            <select
              className="form-select"
              id="categories"
              name="category"
              onChange={changeHandler}
            >
              <option selected>Select a category</option>
              <option value='all' >All</option>
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
            <select
              className = "form-select mb-3"
              id="filter"
              name="sort"
              onChange={changeHandler}
            >
              <option selected>Select sorting</option>
              <option value="relevance">relevance</option>
              <option value="newest">newest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-light">
          Search
        </button>
      </div>
    </form>
  );
}


export default connect(null, { changeForm })(SearchForm);