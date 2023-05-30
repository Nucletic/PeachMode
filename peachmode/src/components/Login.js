import React, { useState } from 'react'
import { OnlineDesigner } from './OnlineDesigner'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginContext } from './context/LoginContext';

export const Login = () => {

  let navigate = useNavigate();

  const [userData, setUserData] = useState({ email: '', password: '' });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  const sendData = async (e) => {
    e.preventDefault();
    const { email, password } = userData;

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (response.status === 401) {
        alert(data.error)
      } else if (response.status === 404) {
        alert(data.error)
      } else if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      alert(error.message);
    }
  };




  return (
    <div className='Login'>
      <OnlineDesigner title="Login" desc="Please enter your e-mail and password:" />
      <form method='POST' onSubmit={sendData}>
        <div className='LoginInputs'>
          <input type={'text'} name='email' value={userData.email} onChange={handleInput} required />
          <span className="LoginInputSpan">{'E-mail'}</span>
        </div>
        <div className='LoginInputs'>
          <input type={'password'} name='password' value={userData.password} onChange={handleInput} required />
          <span className="LoginInputSpan">{'Password'}</span>
          <Link to={'/forgotPassword'}>{'Forgot password?'}</Link>
        </div>
        <div className="LoginBtn">
          <button type="submit">LOGIN</button>
        </div>
        {/* <div className="OtpLoginBtn">
          <button>LOGIN VIA OTP</button>
        </div> */}
      </form>
      <div className="newCustomerLink">
        <p>New customer? <Link to={'/register'}>Create an account</Link></p>
      </div>
    </div>
  )
}

