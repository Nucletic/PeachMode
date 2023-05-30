import React, { useEffect, useRef } from 'react';
import { LoaderAnimation } from './LoaderAnimation'
import { useCartContext } from '../components/context/CartContext'
import { Link } from 'react-router-dom';

export const NewArrivalProduct = (props) => {
  const { addToCart } = useCartContext();
  const amount = 1;

  const productRef = useRef(null);

  useEffect(() => {
    const afterStyle = window.getComputedStyle(productRef.current, '::before').content;
    const discountPercent = Math.round(((props.OriginalPrice - props.price) / props.OriginalPrice) * 100);

    productRef.current.style.setProperty('--before-content', `"SAVE ${discountPercent}%"`);
  }, []);


  return (
    <div className='NewArrivalProduct'>
      <div className="NewArrivalProductImg">
        <Link to={`/products/:${props.productId}:${props.name}`}>
          <div className="NewArrivalProductImgMain" ref={productRef}>
            {props.images ?
              (<img src={props.images} alt="Product Image" />) : <LoaderAnimation />}
          </div>
        </Link>
        <button className="NewArrivalProductCartBtn" onClick={() => { addToCart(props.MainProduct, amount) }}>+ Add To Cart</button>
        <button className="NewArrivalProductMobileCartBtn" onClick={() => { addToCart(props.MainProduct, amount) }}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" /></svg></button>
      </div>
      <Link to={`/products/:${props.productId}:${props.name}`} className="NewArrivalProductTitle">
        <p>{props.name}</p>
        <div className="NewArrivalProductPrice">
          <p>₹{props.price}.00</p>
          <p><strike>₹{props.OriginalPrice}.00</strike></p>
        </div>
      </Link>
    </div>
  )
}