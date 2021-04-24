// Bootstrap documentation https://getbootstrap.com/docs/4.0/components/navbar/#forms
//tutor example tried to use props
// with out props add "const Search= ({handleChange, value}) => {"   GET rid of props
// activity 19 in class 

import React from 'react';

const Search = (props) => {
  return (
    <div className="searchBar">
      {/* <form className="form-inline my-2 my-lg-0 mx-auto" > */}
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search for Employee"
          name="search"
          onChange={props.handleChange}
          value={props.value}
        />
        <button onClick={props.handleFormSubmit} className="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
