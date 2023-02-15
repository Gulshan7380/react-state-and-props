import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';

const ele = document.getElementById("root");

const root = ReactDOM.createRoot(ele);

const App = () => {
    // state
    // state is awlays immutable
    const [employeeList, setEmplyeeList] = useState([
        {
            id: Math.random(),
            name: 'Test',
            details: 'Details about Test'
        }
    ]);

    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const addEmplyee = (event) => {
        event.preventDefault();
        const employee = {
            id: Math.random(),
            name: name,
            details: content
        };
        let empList = employeeList;
        empList.push(employee);
        setEmplyeeList(empList);
        setName('');
        setContent(''); 
    };

    const deletEmployee = (name) => {
        alert('trying to delete employe with name: ', name);
    };

    const updateData = (event, inputName) => {
        if (inputName === 'name') {
            setName(event.target.value);  
        } else if (inputName === 'content') {
            setContent(event.target.value);
        }
    };

    return (
        <>
            {
                employeeList.map((employee) => (<Card key={employee.name} employee={employee} onDelete={deletEmployee} />))
            }
            <div>
                <form onSubmit={addEmplyee}>
                    <label>Name:</label>
                    <input type="text" id="name" name="name" onChange={() =>updateData(event, 'name')} />
                    <label>Content:</label>
                    <input type="text" id="content" name="content" onChange={() => updateData(event, 'content')} />
                    <hr />
                    <input disabled={!name || !content} type="submit" value="Add Employee" />
                </form>
            </div>
        </>

    )
};

root.render(<App></App>);
  