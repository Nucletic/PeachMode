import React from 'react'
import { Link } from 'react-router-dom'
export const MainFooter = () => {
  return (
    <div className="MainFooter">
      <div className="MainFooterLeftLinks">
        <h2>QUICK LINKS</h2>
        <li><Link to="/terms-and-conditions">Terms & Condition</Link></li>
        <li><Link to="/shipping-policy">Shipping & Delivery</Link></li>
        <li><Link to="goods-services-tax">Goods & Services Tax</Link></li>
        <li><Link to="/refund-policy">Refund and Cancellation</Link></li>
        <li><Link to="/privacy-policy">Privacy Policies</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
      </div>
      <div className="MainFooterLeftLinks">
        <h2>MAIN MENU</h2>
        <li><Link to="/collection">Collections</Link></li>
        <li><Link to={'/collection?filter=saree'}>Sarees</Link></li>
        <li><Link to={'/collection?filter=suit'}>Salwar Suits</Link></li>
        <li><Link to={'/collection?filter=kurti'}>Kurtis</Link></li>
        <li><Link to={'/collection?filter=lehenga'}>Lehengas</Link></li>
        <li><Link to={'/collection?filter=gown'}>Gowns</Link></li>
        <li><Link to={'/collection?filter=western'}>Western</Link></li>
      </div>
      {/* <div className="MainFooterLeftLinks">
        <h2>INFORMATION</h2>
        <li><a href="">Become a Vendor</a></li>
        <li><a href="">Store Location</a></li>
        <li><a href="">Franchise</a></li>
        <li><a href="">Careers</a></li>
        <li><a href="">Partners</a></li>
        <li><a href="">Reviews</a></li>
      </div> */}
      <div className="MainFooterRightFollow">
        <h2>FOLLOW US</h2>
        <ul>
          <li>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" className='FollowFooterSVG' width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <span></span>
          </li>
          <li>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" className='FollowFooterSVG' width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
            <span></span>
          </li>
          <li>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" className='FollowFooterSVG' width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <span></span>
          </li>
          <li>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" className='FollowFooterSVG' width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
            </a>
            <span></span>
          </li>
        </ul>
      </div>
      {/* <div className="MainFooterRightNewsLetter">
        <h2>NEWSLETTER</h2>
        <p>Subscribe to our newsletter and get a 10% discount on your first order.</p>
        <form>
          <label id='MainFooterRightNewsLetterLabel'>
            <input type="email" id='MainFooterRightNewsLetterInput' />
            <span id='MainFooterRightNewsLetterSpan'>Your e-mail</span>
            <button type="submit"><svg clipRule="evenodd" height="25" width="25" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero" /></svg></button>
          </label>
        </form>
      </div> */}
    </div>
  )
}
