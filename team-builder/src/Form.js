import React, {useState} from 'react';


const Form = props => {
    const [newEmployee, setNewEmployee] = useState({name:"", email:"", role:""})

    const changeHandler = (event) => {
        setNewEmployee({
            ...newEmployee,
            [event.target.name]: [event.target.value]

        })
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            setNewEmployee({name:"", email:"", role:""})
            console.log(props.addEmployee)
        }}>

            <label>What is your name?
                <input
                    id= "name"
                    type = "text"
                    name = "name"
                    placeholder = "  Insert Name Here  "
                    value ={newEmployee.name}
                    //onChange={(event) => {setNewEmployee(event.target.value)}}
                    onChange={changeHandler}
                    />
            </label>
            <br/>
            <label>What is your e-mail address?
                <input
                    id= "email"
                    type = "text"
                    name = "email"
                    placeholder = "  Insert Email Here  "
                    value = {newEmployee.email}
                    //onChange={(event) => {setNewEmployee(event.target.value)}}
                    onChange={changeHandler}
                />
            </label>
            <br/>
            <label>What is your role?
                <select id= "role" name= "role" value = {newEmployee.role} onChange={changeHandler}>
                    <option>Please Select</option> 
                    <option>Front End</option>
                    <option>Back End</option>
                    <option>Full Stack</option>
                </select>
            </label>
            <br/>
            <button type = "submit"> Add Employee </button>
        </form>   
    )};

export default Form;