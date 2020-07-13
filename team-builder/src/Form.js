import React from 'react';


const Form = props => {
    return (
        <form>
            <label>What is your name?
                <input
                    type = "text"
                    name = "name"
                    placeholder = "  Insert Name Here  "
                    />
            </label>
            <br/>
            <label>What is your e-mail address?
                <input
                    type = "text"
                    name = "email"
                    placeholder = "  Insert Email Here  "
                />
            </label>
            <br/>
            <label>What is your role?
                <input
                    type = "text"
                    name = "role"
                    placeholder = "  Insert Role Here  "
                />
            </label>
            <br/>
            <button type = "submit"> Add Employee </button>
        </form>   
    )};

export default Form;