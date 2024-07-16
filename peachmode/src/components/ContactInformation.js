import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from './context/CartContext';

export const ContactInformation = () => {

  const wantEmailAndUpdatesCheckBox = document.querySelector('#wantEmailAndUpdates');
  let wantEmailAndUpdates;
  useEffect(() => {
    if (wantEmailAndUpdatesCheckBox) {
      if (wantEmailAndUpdatesCheckBox.checked) {
        wantEmailAndUpdates = wantEmailAndUpdatesCheckBox.value;
      }
    }
  }, [wantEmailAndUpdatesCheckBox])

  useEffect(() => {
    document.title = 'Contact & Shipping Information';
  }, [])



  const openOrderSummaryMobile = () => {
    const RightContactInformation = document.querySelector('.RightContactInformation');
    RightContactInformation.classList.toggle('changeRightInformationHeight');
  }
  const { cart, sendUserData, buyNowProduct } = useCartContext();
  if (buyNowProduct) {
    cart.length = 0; // Clear the existing cart array
    cart.push(buyNowProduct); // Add the buyNowProduct to the cart
  }

  const [userData, setUserData] = useState('');
  const [login, setLogin] = useState();
  let navigate = useNavigate()

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
      throw new Error(err)
    }
  }

  useEffect(() => {
    auth();
  }, [])

  useEffect(() => {
    if (cart) {
      if (cart.length === 0) {
        navigate('/Collection')
      }
    }
  }, [cart])


  const [userAddress, setUserAddress] = useState();
  useEffect(() => {
    if (userData) {
      for (let i = 0; i < userData.address.length; i++) {
        if (userData.address[i].defaultAdd === "true") {
          setUserAddress(userData.address[i])
          break;
        }
      }
    }
  }, [userData])

  const [giftCardValue, setGiftCardValue] = useState();
  const [disableApply, setDisableApply] = useState(false);


  let TotalPrice = 0;
  if (cart) {
    for (let i = 0; i < cart.length; i++) {
      let result = cart[i].MainProduct.price * cart[i].amount
      TotalPrice += result
    }
  }

  const [selectedState, setSelectedState] = useState('');
  const [userInfo, setUserInfo] = useState();


  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  }


  const [selectedAddress, setSelectedAddress] = useState();
  const [valueChanged, setValueChanged] = useState();
  useEffect(() => {
    if (userData && userAddress && selectedAddress) {
      const Option = document.querySelectorAll('.selecetedAddressSelectOption');
      Option[userAddress.addressId].setAttribute('selected', '')
      Option[userAddress.addressId].innerHTML = `Address ${userAddress.addressId + 1} (Default Address)`
      setUserInfo({
        email: userData.email, firstname: selectedAddress.firstname, lastname: selectedAddress.lastname, company: selectedAddress.company,
        address: selectedAddress.address1, city: selectedAddress.city, zipcode: selectedAddress.zipcode, phone: selectedAddress.phone,
        state: selectedAddress.state, products: cart,
        TotalPrice: (giftCardValue ? Math.round(TotalPrice - (parseInt(giftCardValue) / 100) * TotalPrice) : TotalPrice),
        wantEmailAndUpdates: wantEmailAndUpdates
      })
      setSelectedState(selectedAddress.state)
    } else {
      setUserInfo({
        email: '', firstname: '', lastname: '', company: '', address: '', city: '', zipcode: '', phone: '',
        state: selectedState, products: cart, TotalPrice: (giftCardValue ? Math.round(TotalPrice - (parseInt(giftCardValue) / 100) * TotalPrice) : TotalPrice), wantEmailAndUpdates: wantEmailAndUpdates
      })
    }
    setValueChanged(true)
  }, [userData, userAddress, selectedAddress])


  const [giftCard, setGiftCard] = useState({ CardValue: '' });
  const handleGiftCard = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setGiftCard({ ...giftCard, [name]: value });
  };


  const checkGiftCard = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://peachmode-server.onrender.com/verifyGiftCards', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ giftCard: giftCard.CardValue })
      })

      const data = await response.json();
      if (response.status === 404) {
        alert(data.message)
      } else if (response.status === 500) {
        alert(data.message)
      } else if (response.status === 200) {
        setGiftCardValue(data.element[giftCard.CardValue]);
        setDisableApply(true)
      }
    } catch (error) {
      alert("There is an error applying your gift Card");
    }
  }


  const SendDataToShipping = () => {
    const CompanyInput = document.getElementById('CompanyInput');
    if (CompanyInput.value === "") {
      CompanyInput.value = 'none'
    }
  }

  return (
    <div className='ContactInformation'>
      <div className="LeftContactInformation">
        <div className="ContactInformationTitle">
          <div className="ContactInformationTitleLogo">
            <img src="https://cdn.shopify.com/s/files/1/0637/4834/1981/files/Peachmode_Logo.png?39255" width={218} />
          </div>
          <div className="ContactInformationTitleBreadCrum">
            <Link to="/">
              Home
              <svg xmlns="http://www.w3.org/2000/svg" fill='#737373' width="10" height="10" viewBox="0 0 24 24">
                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
              </svg>
            </Link>
            <Link to="#">
              Information
              <svg xmlns="http://www.w3.org/2000/svg" fill='#737373' width="10" height="10" viewBox="0 0 24 24">
                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
              </svg>
            </Link>
            <Link to="#">
              Payment
            </Link>
          </div>
        </div>
        <Routes>
          <Route exact path='ContactInformation' element={
            valueChanged && (
              <form className="ContactInformationForm" method='POST'
                onSubmit={() => { sendUserData(userInfo); navigate('/PlaceOrder/Shipping'); }}>
                <div className="ContactInformationFormAccountEmail">
                  <div className="ContactInformationFormAccountEmailTitle">
                    <h3>Contact information</h3>
                    {login === true ? '' : (<p>Already have an account? <Link to="/login">Log in</Link></p>)}
                  </div>
                  {login === true ? (
                    <div className="LoggedInContactInfo">
                      <div className="LoggedInContactInfoProfilePic">
                        <img src="https://cdn.shopify.com/s/files/1/0637/4834/1981/products/file_3048f624-17b2-4ba3-87ed-f93089af568b_small.jpg?v=1681901291"
                          alt="" width={50} height={50} />
                      </div>

                      <div className="LoggedInContactInfoMetaInfo">
                        <p>{userData.email}</p>
                        <a href="">Log Out</a>
                      </div>
                    </div>) : (
                    <div className='LoginInputs'>
                      <input type={'text'} name='email'
                        value={userInfo.email}
                        onChange={handleInput} required />
                      <span className="LoginInputSpan">{'Email'}</span>
                    </div>
                  )}

                  <label className="ContactInformationFormAccountEmailTitleEmailNewsCheckbox">
                    <input type="checkbox" value={true} id='wantEmailAndUpdates' name='wantEmailAndUpdates' />
                    Email me with news and offers
                  </label>
                </div>
                {userData && (<>
                  <div className="ContactInformationFormAccountEmailTitle" style={{ marginTop: '20px' }}>
                    <h3>Shipping address</h3>
                  </div>
                  <div className='ContactInformationFormCityStateInput'>
                    <select name="address" value={JSON.stringify(selectedAddress)} style={{ width: '100%', cursor: 'pointer' }}
                      onChange={(e) => { setSelectedAddress(JSON.parse(e.target.value)) }} required>
                      {userData.address.map((address, i) => (
                        <option value={JSON.stringify(address)} key={i} className='selecetedAddressSelectOption'>
                          Address {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </>)}
                <div className="ContactInformationFormMain">
                  <div className="ContactInformationFormAccountEmailTitle" style={{ marginTop: '20px' }}>
                    <h3>Shipping address</h3>
                  </div>

                  <div className="ContactInformationFormMainName">
                    <div className='LoginInputs'>
                      <input type={'text'} name='firstname'
                        value={userInfo.firstname} onChange={handleInput} required />
                      <span className="LoginInputSpan">{'First name'}</span>
                    </div>

                    <div className='LoginInputs'>
                      <input type={'text'} name='lastname'
                        value={userInfo.lastname} onChange={handleInput} required />
                      <span className="LoginInputSpan">{'Last name'}</span>
                    </div>
                  </div>

                  <div className="ContactInformationFormOtherInput">
                    <div className='LoginInputs'>
                      <input type={'text'} name='company' id='CompanyInput'
                        value={userInfo.company} onChange={handleInput} required />
                      <span className="LoginInputSpan">{'Company Address (optional)'}</span>
                    </div>

                    <div className='LoginInputs'>
                      <input type={'text'} name='address'
                        value={userInfo.address} onChange={handleInput} required />
                      <span className="LoginInputSpan">{'Apartment Suite etc.'}</span>
                    </div>
                  </div>

                  <div className="ContactInformationFormCityStateInput">
                    <div className='LoginInputs'>
                      <input type={'text'} name='city'
                        value={userInfo.city} onChange={handleInput} required />
                      <span className="LoginInputSpan">{'City'}</span>
                    </div>

                    <select name="state" value={selectedState} style={{ cursor: 'pointer' }}
                      onChange={(e) => { setSelectedState(e.target.value) }} required>
                      <option value='' disabled={true}>Select State</option>
                      <option value="UttarPradesh">UttarPradesh</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Noida">Noida</option>
                    </select>

                    <div className='LoginInputs'>
                      <input type={'text'} name='zipcode'
                        value={userInfo.zipcode}
                        onChange={handleInput} required />
                      <span className="LoginInputSpan">{'Zip code'}</span>
                    </div>
                  </div>

                  <div className="ContactInformationFormOtherInput">
                    <div className='LoginInputs'>
                      <input type={'text'} name='phone'
                        value={userInfo.phone}
                        onChange={handleInput} required />
                      <span className="LoginInputSpan">{'Phone'}</span>
                    </div>
                  </div>

                  {/* <div className="ContactInformationFormAccountSaveInfo">
                  <label className="ContactInformationFormAccountEmailTitleEmailNewsCheckbox">
                    <input type="checkbox" />
                    Save this information for next time
                  </label>
                </div> */}
                </div>

                <div className="ContactInformationFormSubmitReturn">
                  <Link href="/">Return to cart</Link>
                  <button type='Submit' onClick={SendDataToShipping}>Continue to shipping</button>
                </div>
              </form>
            )
          } />
          <Route exact path='Shipping' element={<Shipping />} />
        </Routes>
      </div>

      <div className="RightContactInformation">
        <div className="RightContactInformationProducts">
          {cart ? (cart.map((product, index) => {
            return (
              <div className="RightContactInformationProductsMain" key={index}>

                <div className="RightContactInformationProductsLeft">
                  <img src={product.MainProduct.images[0]}
                    alt="" width={65} height={65} />
                  <div className="RightContactInformationProductsAmountLeft">{product.amount}</div>
                </div>

                <div className="RightContactInformationProductsRight">
                  <h3>{product.MainProduct.name}</h3>
                  <p>₹{product.MainProduct.price}.00</p>
                </div>

              </div>
            )
          })) : ''}
        </div>

        <form className="RightContactInformationProductsTotal" onSubmit={checkGiftCard} style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
          <div className="RightContactInformationProductsTotalLeft">
            {disableApply ? (
              <input type="text" placeholder='Gift Card Code' name='CardValue' disabled />
            ) : (
              <input type="text" placeholder='Gift Card Code' name='CardValue' value={giftCard.CardValue} onChange={handleGiftCard} />
            )}</div>

          <div className="RightContactInformationProductsTotalRight">
            {disableApply ? (
              <button type='button' disabled>Apply</button>
            ) : (
              <button type='submit'>Apply</button>
            )}
          </div>
        </form>
        <div className="RightContactInformationProductsSubtotal">
          <p>Subtotal<b>₹{TotalPrice}.00</b></p>
          {giftCardValue && (
            <p>{'Gift Card'}<b>- ₹{Math.round((parseInt(giftCardValue) / 100) * TotalPrice)}.00</b></p>
          )}
          <p>Shipping<b>Free</b></p>
        </div>

        <div className="RightContactInformationProductsTotal">
          <div className="RightContactInformationProductsTotalLeft">
            <h3>Total</h3>
            <p>including all the Taxes</p>
          </div>

          <div className="RightContactInformationProductsTotalRight">
            <p>₹{giftCardValue ? Math.round(TotalPrice - (parseInt(giftCardValue) / 100) * TotalPrice) : TotalPrice}.00</p>
          </div>
        </div>
      </div>


      <div className='OrderSummaryMobile' onClick={openOrderSummaryMobile}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#282c3f" viewBox="0 0 24 24">
            <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z">
            </path>
          </svg>

          <p>
            Show order summary
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </p>
        </div>

        <h3>₹{giftCardValue ? (parseInt(giftCardValue) / 100) * TotalPrice : TotalPrice}.00</h3>

      </div>
    </div >
  )
}
































const Shipping = () => {

  let navigate = useNavigate();
  const { usInfo } = useCartContext();
  const [paymentMethod, setPaymentMethod] = useState('');


  const CompletePayment = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch('https://peachmode-server.onrender.com/checkOut', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ usInfo })
      });
      const data = await response.json();
      if (data.success === true) {
        if (paymentMethod === 'CashOnDelivery') {
          postData(e);
          window.location.replace('http://localhost:3000/PaymentSuccess?reference=COD')
        } else {
          checkOutHandler(data.order);
        }
      }
    } catch (error) {
      alert('error in completing payment.');
    }
  };
  // alert('there is an error processing your request, please try again in a moment!')

  const { sendOrderData } = useCartContext();
  const postData = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://peachmode-server.onrender.com/addOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ usInfo, paymentMethod: document.getElementById('paymentMethod').value })
      }).then((response) => { return response.json() })
        .then((data) => {
          sendOrderData(usInfo);
        })
    } catch (error) {
      alert('error in posting Data')
    }
  }

  const getKey = async () => {
    try {
      await fetch('https://peachmode-server.onrender.com/getKey', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => { response.json() })
        .then((data) => {
          if (data) {
            return data.key
          }
        })
    } catch (error) {
      alert('error in get key')
    }
  }

  const checkOutHandler = (order) => {
    const options = {
      key: getKey(),
      amount: order.amount,
      currency: "INR",
      name: usInfo.firstname + ' ' + usInfo.lastname,
      description: "Tutorial of RazorPay",
      image: "",
      order_id: order.id,
      callback_url: "https://peachmode-server.onrender.com/paymentVerification",
      prefill: {
        name: usInfo.firstname + ' ' + usInfo.lastname,
        email: usInfo.email,
        contact: usInfo.phone
      },
      notes: {
        "address": usInfo.address
      },
      theme: {
        "color": "#121212"
      }
    };

    const razor = new window.Razorpay(options);
    razor.open()
  }


  useEffect(() => {
    document.title = 'Payment';
  }, [])

  return (
    usInfo !== undefined && (<form method='POST' onSubmit={CompletePayment}>
      <div className="ShippingInfo">
        <div className="ShippingInfoMain">
          <h3>Contact</h3>
          <p>{'+91 ' + (usInfo.address.phone ? usInfo.address.phone : usInfo.phone)}</p>
          <Link to={'/PlaceOrder/ContactInformation'}>Change</Link>
        </div>
        <div className="ShippingInfoMain">
          <h3>Ship to</h3>
          <p>
            {usInfo.company ? (usInfo.company + ', ') : ('')}
            {(usInfo.address) && (
              <>
                {usInfo.address + ', '}
              </>
            )}
            {usInfo.zipcode && usInfo.zipcode + ', '}
            {usInfo.city && usInfo.city + ', '}
            {usInfo.state && usInfo.state}
          </p>
          <Link to={'/PlaceOrder/ContactInformation'}>Change</Link>
        </div>
        <div className="ShippingInfoMain">
          <h3>Method</h3>
          <p>Standard • <b>Free</b></p>
        </div>
      </div>
      <div className="PaymentMethodTitle">
        <h3>Payment</h3>
        <p>All transactions are secure and encrypted.</p>
      </div>
      <div className="PaymentMethod">
        <div className="PaymentMethodMain">
          <label>
            <input type="radio" value={'CashOnDelivery'} name='paymentMethod' id='paymentMethod' onChange={(e) => setPaymentMethod(e.target.value)} />
            Cash on Delivery (COD)
          </label>
        </div>
        <div className="PaymentMethodMain">
          <label>
            <input type="radio" value={'paidOnline'} name='paymentMethod' defaultChecked onChange={(e) => setPaymentMethod(e.target.value)} />
            Razorpay Secure (UPI, Cards, Wallets, NetBanking)
            <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
              width={38} />
            <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
              width={38} />
            <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/rupay-7dd8b2a3c63957a0174f9ad530376abbac88ed8baeb14d78e7887eec4208e63d.svg"
              width={38} />
            <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/paytm-ea638dba9d6e858f0f6c38d0b744ab791cabe2016309511ada28a5da51140909.svg"
              width={38} />
          </label>
        </div>
      </div>
      <div className="ContactInformationFormSubmitReturn">
        <Link href="/">Return to cart</Link>
        <button type='Submit'>Continue to Payment</button>
      </div>
    </form>)
  )
}