import React, { useState, useEffect } from 'react'
import { OnlineDesigner } from './OnlineDesigner';
import { useNavigate, useParams } from 'react-router-dom';

export const VerifyOTP = () => {


  const urlParams = new URLSearchParams(window.location.search);
  const [UserEmail, setUserEmail] = useState();
  const myParam = useParams();
  useEffect(() => {
    if (urlParams.has('email')) {
      setUserEmail(urlParams.get('email'))
    } else {
      navigate('/')
    }
  }, [myParam])

  let navigate = useNavigate();

  const [userData, setUserData] = useState({ OTP: '', password: '', ConfirmPassword: '' });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  const [changeDIV, setChangeDIV] = useState(1)

  const sendData = async (e) => {
    e.preventDefault();
    const { OTP } = userData;
    try {
      const response = await fetch('http://localhost:5000/verifyOTP', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: UserEmail, OTP: OTP })
      });

      const data = await response.json();
      if (response.status === 404) {
        alert(data.message)
      } else if (response.status === 400) {
        alert(data.message)
      } else if (response.status === 500) {
        alert(data.message)
      } else if (response.status === 200) {
        alert(data.message)
        setChangeDIV(2)
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const sendPassData = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.ConfirmPassword) {
      return false;
    } else {
      try {
        const { password } = userData;
        const response = await fetch('http://localhost:5000/changePassword', {
          method: 'PUT',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: UserEmail, newPassword: password })
        });

        const data = await response.json();
        if (response.status === 404) {
          alert(data.message)
        } else if (response.status === 500) {
          alert(data.message)
        } else if (response.status === 200) {
          alert(data.message)
          navigate('/login')
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };



  return (
    <div className='Login'>
      {changeDIV === 1 ? (<>
        <OnlineDesigner title="Verify OTP" desc="Please Enter the OTP we just sent to your email" />
        <form method='POST' onSubmit={sendData}>
          <div className='LoginInputs'>
            <input type={'text'} name='OTP' value={userData.OTP} onChange={handleInput} required />
            <span className="LoginInputSpan">{'Enter OTP'}</span>
          </div>
          <div className="LoginBtn">
            <button type="submit">VERIFY</button>
          </div>
        </form>
      </>) : (<>
        <OnlineDesigner title="Change Password" desc="Please enter your New password" />
        <form method='POST' onSubmit={sendPassData}>
          <div className='LoginInputs'>
            <input type={'password'} name='password' value={userData.password} onChange={handleInput} required />
            <span className="LoginInputSpan">{'Password'}</span>
          </div>
          <div className='LoginInputs'>
            <input type={'password'} name='ConfirmPassword' value={userData.ConfirmPassword} onChange={handleInput} required />
            <span className="LoginInputSpan">{'Confirm Password'}</span>
          </div>
          <div className="LoginBtn">
            <button type="submit">Verify</button>
          </div>
        </form>
      </>)}
    </div>
  )
}
