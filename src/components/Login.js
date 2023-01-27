import React from 'react';
import { useState } from 'react';


function Login() {
  const [data,setData] = useState({
    username:"",
    password:""
  });

  const {username,password} = data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});

    }
    const submitHandler = e => {

      e.preventDefault();
      console.log(data);
    }

  return(
  <div className='caja'>
   <div className='form'>
   <h2>Login</h2>
   <h3>Log in to manage your favourites dishes</h3>
    <form onSubmit={submitHandler}>
        <label for="username">User: </label>
        <input type="text" name="username" value={username}
        onChange={changeHandler}/><br />
        <label for="password">Password: </label>
        <input type="password" name="password" value={password}
        onChange={changeHandler}/><br />
        <input type="submit" name="submit" value="Login" />
    </form>
   </div>
  </div>
)
}

export default Login;