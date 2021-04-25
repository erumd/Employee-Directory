// // Bootstrap documentation https://getbootstrap.com/docs/4.0/components/navbar/#forms
// //tutor example tried to use props
// // with out props add "const Search= ({handleChange, value}) => {"   GET rid of props
// // activity 19 in class

// import { useState } from 'react';
// // import items from '../components/Table';

// const limitedUsers = [];

// const Search = () => {
//   // const [users, setUsers] = useState(limitedUsers);
//   const [search, setSearch] = useState('');

//   const handleSearch = ({ target }) => {
//     const { value } = target;
//     setSearch(value);
//     if (!search) setUsers(limitedUsers);
//     else {
//       const filteredUsers = limitedUsers.filter((item) => {
//         return item.name.includes(value) || item.type.includes(value);
//       });
//       setUsers(filteredUsers);
//     }
//   };
//   return (
//     <div className="searchBar row mt-5">
//       {/* <form className="form-inline my-2 my-lg-0 mx-auto" > */}
//       <form className="form mt-3">
//             <input
//             className="form-control w-25 mx-auto"
//             type="search"
//             placeholder="Search for Employee"
//             name="search"
//             onChange={handleSearch}
//             //   value={value}
//             />
//       </form>
//         <div>
//             <button
//             //   onClick={handleFormSubmit}
//             className="btn btn-secondary mt-3 mb-5 d-grid mx-auto"
//             type="submit"
//             >
//             Search
//             </button>
//             </div>
//     </div>
//   );
// };

// export default Search;
