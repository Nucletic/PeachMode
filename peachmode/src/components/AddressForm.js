import React, { useState, useEffect } from 'react'
import { useAddressContext } from './context/AddressContext';
import { useNavigate } from 'react-router-dom';

export const AddressForm = () => {
  const { addressId } = useAddressContext();
  let navigate = useNavigate();

  const [userData, setUserData] = useState('');
  const [login, setLogin] = useState();

  const auth = async () => {
    try {
      const response = await fetch('https://peachmode-server.onrender.com/account', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      const data = await response.json();
      if (response.status === 401) {
        alert(response.error)
      } else if (response.status === 404) {
        alert(response.error)
      } else if (response.status === 200) {
        setUserData(data)
        setLogin(true)
      }
    } catch (err) {
      alert('Unauthorized user, please login')
      navigate('/login')
    }
  }

  useEffect(() => {
    auth();
  }, [])

  const [selectedState, setSelectedState] = useState('');
  const [userInfo, setUserInfo] = useState({
    addressId: addressId, firstname: '',
    lastname: '', company: '', phone: '', address1: '',
    address2: '', city: '', zipcode: ''
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  }

  const postData = async (e) => {
    e.preventDefault();
    const setDefaultCheckBox = document.getElementById('SetDefaultAdd');
    const { firstname, lastname, company, phone, address1, address2, city, zipcode } = userInfo;
    try {
      const response = await fetch('https://peachmode-server.onrender.com/addAddress', {
        method: 'POST',
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userData._id, addressId, firstname, lastname, company, phone, address1, address2,
          city, zipcode, state: selectedState, defaultAdd: setDefaultCheckBox.checked ? true : false
        })
      });
      const data = await response.json()
      if (response.status === 500) {
        alert(data.error);
      } else if (response.status === 200) {
        navigate('/account');
      }
    } catch (error) {
      alert('There is an error adding a new address.');
    }
  };



  return (
    <div className="AddressFormBig">
      {login === true ? (
        <>
          <div className="AddressFormTitle">
            <h1>Add a new address</h1>
            <p>Please fill in the fields below:</p>
          </div>
          <div className='AddressForm'>
            <form method='POST' onSubmit={postData} className='AddressFormMain'>
              <div className="AddressFormMainName">
                <div className='LoginInputs'>
                  <input type={'text'} name='firstname' value={userInfo.firstname} onChange={handleInput} required autoComplete='off' />
                  <span className="LoginInputSpan">{'First name'}</span>
                </div>
                <div className='LoginInputs'>
                  <input type={'text'} name='lastname' value={userInfo.lastname} onChange={handleInput} required autoComplete='off' />
                  <span className="LoginInputSpan">{'Last name'}</span>
                </div>
              </div>
              <div className='LoginInputs'>
                <input type={'text'} name='company' value={userInfo.company} onChange={handleInput} />
                <span className="LoginInputSpan">{'Company (optional)'}</span>
              </div>
              <div className='LoginInputs'>
                <input type={'text'} name='phone' value={userInfo.phone} onChange={handleInput} required autoComplete='off' />
                <span className="LoginInputSpan">{'Phone number'}</span>
              </div>
              <div className='LoginInputs'>
                <input type={'text'} name='address1' value={userInfo.address1} onChange={handleInput} required autoComplete='off' />
                <span className="LoginInputSpan">{'Address 1'}</span>
              </div>
              <div className='LoginInputs'>
                <input type={'text'} name='address2' value={userInfo.address2} onChange={handleInput} autoComplete='off' />
                <span className="LoginInputSpan">{'Address 2 (optional)'}</span>
              </div>
              <div className="AddressFormMainName">
                <div className='LoginInputs'>
                  <input type={'text'} name='city' value={userInfo.city} onChange={handleInput} required autoComplete='off' />
                  <span className="LoginInputSpan">{'City'}</span>
                </div>
                <div className='LoginInputs'>
                  <input type={'text'} name='zipcode' value={userInfo.zipcode} onChange={handleInput} required autoComplete='off' />
                  <span className="LoginInputSpan">{'Zip code'}</span>
                </div>
              </div>
              <select name="state" value={selectedState} onChange={(e) => { setSelectedState(e.target.value) }} required>
                <option value='' disabled={true}>Select State</option>
                <option value="UttarPradesh">UttarPradesh</option>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
              </select>
              <div className="AddressFormMaincheckBox">
                <label>
                  <input type="checkbox" value={true} name='SetDefaultAdd' id='SetDefaultAdd' onChange={handleInput} />
                  <span>Set as Default</span>
                </label>
              </div>
              <button type='submit'>ADD A NEW ADDRESS</button>
            </form>
          </div>
        </>) : navigate('/login')}
    </div>
  )
}
