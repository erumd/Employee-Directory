// Bootstrap documentation https://getbootstrap.com/docs/4.0/components/navbar/#forms

import React from 'react';

function Search (props) {
    return (
        <div className="searchBar">
          {/* <form className="form-inline my-2 my-lg-0 mx-auto" > */}
          <form className="form-inline" >
            <input 
              className="form-control mr-sm-2" 
              type="search" 
              placeholder="Search for Employee" 
              onChange={props.handleChange}
              value={props.value}
              />
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
    )
  }

  export default Search; 