// https://www.youtube.com/watch?v=BwWpG0cNFLU&ab_channel=CodingShiksha
// Class activity 19

import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Table = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=20&nat=us')
      .then(function (random) {
        setUsers(random.data.results);
      });
  }, []);
  //
  return (
    <div className="container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
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
