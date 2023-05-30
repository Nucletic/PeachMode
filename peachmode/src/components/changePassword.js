import React, { useState, useEffect } from 'react'
import { OnlineDesigner } from './OnlineDesigner'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginContext } from './context/LoginContext';

export const ChangePassword = () => {

  let navigate = useNavigate();

  useEffect(() => {
    document.title = 'Change Password';
  }, [])


  const [userData, setUserData] = useState({ email: '' });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  const [sendBtnText, setSendBtnText] = useState('Send OTP');

  const sendData = async (e) => {
    e.preventDefault();
    const { email } = userData;
    try {
      const response = await fetch('http://localhost:5000/forgotPassword', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      });

      const data = await response.json();
      if (data) {
        setSendBtnText('Send OTP')
        if (response.status === 500) {
          alert(data.message)
        } else if (response.status === 404) {
          alert(data.message)
        } else if (response.status === 200) {
          if (data.message === 'OTP sent successfully') {
            navigate(`/verifyOTP?email=${email}`)
          }
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };




  return (
    <div className='Login'>
      <OnlineDesigner title="Enter Email" desc="Please enter your E-mail address" />
      <form method='POST' onSubmit={sendData}>
        <div className='LoginInputs'>
          <input type={'text'} name='email' value={userData.email} onChange={handleInput} required />
          <span className="LoginInputSpan">{'E-mail'}</span>
        </div>
        <div className="LoginBtn">
          <button type="submit" onClick={() => { setSendBtnText('Please Wait...') }}>{sendBtnText}</button>
        </div>
      </form>
    </div>
  )
}

