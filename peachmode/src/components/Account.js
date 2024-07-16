import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAddressContext } from './context/AddressContext';

export const Account = () => {

  const { getAddressId, addressId } = useAddressContext();
  let navigate = useNavigate();
  useEffect(() => {
  }, [addressId])

  const [userData, setUserData] = useState();
  const [login, setLogin] = useState(false);

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
      navigate('/login')
    }
  }

  useEffect(() => {
    auth();
  }, [])


  const deleteAddress = async () => {
    try {
      const getCon = window.confirm('Are you sure you want to delete this address?');
      if (getCon) {
        const response = await fetch('https://peachmode-server.onrender.com/deleteAddress', {
          method: 'POST',
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({ userId: userData._id, addressId: addressId })
        });
        const data = await response.json();
        if (response.status === 404) {
          alert(data.error);
        } else if (response.status === 200) {
          window.location.reload();
        }
      }
    } catch (error) {
      alert('There was an error deleting your address.');
    }
  };

  const logOut = async () => {
    try {
      const res = await fetch('https://peachmode-server.onrender.com/logOut', {
        method: 'POST',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      })
      if (res.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      alert('there is an error logging you out check back a bit later.')
    }
  }

  const [userOrders, setUserOrders] = useState();
  const getUserOrders = async () => {
    try {
      const response = await fetch("https://peachmode-server.onrender.com/userOrders", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email: userData.email })
      })
      const data = await response.json();
      if (response.status === 200) {
        setUserOrders(data.orders)
      }
    } catch (err) {
      throw new Error(err);
    }
  }


  useEffect(() => {
    if (userData) getUserOrders();
  }, [userData])


  const [optionClicked, setOptionClicked] = useState();
  useEffect(() => {
    if (optionClicked === 'DELETE') {
      deleteAddress();
    }
  }, [addressId])

  const [accountTabs, setAccountTabs] = useState(1)

  useEffect(() => {
    if (accountTabs === 1) {
      document.title = 'Orders';
    } else if (accountTabs === 2) {
      document.title = 'Profile';
    } else if (accountTabs === 3) {
      document.title = 'Addresses';
    }
  }, [accountTabs])




  return (
    <div className='Account'>
      {login === true ? (
        <>
          <div className="accountTabs">
            <Link className={accountTabs === 1 ? 'activeAccountTab' : ''} onClick={() => { setAccountTabs(1) }}>Orders</Link>
            <Link className={accountTabs === 2 ? 'activeAccountTab' : ''} onClick={() => { setAccountTabs(2) }}>Profile</Link>
            <Link className={accountTabs === 3 ? 'activeAccountTab' : ''} onClick={() => { setAccountTabs(3) }}>Addresses</Link>
            <Link className={accountTabs === 4 ? 'activeAccountTab' : ''} onClick={() => { logOut() }}>Logout</Link>
          </div>
          {accountTabs === 1 && (
            userOrders &&
            <>
              <div className="AddressTitle">
                <h1>Orders <span>{userOrders.length}</span></h1>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                {userOrders.map((order, i) => {
                  return (<div className="Profile" key={i} style={{ width: '320px', height: '300px', overflowY: 'scroll' }}>
                    <p><b>Order :</b>{i + 1}</p>
                    <p><b>Date :</b>
                      {new Date(order.orderPlaced).toLocaleString(undefined,
                        { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
                    <p><b>FirstName :</b>{order.firstname}</p>
                    <p><b>LastName :</b>{order.lastname}</p>
                    <p><b>Email :</b>{order.email}</p>
                    <p><b>Phone :</b>{order.phone}</p>
                    <p><b>Address :</b>{order.address[0]}</p>
                    <p><b>city :</b>{order.city}</p>
                    <p><b>Zipcode :</b>{order.zipcode}</p>
                    <p><b>State :</b>{order.state}</p>
                    <p><b>Total Price :</b>{order.totalPrice}</p>
                    <p><b>Delivered :</b>{order.delivered === true ? 'Yes' : 'No'}</p>
                    {order.products.map((product, i) => {
                      return (<details key={i} style={{ border: '1px solid #f0f0f0', padding: '5px 10px' }}>
                        <summary>Product {i + 1}</summary>
                        <p><b>Amount :</b>{product.amount}</p>
                        <p><b>Size :</b>{product.size}</p>
                        <p><b>Name :</b>{product.MainProduct.name}</p>
                        <p><b>Price :</b>{product.MainProduct.price}</p>
                      </details>)
                    })}
                  </div>)
                })}
              </div>
            </>
          )}
          {accountTabs === 2 && (
            <>
              <div className="AddressTitle">
                <h1>Profile</h1>
              </div>
              <div className="Profile">
                <div className="ProfileNameEmail">
                  <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" width={50} />
                  <div className="ProfileNameEmailMain">
                    <h3>{userData.firstname + ' ' + userData.lastname}</h3>
                    <p>{userData.email}</p>
                  </div>
                </div>
                <p><b>FirstName :</b>{userData.firstname}</p>
                <p><b>LastName :</b>{userData.lastname}</p>
                <p><b>Email :</b>{userData.email}</p>
              </div>
            </>
          )}
          {accountTabs === 3 && (
            <>
              <div className="AddressTitle">
                <h1>Addresses <span>{userData.address.length}</span></h1>
              </div>
              <div className="Addresses">
                {userData.address.map((address, i) => {
                  return (<div className="LeftAddresses" key={i}>
                    <div className="LeftAddressesTitle">
                      <h3>{address.defaultAdd === "true" ? 'DEFAULT ADDRESS' : `ADDRESS - ${i + 1}`} </h3>
                    </div>
                    <p>{address.firstname + " " + address.lastname}</p>
                    <p>{address.company ? address.company : ''}</p>
                    <p>{address.address1 ? address.address1 : ''}</p>
                    <p>{address.address2 ? address.address2 : ''}</p>
                    <p>{address.zipcode + " " + address.city + " " + address.state} India</p>
                    <div className="LeftAddressesButtons">
                      <Link to={'/EditAddress/'} onClick={() => { getAddressId(address.addressId) }}>Edit</Link>
                      <button type='button' onClick={() => { getAddressId(address.addressId); setOptionClicked('DELETE') }} >Delete</button>
                    </div>
                  </div>)
                })}
                <Link to={'/addAddress/'} className="RightAddresses" onClick={() => { getAddressId(userData.address.length) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z" />
                  </svg>
                  <p>Add a new address</p>
                </Link>
              </div>
            </>
          )}
        </>
      ) : ''}
    </div>
  )
}