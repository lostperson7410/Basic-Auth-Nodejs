import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameStyle, setUsernameStyle] = useState({});
  const [passwordStyle, setPasswordStyle] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginData = {
      username,
      password,
    };

    axios
      .post('http://localhost:3000/login', loginData)
      .then((response) => {
        console.log(response.data);
        // If login is successful
        setUsernameStyle({color: 'green'});
        setPasswordStyle({color: 'green'});
      })
      .catch((error) => {
        console.log(error);
        // If login failed
        setUsernameStyle({color: 'red'});
        setPasswordStyle({color: 'red'});
      });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label style={usernameStyle}>
          Username:
          <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label style={passwordStyle}>
          Password:
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
