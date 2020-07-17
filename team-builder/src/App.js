import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

import {useState} from 'react';


function App() {
  const [employees, setEmployees] = useState([{name: "blank", email: "unknown", role: "N/A" }]);
  
const addEmployee = (newEmpl) => {
  setEmployees([...employees, newEmpl])
}

  return (
    <div className="App"> 
      <h1>Employees</h1>
      <Form addEmployee ={addEmployee}/>

      <div className="display-employees">
        {employees.map((emp) =>(
          <div>
            <h2>{emp.name}</h2>
            <p>{emp.email}</p>
            <p>{emp.role}</p>
            </div>
        ) )}
      </div>


    </div>
    
  );
}

export default App;
