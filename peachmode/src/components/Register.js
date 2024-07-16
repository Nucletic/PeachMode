import React, { useState, useEffect } from 'react'
import { AnimatedInputs } from './AnimatedInputs'
import { OnlineDesigner } from './OnlineDesigner'
import { Link, useNavigate } from 'react-router-dom'

export const Register = () => {

  let Navigate = useNavigate();
  const [userData, setUserData] = useState({ firstname: '', lastname: '', email: '', password: '' });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }


  useEffect(() => {
    document.title = 'Create new Account';
  }, [])

  const sendData = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password } = userData;
    try {
      const response = await fetch('https://peachmode-server.onrender.com/register', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstname, lastname, email, password })
      });
      const data = await response.json();
      if (response.status === 400) {
        alert(data.error);
      } else if (response.status === 409) {
        alert(data.error);
      } else if (response.status === 200) {
        alert('Account Created!');
        Navigate('/login');
      }
    } catch (error) {
      alert('There is an error creating your account. Please try again in a moment.');
    }
  };

  return (
    <div className='Login'>
      <OnlineDesigner title="Register" desc="Please fill in the fields below:" />
      <form method='POST' action="" onSubmit={sendData}>
        <div className='LoginInputs'>
          <input type={'text'} name='firstname' value={userData.firstname} onChange={handleInput} required />
          <span className="LoginInputSpan">{'First name'}</span>
        </div>
        <div className='LoginInputs'>
          <input type={'text'} name='lastname' value={userData.lastname} onChange={handleInput} required />
          <span className="LoginInputSpan">{'last name'}</span>
        </div>
        <div className='LoginInputs'>
          <input type={'text'} name='email' value={userData.email} onChange={handleInput} required />
          <span className="LoginInputSpan">{'E-mail'}</span>
        </div>
        <div className='LoginInputs'>
          <input type={'password'} name='password' value={userData.password} onChange={handleInput} required />
          <span className="LoginInputSpan">{'password'}</span>
        </div>
        <div className="LoginBtn">
          <button type="submit">SIGN UP</button>
        </div>
        <div className="OtpLoginBtn">
          <button>LOGIN VIA OTP</button>
        </div>
      </form>
      <div className="newCustomerLink">
        <p>Already have an account? <Link to={'/login'}>Login</Link></p>
      </div>
    </div>
  )
}