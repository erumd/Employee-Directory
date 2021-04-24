// Bootstrap documentation https://getbootstrap.com/docs/4.0/components/navbar/#forms
//tutor example tried to use props
// with out props add "const Search= ({handleChange, value}) => {"   GET rid of props
// activity 19 in class

import { useState } from 'react';
// import {users} from './Table';

const limitedUsers = [];

const Search = () => {
  const [users, setUsers] = useState(limitedUsers);
  const [search, setSearch] = useState('');

  const handleSearch = ({ target }) => {
    const { value } = target;
    setSearch(value);
    if (!search) setUsers(limitedUsers);
    else {
      const filteredUsers = limitedUsers.filter((item) => {
        return item.name.includes(value) || item.type.includes(value);
      });
      setUsers(filteredUsers);
    }
  };
  return (
    <div className="searchBar">
      {/* <form className="form-inline my-2 my-lg-0 mx-auto" > */}
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search for Employee"
          name="search"
          onChange={handleSearch}
          //   value={value}
        />
        <button
          //   onClick={handleFormSubmit}
          className="btn btn-secondary my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
