// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import Header from './components/header';
// import Header from './components/header'
// import {DataPage} from './components/database';
import Search from './components/search';
// import Table from './components/Table';


function App() {
  return (
   
    <div>
       <Header />
       {/* <Table /> */}
       
      <Search /> 
    </div>

  );

}

export default App;
