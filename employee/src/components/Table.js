// https://www.youtube.com/watch?v=BwWpG0cNFLU&ab_channel=CodingShiksha
// Class activity 19
// office hours help with search bar

import React from 'react';
import axios from 'axios';
import UpArrowImage from '../'
// import Search2 from './search2';
import { useState, useEffect } from 'react';

const Table = () => {
  const [users, setUsers] = useState([]);
  const [names, setNames] = useState([]);
  const [lookup, setLookup] = useState('');
  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=50&nat=us')
      .then(function (random) {
        setUsers(random.data.results);
        setNames(random.data.results);
      });
  }, []);
  //

  //   office hours

  const handleSearch = ({ target }) => {
    const { value } = target;
    setLookup(value);
    if (!lookup) setNames(users);
    else {
      const filterUsers = users.filter((items) => {
        return (
          items.name.first.includes(value) || //this tells which properties to look for names
          items.name.last.includes(value) ||
          items.email.includes(value)
        );
      });
      setNames(filterUsers); //need this to search through data
    }
  };

  const { handleDownArrowSort } = () => {};
  const { handleUpArrowSort } = () => {};

  return (
    // <>

    <div className="container mt-3">
      {/* <Search2 value={lookup} handleChange={handleSearch} /> */}
      <form className="form mt-5">
        <input
          className="form-control w-25 mx-auto"
          type="search"
          placeholder="Search for Employee"
          name="search"
          onChange={handleSearch}
          value={lookup}
        />
      </form>
      <br></br>
      <br></br>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col"> </th>
            <th scope="col">
              First
              <img
                src="../../downarrow.png"
                onClick={handleDownArrowSort}
                alt="DownArrow"
              />
              <img
                src="../../uparrow.png"
                onClick={handleUpArrowSort}
                alt="UpArrow"
              />
            </th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {names.map((item) => (
            <tr>
              <th scope="row">
                {' '}
                <img src={item.picture.medium} alt="" />{' '}
              </th>
              <td>{item.name.first}</td>
              <td>{item.name.last}</td>
              <td>{item.email}</td>
              <td>{item.cell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // </>
  );
};

export default Table;

// HARD WORK BELOW
// constructor(props) {
// {
/* {items.map((item) => (
                    // <h1> {item.name.first} </h1>
                    <img src={item.picture.medium} alt={item.name.first} />
                ))} */
// }
// super(props);
// this.state = {
//   state = {
// users: [],
//   loading: false,
//   };
//   }

//   componentDidMouth() {
//     axios
//       .get('https://randomuser.me/api/?results=20&nat=us')
//       // fetch('')
//       // .then((response) => response.json())
//       .then((response) => {
//         const users = response.data.results;
//         this.setState({
//           //   users: users.data.results,
//           users,
//           // items: response.results,
//           // loading: true,
//         });
//         console.log('This is the response', users);
//       });
//   }

// USE HOOKS

//   render() {
// var { items, loading } = this.state;

// if (loading) {
//   return (
// <div> Loading...</div>
// <div className= "container">
//         {items.map(item => (

//             // <h1> {item.name.first} </h1>
//             <img src= {item.picture.medium} alt= {item.name.first} />
//         ))}

//     </div>
//   );
// } else {
