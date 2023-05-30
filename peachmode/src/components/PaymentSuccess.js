import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './PaymentSuccessFull.json';
export const PaymentSuccess = () => {
  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  };



  const navigate = useNavigate();
  const location = useLocation();
  const [seconds, setSeconds] = useState(30);
  const [orderInfo, setOrderInfo] = useState();
  const reference = new URLSearchParams(location.search).get('reference');


  const totalOrders = (products) => {
    let totalOrderAmount = 0;
    for (let i = 0; i < products.length; i++) {
      totalOrderAmount += products[i].amount;
    }
    return totalOrderAmount;
  }


  useEffect(() => {
    const storedOrderInfo = localStorage.getItem('orderInfo');
    const parsedOrderInfo = JSON.parse(storedOrderInfo);
    if (parsedOrderInfo) {
      setOrderInfo(parsedOrderInfo);
      console.log(orderInfo)
      localStorage.removeItem('orderInfo');
    } else if (!reference) {
      navigate('/');
    }
  }, []);

  // useEffect(() => {
  //   if (!reference || !orderInfo) {
  // If reference parameter is not present, navigate to a different page
  // navigate('/'); // Replace with the desired URL or path
  // }
  // const redirectTimer = setInterval(() => {
  //   setSeconds((prevSeconds) => prevSeconds - 1);
  // }, 1000); // Decrease the interval to 1000 milliseconds (1 second)

  // setTimeout(() => {
  //   clearInterval(redirectTimer);
  //   navigate('/');
  // }, 30000); // 30000 milliseconds = 30 seconds

  // return () => {
  //   clearInterval(redirectTimer);
  // };
  // }, [location, navigate]);


  return (
    <div className='NotFoundAnimation' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      {orderInfo && (
        <>
          <Lottie options={lottieOptions} height={260} width={260} />
          {reference === 'COD' ? (<>
            <h2>Your Order was Made SuccessFully.</h2>
            <p>Paymnt Method. <b>{'Cash On Delivery (COD)'}</b></p>
          </>) : (<>
            <h2>Payment Successful</h2>
            <p>Reference No. <b>{reference}</b></p>
            <p>Paymnt Method. <b>{'Paid Online'}</b></p>
          </>)}
          <p>Email. <b>{orderInfo.email}</b></p>
          <p>Phone. <b>{orderInfo.phone}</b></p>
          <p>Total Price. <b>₹{orderInfo.TotalPrice}.00</b></p>
          <p>Total Products. <b>{totalOrders(orderInfo.products)}</b></p>
          <p>Products. {orderInfo.products.map((product) => {
            return (<>
              <b>{product.MainProduct.name} - ₹{product.MainProduct.price}.00 </b><br />
            </>)

          })}</p>
          <p>Shipping Address. <b>{orderInfo.address + ' ' + orderInfo.zipcode + ' ' + orderInfo.state}</b></p>
          {/* <p>Redirecting to the Home Page in {seconds} seconds</p> */}
        </>
      )}
    </div>
  );
};