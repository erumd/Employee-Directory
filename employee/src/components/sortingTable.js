import React from 'react';
import { useSortBy } from 'react-table';
import axios from 'axios';
import { useState, useEffect } from 'react';

const SortTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(
    () => {
      axios
        .get('https://randomuser.me/api/?results=20&nat=us')
        .then(function (random) {
          setUsers(random.data.results);
        });
    },
    [],
    useSortBy
  );

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

              <td>
                {item.name.first(users.getSortByToogleProps())}
                <span>
                  {users.isSorted ? (users.isSortedDesc ? '⬇️' : '⬆️') : ''}{' '}
                </span>
              </td>
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

export default SortTable;
