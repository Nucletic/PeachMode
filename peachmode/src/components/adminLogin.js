import React, { useState, useEffect } from 'react'
import { OnlineDesigner } from './OnlineDesigner'
import { Link, useNavigate } from 'react-router-dom';

export const AdminLogin = () => {
  const removeHMFSF = () => {
    const currentUrl = window.location.href.split('/').slice(3);
    const AnnouncementBar = document.querySelector('.AnnouncementBar');
    const Header = document.querySelector('.Header');
    const MobileHeader = document.querySelector('.MobileHeader');
    const FooterService = document.querySelector('.FooterService');
    const MainFooter = document.querySelector('.MainFooter');
    if (currentUrl[0] === 'admin') {
      AnnouncementBar.style.display = 'none';
      Header.style.display = 'none';
      MobileHeader.style.display = 'none';
      FooterService.style.display = 'none';
      MainFooter.style.display = 'none';
    }
  }

  useEffect(() => {
    removeHMFSF();
  }, [])



  const [userData, setUserData] = useState({ email: '', password: '' });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({ ...prevState, [name]: value }));
  };


  let navigate = useNavigate();
  const [adminLogin, setAdminLogin] = useState(false);
  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://peachmode-server.onrender.com/verifyAdmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email: userData.email, password: userData.password })
      });
      const data = await response.json();
      if (response.status === 401) {
        alert(data.message);
      } else if (response.status === 500) {
        alert(data.message);
      } else if (response.status === 200) {
        if (data.isAdmin === true) {
          setAdminLogin(true);
          navigate('/admin');
        }
      }
    } catch (error) {
      alert(error);
    }
  };


  return (
    <div className='Login'>
      <OnlineDesigner title="Login as Admin" desc="Please enter your e-mail and password:" />
      <form method='POST' onSubmit={sendData}>
        <div className='LoginInputs'>
          <input type={'text'} name='email' value={userData.email} onChange={handleInput} required />
          <span className="LoginInputSpan">{'E-mail'}</span>
        </div>
        <div className='LoginInputs'>
          <input type={'password'} name='password' value={userData.password} onChange={handleInput} required />
          <span className="LoginInputSpan">{'Password'}</span>
          <Link to={'#'}>{'Forgot password?'}</Link>
        </div>
        <div className="LoginBtn">
          <button type="submit">LOGIN AS ADMIN</button>
        </div>
      </form>
      <div className="newCustomerLink">
        <p>New customer? <Link to={'/register'}>Create an account</Link></p>
      </div>
    </div>
  )
}
