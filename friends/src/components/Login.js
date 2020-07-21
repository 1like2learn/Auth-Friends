import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const defaultCredentialsValue = {
  username: "",
  password: "",
};

export default function Login() {
  const [ credentials, setCredentials ] = useState(defaultCredentialsValue);
  const history = useHistory()

  const handleChange = event => {
    setCredentials({
        ...credentials,
        [event.target.name]: event.target.value
    });
    console.log(credentials)
  };

  const onLogin = event => {
    event.preventDefault()
    axios.post('http://localhost:5000/api/login', {
      username: 'Lambda School', 
      password: 'i<3Lambd4'
    })
    .then(response => {
      localStorage.setItem("token", response.data.payload);
      history.push("/protected/friends");
    })
    .catch(error => {
      console.log(error)
    });
  }

  return (
    <>
      <form onSubmit={onLogin}>
        <label>Username:
          <input 
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>Password:
          <input 
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  )
}