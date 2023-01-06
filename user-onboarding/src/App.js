import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import axios from 'axios';
import schema from './Validation/formSchema';
import * as yup from 'yup';
import './App.css';

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: false
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: ''
}

const initialDisabled = true;

function App() {

  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data);
      })
      .catch(err => console.error(err));
  }

  const postNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([ res.data, ...users ]);
      })
      .catch(err => console.error(err))
      .finally(setFormValues(initialFormValues));
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid));
  }, [formValues])

  return (
    <div className='container'>
      <h1>New Users</h1>

      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {users.map(user => (
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.first_name} {user.last_name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
