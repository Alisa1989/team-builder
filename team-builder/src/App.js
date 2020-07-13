import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

import {useState} from 'react';




function App() {
  const [employees, setEmployees] = useState([]);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div> 
      <h1>Employees</h1>
      <Form employees ={employees} setEmployees={setEmployees}/>
    </div>
    
  );
}

export default App;
