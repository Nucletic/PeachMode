import React, { useState, useEffect } from 'react';
import { images } from './images';
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from './context/CartContext';
import { useSearchContext } from './context/SearchContext';


const getCart = () => {
  const Cart = document.querySelector('.Cart');
  const cartCover = document.querySelector('.cartCover');
  Cart.style.right = '0';
  cartCover.style.opacity = '1';
  cartCover.style.pointerEvents = 'all';
}

export const Header = () => {
  const [userData, setUserData] = useState('');
  const [login, setLogin] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  let Navigate = useNavigate();

  const checkAuthentication = async () => {
    try {
      const response = await fetch('http://localhost:5000/account', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      const data = await response.json();
      setLogin(response.status === 200 && data.isAuthenticated);
    } catch (err) {
      console.error('Error checking authentication:', err);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await auth();
  //     setLogin(userData !== '');
  //   };
  //   fetchData();
  // }, []);



  const { cart } = useCartContext();
  const { searchTerm } = useSearchContext();

  useEffect(() => {
    const storedRecentSearches = JSON.parse(localStorage.getItem('recentSearches'));
    setRecentSearches(storedRecentSearches || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setSearchClicked(value !== '');
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (searchQuery.trim().length > 0) {
      setRecentSearches([...recentSearches, searchQuery]);
      searchTerm(searchQuery);
      setSearchClicked(false);
      Navigate('/collection')
    } else {
      searchTerm(searchQuery);
      setSearchClicked(false);
      Navigate('/collection')
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const searchInput = document.getElementById('HeaderRightSearchInput');
      const searchSuggestions = document.querySelector('.HeaderRightSearch ul');
      if (
        searchInput &&
        !searchInput.contains(event.target) &&
        (!searchSuggestions || !searchSuggestions.contains(event.target))
      ) {
        setSearchClicked(false);
      } else {
        setSearchClicked(true);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="Header">
        <div className="HeaderLeft">
          <Link to="/">
            <img src={images.HeaderLogo} alt="Logo" />
          </Link>
        </div>
        <div className="HeaderCenter">
          <Link to={'/collection'}>Collections</Link>
          <Link to={'/collection?filter=saree'}>Sarees</Link>
          <Link to={'/collection?filter=suit'}>Salwar Suits</Link>
          <Link to={'/collection?filter=kurti'}>Kurtis</Link>
          <Link to={'/collection?filter=lehenga'}>Lehengas</Link>
          <Link to={'/collection?filter=gown'}>Gowns</Link>
          <Link to={'/collection?filter=western'}>Western</Link>
        </div>
        <div className="HeaderRight">
          <form className="HeaderRightSearch" onSubmit={handleSearchClick}>
            <label htmlFor="HeaderRightSearchInput" id="HeaderRightSearchLabel">
              <input type="text" placeholder="Search" id="HeaderRightSearchInput" autoComplete='off'
                onClick={() => { setSearchClicked(true); }} value={searchQuery} onChange={handleChange} />
              <svg className="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M1000.944149 889.443492 815.920946 704.484333C866.643818 631.794359 896.616424 543.605729 896.616424 448.308212c0-247.594221-200.713991-448.308212-448.308212-448.308212C200.713991 0 0 200.713991 0 448.308212c0 247.594221 200.713991 448.308212 448.308212 448.308212 95.297517 0 183.486147-29.972606 256.176121-80.695478l184.959159 184.959159c30.805179 30.805179 80.695478 30.805179 111.500657 0C1031.685284 970.138971 1031.685284 920.248671 1000.944149 889.443492zM448.308212 768.528363c-176.825568 0-320.220151-143.394584-320.220151-320.220151 0-176.825568 143.394584-320.220151 320.220151-320.220151s320.220151 143.394584 320.220151 320.220151C768.528363 625.133779 625.133779 768.528363 448.308212 768.528363z" />
              </svg>
            </label>
            {searchClicked && (
              <ul>
                {recentSearches.map((search, i) => (
                  <li key={i} onClick={() => { searchTerm(search); setSearchQuery(search); setSearchClicked(false); }}>{search}</li>
                ))}
              </ul>
            )}
          </form>
          <Link to="/Account">Account</Link>
          <button onClick={getCart}>
            Cart<span>{cart ? cart.length : ''}</span>
          </button>
        </div>
      </div>
      <MobileHeader />
    </React.Fragment>
  );
};



const MobileHeader = () => {
  const { searchTerm } = useSearchContext();
  let Navigate = useNavigate()

  const [HeaderOpen, setHeaderOpen] = useState(false);
  const openHeader = () => {
    const closeBtn = document.getElementById('MobileHeaderLeftCloseBtn');
    const Nav = document.querySelector('.MainMobileHeaderLeft div');
    if (HeaderOpen === false) {
      closeBtn.style.left = "0";
      Nav.style.left = "0";
      setHeaderOpen(true)
    } else if (HeaderOpen === true) {
      closeBtn.style.left = "-320px";
      Nav.style.left = "-320px";
      setHeaderOpen(false)
    }
  }

  const [searchClicked, setSearchClicked] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value !== '') {
      setSearchClicked(true);
    }
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (searchQuery.trim().length > 0) {
      setRecentSearches([...recentSearches, searchQuery]);
      searchTerm(searchQuery);
      setSearchClicked(false);
      Navigate('/collection')
    } else {
      searchTerm(searchQuery);
      setSearchClicked(false);
      Navigate('/collection')
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const searchInput = document.getElementById('HeaderRightSearchInput');
      const searchSuggestions = document.querySelector('.HeaderRightSearch ul');
      if (
        searchInput &&
        !searchInput.contains(event.target) &&
        (!searchSuggestions || !searchSuggestions.contains(event.target))
      ) {
        setSearchClicked(false);
      } else {
        setSearchClicked(true);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <div className="MobileHeader">
      <div className="MobileHeaderLeft">
        <button id='MobileHeaderLeftOpenBtn' onClick={openHeader}>
          <svg clipRule="evenodd" fillRule="evenodd" fill='#282c3f' strokeLinejoin="round" strokeMiterlimit="2" width="22" height="22"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fillRule="nonzero" />
          </svg>
        </button>
        <div className="MainMobileHeaderLeft">
          <button id='MobileHeaderLeftCloseBtn' onClick={openHeader}>
            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width="22" height="22" fill='#282c3f'
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>
          </button>
          <div>
            <Link to={'/collection'}>Collections</Link>
            <Link to={'/collection?filter=saree'}>Sarees</Link>
            <Link to={'/collection?filter=suit'}>Salwar Suits</Link>
            <Link to={'/collection?filter=kurti'}>Kurtis</Link>
            <Link to={'/collection?filter=lehenga'}>Lehengas</Link>
            <Link to={'/collection?filter=gown'}>Gowns</Link>
            <Link to={'/collection?filter=western'}>Western</Link>
          </div>
        </div>
      </div>
      <div className="MobileHeaderCenter">
        <Link to={'/'}>
          <img src={images.HeaderLogo} alt="Logo" width={195} />
        </Link>
      </div>
      <div className="MobileHeaderRight">
        <form className="HeaderRightSearch" onSubmit={handleSearchClick}>
          <label htmlFor="HeaderRightSearchInput" id="HeaderRightSearchLabel"
            onClick={(e) => { setSearchClicked(true); }}>
            <svg className="svg-icon" viewBox="0 0 1024 1024" width="20" height="20" fill='#35394b' version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M1000.944149 889.443492 815.920946 704.484333C866.643818 631.794359 896.616424 543.605729 896.616424 448.308212c0-247.594221-200.713991-448.308212-448.308212-448.308212C200.713991 0 0 200.713991 0 448.308212c0 247.594221 200.713991 448.308212 448.308212 448.308212 95.297517 0 183.486147-29.972606 256.176121-80.695478l184.959159 184.959159c30.805179 30.805179 80.695478 30.805179 111.500657 0C1031.685284 970.138971 1031.685284 920.248671 1000.944149 889.443492zM448.308212 768.528363c-176.825568 0-320.220151-143.394584-320.220151-320.220151 0-176.825568 143.394584-320.220151 320.220151-320.220151s320.220151 143.394584 320.220151 320.220151C768.528363 625.133779 625.133779 768.528363 448.308212 768.528363z" />
            </svg>
          </label>
          {searchClicked && (
            <>
              <div className="MobileSearchCover"></div>
              <div className="MobileSearch">
                <button id='MobileSearchCloseBtn' onClick={() => { setSearchClicked(false) }}>
                  <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" height={28} width={28}
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                  </svg>
                </button>
                <div className="MobileSearchMain" onClick={(e) => e.stopPropagation()}>
                  <input type="text" placeholder="Search" autoComplete='off' value={searchQuery} onChange={handleChange} />
                  <button type='Submit'>SEARCH</button>
                </div>
              </div>
            </>
          )}
          {searchClicked && (
            <ul>
              {recentSearches.map((search, i) => (
                <li key={i} onClick={() => { searchTerm(search); setSearchQuery(search); setSearchClicked(false); }}>{search}</li>
              ))}
            </ul>
          )}
        </form>
        <Link to={'/Account'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill='#282c3f' viewBox="0 0 24 24">
            <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
          </svg>
        </Link>
        <button onClick={getCart}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#282c3f' viewBox="0 0 24 24">
            <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export const  Cart = () => {

  const { cart, removeItem, setIncreament, setDecreament } = useCartContext();

  const closeCart = () => {
    const Cart = document.querySelector('.Cart');
    const cartCover = document.querySelector('.cartCover');
    Cart.style.right = '-500px';
    cartCover.style.opacity = '0';
    cartCover.style.pointerEvents = 'none';
  }

  let sum = 0;
  if (cart) {
    for (let i = 0; i < cart.length; i++) {
      let result = cart[i].MainProduct.price * cart[i].amount
      sum += result
    }
  }

  return (
    <>
      <div className='Cart'>
        <div className="CartHead">
          <div className="LeftCartHead">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#282c3f' viewBox="0 0 24 24">
              <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
            </svg>
            <p>
              {cart ? (cart.length === 0 ? "" : cart.length) : ''} Cart
            </p>
          </div>
          <button className="RightCartHead" onClick={closeCart}>
            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width="24" height="24" fill='#282c3f'
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>
          </button>
        </div>
        {cart ? (cart.length === 0 ? (
          <div className="EmptyCart">
            <p>Your cart is empty</p>
            <Link to={'/collection'} className='ViewAllBtn' onClick={closeCart}>START SHOPING</Link>
          </div>
        ) : (<div className="mainContentCart">
          <div className="mainContentCartItems">
            {cart.map((product, index) => {
              return (<div className="productCartItem" key={index}>
                <div className="productCartItemImg">
                  <img width={92} src={product.MainProduct.images[0]} />
                </div>
                <div className="productCartItemMetaInfo">
                  <div className="productCartItemMetaInfoLeft">
                    <p>{product.MainProduct.name}</p>
                    <div className="productCartItemMetaInfoQuantity">
                      <div>
                        <button onClick={() => { setDecreament(product.MainProduct.productId) }}>-</button>
                        <span>{product.amount}</span>
                        <button onClick={() => { setIncreament(product.MainProduct.productId) }}>+</button>
                      </div>
                      <a href="" onClick={(e) => { e.preventDefault(); removeItem(product.MainProduct.productId); cart.length === 1 && closeCart() }}>Remove</a>
                    </div>
                  </div>
                  <div className="productCartItemMetaInfoRight">
                    <p>₹ {product.MainProduct.price}.00</p>
                    <strike>₹ {product.MainProduct.OriginalPrice}.00</strike>
                  </div>
                </div>
              </div>)
            })}
          </div>
          <div className="BuyFromCart">
            <p>Shipping & taxes calculated at checkout</p>
            <Link to={'/PlaceOrder/ContactInformation'} onClick={closeCart} className='ViewAllBtn'>BUY NOW • ₹ {sum}.00</Link>
          </div>
        </div>)) : ''}
      </div>
      <div className="cartCover"></div>
    </>
  )
}