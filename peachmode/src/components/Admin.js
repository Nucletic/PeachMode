import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Admin = () => {

  let navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const auth = async () => {
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
      if (response.status === 401) {
        alert(response.error)
      } else if (response.status === 404) {
        alert(response.error)
      } else if (response.status === 200) {
        setLogin(true)
      }
    } catch (err) {
      navigate('/admin/login')
    }
  }

  useEffect(() => {
    auth();
  }, [])

  const [TabNum, setTabNum] = useState(2)

  return (
    <div className='Admin'>
      <div className='AdminMain'>
        <div className="AdminLeftPanel">
          <div className="AdminLogo">
            <img src="https://cdn.shopify.com/s/files/1/0637/4834/1981/files/280x80_d20e9ddd-ae15-43c9-9dc7-142b6b7c30e1_390x.png?v=1676437272" />
          </div>
          <div className="AdminLeftPanelLinks">
            <Link className={TabNum === 1 ? 'activeAdminTab' : ''} onClick={() => { setTabNum(1) }}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <path d="M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z" />
              </svg>
              Orders
            </Link>
            <Link className={TabNum === 2 ? 'activeAdminTab' : ''} onClick={() => { setTabNum(2) }}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M2.978 8.358l-2.978-2.618 8.707-4.74 3.341 2.345 3.21-2.345 8.742 4.639-3.014 2.68.014.008 3 4.115-3 1.634v4.122l-9 4.802-9-4.802v-4.115l1 .544v2.971l7.501 4.002v-7.889l-2.501 3.634-9-4.893 2.978-4.094zm9.523 5.366v7.875l7.499-4.001v-2.977l-5 2.724-2.499-3.621zm-11.022-1.606l7.208 3.918 1.847-2.684-7.231-3.742-1.824 2.508zm11.989 1.247l1.844 2.671 7.208-3.927-1.822-2.498-7.23 3.754zm-9.477-4.525l8.01-4.43 7.999 4.437-7.971 4.153-8.038-4.16zm-2.256-2.906l2.106 1.851 7.16-3.953-2.361-1.657-6.905 3.759zm11.273-2.052l7.076 3.901 2.176-1.935-6.918-3.671-2.334 1.705z" />
              </svg>
              Add Products
            </Link>
            <Link className={TabNum === 3 ? 'activeAdminTab' : ''} onClick={() => { setTabNum(3) }}>
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z" fillRule="nonzero" />
              </svg>
              Edit Content
            </Link>
            <Link className={TabNum === 4 ? 'activeAdminTab' : ''} onClick={() => { setTabNum(4) }}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <path d="M22.587 14.624l-9.584-9.624h-4.928c.106.357.167.701.173 1.025.985.123 1.752.956 1.752 1.975 0 1.104-.896 2-2 2s-2-.896-2-2c0-.843.524-1.561 1.262-1.855.01-.337-.067-.731-.227-1.145h-2.035v8.005l9.623 9.582 7.964-7.963zm-14.489-7.604c-.088.215-.207.408-.362.568-.231.239-.472.394-.719.495.045.511.461.917.983.917.552 0 1-.448 1-1 0-.517-.399-.929-.902-.98zm15.902 7.605l-9.375 9.375-10.625-10.579v-5.914c-1.123-.512-2.394-1.091-4-1.091v-1c1.611 0 2.92.511 4 .994v-2.41h2.492c-1.054-1.53-3.181-3-6.492-3v-1c4.093 0 6.603 2.055 7.661 4h5.757l10.582 10.625zm-6.997 1.731l.521.521-.698.697-.54-.538c-.525.396-1.068.597-1.612.597-.652 0-1.272-.295-1.734-.753l.738-.739c.303.27.631.462 1.049.462.443 0 .896-.228 1.347-.679.361-.359.569-.736.621-1.122.102-.76-.489-1.258-1.078-1.258-.392 0-.875.184-1.475.563-1.225.773-2.402 1.243-3.413.232-.918-.917-.645-2.112-.076-2.938l-.653-.652.698-.699.626.627c.538-.45 1.097-.677 1.663-.677.665 0 1.286.316 1.761.792l-.744.744c-.731-.742-1.624-.545-2.276.106-.322.323-.52.675-.572 1.02-.122.81.6 1.218.961 1.218.338 0 .774-.174 1.456-.584.944-.563 1.593-.804 2.171-.804.513 0 .963.202 1.378.617 1.038 1.038.624 2.351-.119 3.247z" />
              </svg>
              Gift Cards
            </Link>
          </div>
        </div>
        <div className="AdminRightPanel">
          {TabNum === 1 ? (<AdminOrders />) : ''}
          {TabNum === 2 ? (<AdminAddProducts />) : ''}
          {TabNum === 3 ? (<AdminEditContent />) : ''}
          {TabNum === 4 ? (<AddGiftCard />) : ''}
        </div>
      </div>
    </div>
  )
}

// JSX to the show the Orders that we get from the website
const AdminOrders = () => {

  const OpenOrder = (Num) => {
    const UpperCustomerOrderMain = document.querySelectorAll('.UpperCustomerOrderMain');
    const CustomerOrderMainFull = document.querySelectorAll('.CustomerOrderMainFull');
    if (CustomerOrderMainFull[Num].style.height >= '300px') {
      CustomerOrderMainFull[Num].style.height = '0';
      CustomerOrderMainFull[Num].style.padding = '0';
      CustomerOrderMainFull[Num].style.border = 'none';
      UpperCustomerOrderMain[Num].style.border = 'none';
      UpperCustomerOrderMain[Num].style.borderRadius = '5px';
    } else {
      CustomerOrderMainFull[Num].style.height = '300px';
      CustomerOrderMainFull[Num].style.padding = '15px 15px 0 15px';
      CustomerOrderMainFull[Num].style.border = '1px solid #d1d1d1';
      UpperCustomerOrderMain[Num].style.border = '1px solid #d1d1d1';
      UpperCustomerOrderMain[Num].style.borderRadius = '5px 5px 0 0';
    }
  }

  const [orders, setOrders] = useState();
  const showOrders = async () => {
    const res = await fetch('http://localhost:5000/getOrders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    const data = await res.json();
    setOrders(data);
  }

  useEffect(() => {
    showOrders()
  }, [])

  useEffect(() => {
    document.title = 'PeachMode - Control Panel - Orders'; // Replace 'New Page Title' with your desired title
  }, []);

  const [selectedOrders, setSelectedOrders] = useState([]);
  const handleClick = (e) => {
    if (e.target.checked) {
      setSelectedOrders([...selectedOrders, e.target.value]);
    } else {
      selectedOrders.splice(selectedOrders.indexOf(e.target.value), 1);
    }
  }

  const unCheckBoxes = () => {
    const checkBoxes = document.getElementsByName('CustomerOrderDetailsInput');
    for (var i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].checked = false;
    }
  }


  const PostDelivered = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/setDelivered', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(selectedOrders)
      }).then((response) => { return response.json() })
        .then((data) => {
          if (data) {
            selectedOrders.length = 0;
            unCheckBoxes()
            showOrders()
          }
        })
    } catch (error) {
      alert(error.message)
    }
  }

  const [ordersSorted, setOrdersSorted] = useState(false);
  const sortOrders = () => {
    if (ordersSorted === false) {
      const sortedOrders = [...orders.allOrders]; // Create a copy of the orders array
      sortedOrders.sort((a, b) => {
        if (a.delivered && !b.delivered) {
          return 1; // a should come after b
        } else if (!a.delivered && b.delivered) {
          return -1; // a should come before b
        }
        return 0; // a and b are either both delivered or both not delivered
      });
      setOrders({ ...orders, allOrders: sortedOrders }); // Update the state with the sorted orders
      setOrdersSorted(true)
    } else {
      showOrders()
      setOrdersSorted(false)
    }
  };

  const totalOrders = (products) => {
    let totalOrderAmount = 0;
    for (let i = 0; i < products.length; i++) {
      totalOrderAmount += products[i].amount;
    }
    return totalOrderAmount;
  }

  return (
    <form className="AdminOrders" onSubmit={PostDelivered}>
      <div className="AdminOrdersTitle">
        <div className="AdminOrdersTitleLeft">
          <h1>Orders</h1>
          {orders && (
            <p>{orders.allOrders.length}, <span>Total Orders</span></p>
          )}
          <button type='button' onClick={sortOrders}>
            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.344 17.778c0-.414-.336-.75-.75-.75h-5.16c-.414 0-.75.336-.75.75s.336.75.75.75h5.16c.414 0 .75-.336.75-.75zm2.206-4c0-.414-.336-.75-.75-.75h-9.596c-.414 0-.75.336-.75.75s.336.75.75.75h9.596c.414 0 .75-.336.75-.75zm2.45-4c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75zm2-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fillRule="nonzero" /></svg>
            Sort Orders
          </button>
        </div>
        <div className="AdminOrdersTitleRight">
          <h1>94</h1>
          <span>delivered</span>
          <button type='submit'>
            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m17.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-5.979 5c.043.522.153 1.025.321 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm3.704-.024 1.442 1.285c.095.085.215.127.333.127.136 0 .271-.055.37-.162l2.441-2.669c.088-.096.131-.217.131-.336 0-.274-.221-.499-.5-.499-.136 0-.271.055-.37.162l-2.108 2.304-1.073-.956c-.096-.085-.214-.127-.333-.127-.277 0-.5.224-.5.499 0 .137.056.273.167.372zm-2.598-3.976c-.328.456-.594.96-.785 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm7.373-3.25c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" fillRule="nonzero" />
            </svg>
            Set as delivered
          </button>
        </div>
      </div>
      <div className="MainAdminOrders">
        <div className="MainAdminOrdersNaviBar">
          <p>Name</p>
          <p>Email</p>
          <p>Orders</p>
          <p>Status</p>
          <p>Date</p>
        </div>
        <div className="CustomerOrder">
          {orders ? (orders.allOrders.map((order, i) => {
            return (
              <div className="CustomerOrderMain" key={i}>
                <div className="UpperCustomerOrderMain" onClick={() => { OpenOrder(i) }}>
                  <div className="CustomerOrderDetails">
                    <input type="checkbox" name="CustomerOrderDetailsInput" value={order._id} onChange={handleClick} />
                    <p>{order.firstname + ' ' + order.lastname}</p>
                  </div>
                  <div className="CustomerOrderDetails">
                    <p>{order.email}</p>
                  </div>
                  <div className="CustomerOrderDetails">
                    <p>{totalOrders(order.products)}</p>
                  </div>
                  <div className="CustomerOrderDetails">
                    {order.delivered === true ?
                      (<p style={{ background: '#d2f3d4', color: '#479c4b' }}>DELIVERED</p>)
                      : (<p>PENDING</p>)}
                  </div>
                  <div className="CustomerOrderDetails">
                    <p>{new Date(order.orderPlaced).toLocaleString('en-US', { month: 'short', day: 'numeric' })}</p>
                  </div>
                </div>
                <div className="CustomerOrderMainFull">
                  <div className="CustomerOrderMainFullUserData">
                    <h1>User Data</h1>
                    <p><b>Name:</b> priyanshu Kuntal</p>
                    <p><b>Email:</b> KuntalPriyanshu608@gmail.com</p>
                  </div>
                  <div className="CustomerOrderMainFullUserData">
                    <h1>Order Detail</h1>
                    <p><b>Name:</b> {order.firstname + ' ' + order.lastname}</p>
                    <p><b>Phone:</b> {order.phone}</p>
                    <p><b>Email:</b> {order.email}</p>
                    <p><b>City:</b> {order.city}</p>
                    <p><b>Zipcode:</b> {order.zipcode}</p>
                    <p><b>State:</b> {order.state}</p>
                    <p><b>Total Price:</b> {order.totalPrice}</p>
                    <p><b>Payment Method:</b> {order.paymentMethod}</p>
                    <p><b>Address:</b> {order.address[0]}</p>
                  </div>
                  <div className="CustomerOrderMainFullUserData">
                    <h1>User Orders</h1>
                    {order.products.map((product, i) => {
                      return (<details className='CustomerOrderDetailsMainCard' key={i}>
                        <summary>Order {i + 1}</summary>
                        <p><b>Name:</b> {product.MainProduct.name}</p>
                        <p><b>size:</b> {product.size}</p>
                        <p><b>price:</b> ₹ {product.MainProduct.price}.00</p>
                        <p><b>Original Price:</b> {product.MainProduct.OriginalPrice}</p>
                        <p><b>Color:</b> {product.MainProduct.specifications.Color}</p>
                        <p><b>ProductId:</b> {product.MainProduct.productId}</p>
                        <p><b>Category:</b> {product.MainProduct.category}</p>
                        <p><b>product Amount:</b> {product.amount}</p>
                        <p><b>Supplier SKU:</b> {product.MainProduct.specifications.SupplierSKU}</p>
                      </details>)
                    })}
                  </div>
                </div>
              </div>)
          })) : ''}
        </div>
      </div>
    </form>
  )
}
// JSX to the Form to Add new or Edit existing Products
const AdminAddProducts = () => {

  const OpenOrder = (Num) => {
    const UpperAddedProductMain = document.querySelectorAll('.UpperAddedProductMain');
    const AddAdminOrderMainFull = document.querySelectorAll('.AddAdminOrderMainFull');
    if (AddAdminOrderMainFull[Num].style.height >= 'auto') {
      AddAdminOrderMainFull[Num].style.height = '0';
      AddAdminOrderMainFull[Num].style.padding = '0';
      AddAdminOrderMainFull[Num].style.border = 'none';
      UpperAddedProductMain[Num].style.border = 'none';
      UpperAddedProductMain[Num].style.borderRadius = '5px';
    } else {
      AddAdminOrderMainFull[Num].style.height = 'auto';
      AddAdminOrderMainFull[Num].style.padding = '15px 15px 0 15px';
      AddAdminOrderMainFull[Num].style.border = '1px solid #d1d1d1';
      UpperAddedProductMain[Num].style.border = '1px solid #d1d1d1';
      UpperAddedProductMain[Num].style.borderRadius = '5px 5px 0 0';
    }
  }

  const [selectedProducts, setSelectedProducts] = useState([]);
  let name, value;
  const handleClick = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (e.target.checked) {
      setSelectedProducts([...selectedProducts, value]);
    } else {
      selectedProducts.splice(selectedProducts.indexOf(e.target.value), 1);
    }
  }

  const [editAddress, setEditAddress] = useState(false);
  const closeForm = (data) => {
    setEditAddress(data);
  }

  const unCheckBoxes = () => {
    const checkBoxes = document.getElementsByName('AdminAddedProductDetailsInput');
    for (var i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].checked = false;
    }
  }


  const [Products, setProducts] = useState();
  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:5000/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      const data = await res.json();
      setProducts(data);
    } catch (error) { }
  }

  const [addOrDelete, setAddOrDelete] = useState('DELETE');
  const deleteProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/deleteProduct', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ selectedProducts })
      }).then((response) => { return response.json() })
        .then((data) => {
          if (data) {
            selectedProducts.length = 0;
            unCheckBoxes();
            fetchProducts();
          }
        })
    } catch (error) { }
  }


  const SoldOutProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/setSoldOut', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ selectedProducts })
      }).then((response) => { return response.json() })
        .then((data) => {
          if (data) {
            selectedProducts.length = 0;
            unCheckBoxes();
            fetchProducts();
          }
        })
    } catch (error) {
      alert('There is an error Updating the product please try again in a moment')
    }
  }


  useEffect(() => {
    fetchProducts();
  }, [deleteProduct]);

  useEffect(() => {
    document.title = 'PeachMode - Control Panel - Products'; // Replace 'New Page Title' with your desired title
  }, []);

  return (
    <form onSubmit={addOrDelete === 'DELETE' ? deleteProduct : (addOrDelete === 'SOLDOUT' ? SoldOutProduct : undefined)} className='AdminOrders'>
      {Products && (<>
        <div className="AdminOrdersTitle">
          <div className="AdminOrdersTitleLeft">
            <h1>Add Products</h1>
            <p><span>Total </span> {Products.allProducts.length} <span>Products</span></p>
          </div>
          <div className="AdminOrdersTitleRight" style={{ flexDirection: 'row', gap: '15px' }}>
            <button type='submit' style={{ marginTop: '40px' }} onClick={() => { setAddOrDelete('SOLDOUT') }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3.875l-6 1.221 1.716 1.708-5.351 5.358-3.001-3.002-7.336 7.242 1.41 1.418 5.922-5.834 2.991 2.993 6.781-6.762 1.667 1.66 1.201-6.002zm0 17.125v2h-24v-22h2v20h22z" /></svg>
              Set as Available
            </button>
            <button type='submit' style={{ marginTop: '40px' }} onClick={() => { setAddOrDelete('DELETE') }}>
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" /></svg>
              Delete Product
            </button>
            <button type='button' style={{ marginTop: '40px' }} onClick={() => { setAddOrDelete('ADD'); setEditAddress(true); }}>
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m17.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-5.979 5c.043.522.153 1.025.321 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm3.704-.024 1.442 1.285c.095.085.215.127.333.127.136 0 .271-.055.37-.162l2.441-2.669c.088-.096.131-.217.131-.336 0-.274-.221-.499-.5-.499-.136 0-.271.055-.37.162l-2.108 2.304-1.073-.956c-.096-.085-.214-.127-.333-.127-.277 0-.5.224-.5.499 0 .137.056.273.167.372zm-2.598-3.976c-.328.456-.594.96-.785 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm7.373-3.25c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" fillRule="nonzero" />
              </svg>
              Add Product
            </button>
          </div>
        </div>
        <div className="AdminAddProductsMain">
          <div className="AdminAddProductsMainNavi">
            <p>ProductId</p>
            <p>Name</p>
            <p>Price</p>
            <p>Original Price</p>
            <p>Color</p>
          </div>
          <div className="AdminAddedProductMain">
            {Products.allProducts.map((product, i) => {
              return (
                <div className="AdminAddedProduct" key={i}>
                  <div className="UpperAddedProductMain" onClick={() => { OpenOrder(i) }}>
                    <div className="AdminAddedProductDetails">
                      <input type="checkbox" name="AdminAddedProductDetailsInput" value={product.productId} onChange={handleClick} />
                      <p>{product.productId}</p>
                    </div>
                    <div className="AdminAddedProductDetails">
                      <p>{product.name}</p>
                    </div>
                    <div className="AdminAddedProductDetails">
                      <p>₹ {product.price}.00</p>
                    </div>
                    <div className="AdminAddedProductDetails">
                      <p>₹ {product.OriginalPrice}.00</p>
                    </div>
                    <div className="AdminAddedProductDetails">
                      <p>{product.specifications.Color}</p>
                    </div>
                  </div>
                  <div className="AddAdminOrderMainFull">
                    <div className="AddAdminOrderMainFullOrderData">
                      <h1>Order Detail</h1>
                      <p><b>ID:</b> {product.productId}</p>
                      <p><b>Name:</b> {product.name}</p>
                      <p><b>Price:</b> {product.price}</p>
                      <p><b>OriginalPrice:</b> {product.OriginalPrice}</p>
                      <p><b>Size:</b> {product.specifications.Size.toString()}</p>
                      <p><b>Color:</b> {product.specifications.Color}</p>
                      <p><b>Material:</b> {product.specifications.Material}</p>
                      <p><b>Work:</b> {product.specifications.Work}</p>
                      <p><b>Supplier:</b> {product.specifications.Supplier}</p>
                      <p><b>Occasion:</b> {product.specifications.Occasion}</p>
                      <p><b>Print / Pattern:</b> {product.specifications.PrintPattern}</p>
                      <button type='button' onClick={() => { setEditAddress(true); setAddOrDelete(parseInt(product.productId - 1)); }}>EDIT PRODUCT</button>
                    </div>
                  </div>
                </div>)
            })}
          </div>
        </div>
      </>)}
      {
        editAddress && (
          <AdminProductEdit closeEditForm={closeForm} Products={Products.allProducts} addOrEdit={addOrDelete} />
        )
      }
    </form>
  )
}

// JSX to Add new Gift Cards
const AddGiftCard = () => {

  const [giftContent, setGiftContent] = useState();
  const fetchGiftCard = async () => {
    try {
      const res = await fetch('http://localhost:5000/getGiftCards', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      const data = await res.json();
      setGiftContent(data.giftCard[0]);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    document.title = 'PeachMode - Control Panel - Gift Cards'; // Replace 'New Page Title' with your desired title
  }, []);

  const [GiftCards, setGiftCards] = useState([]);

  const HandleGiftCard = (e, i, command) => {
    const inputVal = [...GiftCards]; // Create a copy of the state array
    if (command === 'key') {
      const newKey = e.target.value;
      const currentValue = inputVal[i][Object.keys(inputVal[i])[0]]; // Get the current value
      delete inputVal[i][Object.keys(inputVal[i])[0]]; // Remove the current key-value pair
      inputVal[i][newKey] = currentValue || ''; // Update with the new key and restore the value
    } else if (command === 'value') {
      const currentKey = Object.keys(inputVal[i])[0]; // Get the existing key
      inputVal[i][currentKey] = e.target.value; // Update the value for the existing key
    }
    setGiftCards(inputVal); // Update the state with the new array
  };

  useEffect(() => {
    fetchGiftCard();
  }, [])

  useEffect(() => {
    if (giftContent !== undefined) {
      setGiftCards(giftContent.GiftCard);
    }
  }, [giftContent]);


  const postEditedCards = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/newGiftCards', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ _id: giftContent._id, giftCard: GiftCards })
      }).then((response) => { return response.json() })
        .then((data) => {
          alert('changes Saved');
          fetchGiftCard();
        })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className='AdminOrders'>
      <div className="AdminOrdersTitle">
        <div className="AdminOrdersTitleLeft">
          <h1>Gift Cards</h1>
        </div>
      </div>
      <form onSubmit={postEditedCards} className="AdminEditContent" style={{ overflow: 'scroll', height: '86vh' }}>
        <h3>Edit Gift Cards</h3>
        <div className="barTextEditInput">
          {GiftCards.map((card, i) => {
            const key = Object.keys(card)[0]; // Retrieve the key from the object
            const value = card[key] || ''; // Retrieve the value or use an empty string if undefined
            return (
              <div className='AdminEditContentInputs' key={i}>
                <input type='text' value={key} placeholder='COUPON50'
                  onChange={(e) => HandleGiftCard(e, i, 'key')} />
                <input type='number' value={value} placeholder='Gift Card Value'
                  onChange={(e) => HandleGiftCard(e, i, 'value')} />
              </div>
            );
          })}
          <button type='button' className='ColorVariantAddInputBtn' style={{ margin: '15px 0 30px 0' }}
            onClick={() => setGiftCards([...GiftCards, {}])}>
            <p>Add New Gift Card</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
            </svg>
          </button>
        </div>
        <div className="LoginBtn">
          <button type="submit" style={{ width: '200px' }}>SAVE CHANGES</button>
        </div>
      </form>
    </div>
  )
}

// JSX to Edit the slider Images and the Announcement bar
const AdminEditContent = () => {

  const [Content, setContent] = useState();
  const fetchContent = async () => {
    try {
      const res = await fetch('http://localhost:5000/getContent', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      const data = await res.json();
      setContent(data.allContent[0]);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    document.title = 'PeachMode - Control Panel - Edit Content'; // Replace 'New Page Title' with your desired title
  }, []);

  const [announcementBarTexts, setAnnouncementBarTexts] = useState([]);
  const handleBarTexts = (e, i) => {
    const inputVal = [...announcementBarTexts]
    inputVal[i] = e.target.value;
    setAnnouncementBarTexts(inputVal);
  }

  const [sliderImages, setSliderImages] = useState([]);
  const handleSliderImages = (e, i) => {
    const images = document.querySelectorAll('.productImages .LoginInputs img');
    const inputVal = [...sliderImages];
    try {
      if (e.target.files.length > 0) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = () => {
          inputVal[i] = fileReader.result;
          setSliderImages(inputVal);
        };
        images[i].src = URL.createObjectURL(e.target.files[0]);
      } else {
        inputVal[i] = '';
        setSliderImages(inputVal);
        images[i].src = '';
      }
    } catch (error) {
      inputVal[i] = '';
      images[i].src = '';
    }
  }

  const [mobileSliderImages, setMobileSliderImages] = useState([]);
  const handleMobileSliderImages = (e, i) => {
    const images = document.querySelectorAll('.mobileProductImages .LoginInputs img');
    const inputVal = [...mobileSliderImages];
    try {
      if (e.target.files.length > 0) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = () => {
          inputVal[i] = fileReader.result;
          setMobileSliderImages(inputVal);
        };
        images[i].src = URL.createObjectURL(e.target.files[0]);
      } else {
        inputVal[i] = '';
        setMobileSliderImages(inputVal);
        images[i].src = '';
      }
    } catch (error) {
      inputVal[i] = '';
      images[i].src = '';
    }
  }

  useEffect(() => {
    fetchContent();
  }, [])

  useEffect(() => {
    if (Content !== undefined) {
      setAnnouncementBarTexts(Content.BarText);
      setSliderImages(Content.SliderImages);
      setMobileSliderImages(Content.MobileSliderImages);
    }
  }, [Content]);


  const postEditedContent = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/saveContent', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ _id: Content._id, BarText: announcementBarTexts, SliderImages: sliderImages, MobileSliderImages: mobileSliderImages })
      }).then((response) => { return response.json() })
        .then((data) => {
          alert('changes Saved');
          fetchContent();
        })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className='AdminOrders'>
      <div className="AdminOrdersTitle">
        <div className="AdminOrdersTitleLeft">
          <h1>Edit Content</h1>
        </div>
      </div>
      {Content && (
        <form onSubmit={postEditedContent} className="AdminEditContent" style={{ overflow: 'scroll', height: '86vh' }}>
          <h3>Edit Announcement Bar text</h3>
          <div className="barTextEditInput">
            {announcementBarTexts.map((text, i) => {
              return (<div className='AdminEditContentInputs' key={i}>
                <input type='text' value={text} placeholder='7 days no questons asked return policy' onChange={(e) => { handleBarTexts(e, i) }} />
                {/* <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z" />
                  </svg>
                </button> */}
              </div>)
            })}
            <button type='button' className='ColorVariantAddInputBtn' style={{ margin: '15px 0 30px 0' }}
              onClick={() => { setAnnouncementBarTexts([...announcementBarTexts, []]) }}>
              <p>Add New Bar Text</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
              </svg>
            </button>
          </div>
          <h3>Add Slider Images</h3>
          <div className="productImages" style={{ marginTop: '20px' }}>
            {sliderImages.map((image, i) => {
              return (<div className='LoginInputs' key={i}>
                <img id="output" src={image} width="200" />
                <input type="file" accept="image/*" name="image" id="file" onChange={(e) => { handleSliderImages(e, i) }} style={{ cursor: 'pointer' }} />
              </div>)
            })}
            <button type='button' className='ColorVariantAddInputBtn' onClick={() => { setSliderImages([...sliderImages, []]) }}>
              <p>Add New Image</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
              </svg>
            </button>
          </div>
          <h3>Add Mobile Slider Images</h3>
          <div className="productImages mobileProductImages" style={{ marginTop: '20px' }}>
            {mobileSliderImages.map((image, i) => {
              return (<div className='LoginInputs' key={i}>
                <img id="output" src={image} width="200" />
                <input type="file" accept="image/*" name="image" id="file" onChange={(e) => { handleMobileSliderImages(e, i) }} style={{ cursor: 'pointer' }} />
              </div>)
            })}
            <button type='button' className='ColorVariantAddInputBtn' onClick={() => { setMobileSliderImages([...mobileSliderImages, []]) }}>
              <p>Add New Image</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
              </svg>
            </button>
          </div>
          <div className="LoginBtn">
            <button type="submit" style={{ width: '200px' }}>SAVE CHANGES</button>
          </div>
        </form>
      )}
    </div>
  )
}

// JSX to Add new or Edit an existing Product
const AdminProductEdit = (props) => {
  const [closeAddress, setCloseAddress] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    document.title = 'PeachMode - Control Panel - Add or Edit Product'; // Replace 'New Page Title' with your desired title
  }, []);


  const [sizeAvailable, setSizeAvailable] = useState(props.addOrEdit === 'ADD' ? []
    : (Number.isInteger(props.addOrEdit) ? props.Products[props.addOrEdit].specifications.Size : ''));
  const handleSize = (e) => {
    let newSizeAvailable = [...sizeAvailable];
    if (!newSizeAvailable.includes(e.target.value)) {
      newSizeAvailable.push(e.target.value);
    } else {
      newSizeAvailable.splice(newSizeAvailable.indexOf(e.target.value), 1);
    }
    setSizeAvailable(newSizeAvailable);
  }

  const [colorVariantInputs, setColorVariantInputs] = useState(props.addOrEdit === 'ADD' ? []
    : (Number.isInteger(props.addOrEdit) ? props.Products[props.addOrEdit].specifications.ColorVariant : ''));
  const handleColor = (e, i) => {
    const inputVal = [...colorVariantInputs]
    inputVal[i] = e.target.value;
    setColorVariantInputs(inputVal);
  }

  const [productImages, setProductImages] = useState(props.addOrEdit === 'ADD' ? []
    : (Number.isInteger(props.addOrEdit) ? props.Products[props.addOrEdit].images : ''));
  const handleImage = (e, i) => {
    const images = document.querySelectorAll('.productImages .LoginInputs img');
    try {
      const inputVal = [...productImages]
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = () => {
        inputVal[i] = fileReader.result;
        setProductImages(inputVal);
      };
      try {
        images[i].src = URL.createObjectURL(e.target.files[0]);
      } catch (error) {
        images[i].src = '';
      }
    } catch (error) {
      images[i].src = '';
    }
  }

  let toCompare;
  const handleInput = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };


  const [colorImages, setColorImages] = useState();
  const handleColorImage = (e, i) => {
    const images = document.querySelectorAll('.ColorVariantImages img');
    try {
      const inputVal = [...productImages]
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = () => {
        inputVal[i] = fileReader.result;
        setColorImages(inputVal);
      };
      try {
        images[i].src = URL.createObjectURL(e.target.files[0]);
      } catch (error) {
        images[i].src = '';
      }
    } catch (error) {
      images[i].src = '';
    }
  }

  const [newProduct, setNewProduct] = useState(props.addOrEdit === 'ADD' ? {
    productId: props.Products.length + 1, name: '', category: '', price: '', OriginalPrice: '', description: '',
    Mesurements: '', Material: '', Color: '', Work: '', StitchType: '', Occasion: '', printPattern: '', SupplierSKU: '',
    supplier: '', CountryOfOrigin: '', CareGuide: '', SoldOut: document.querySelector('input[name=SoldOut]').value,
  } : (Number.isInteger(props.addOrEdit) ? {
    productId: props.addOrEdit + 1, name: props.Products[props.addOrEdit].name,
    category: props.Products[props.addOrEdit].category,
    price: props.Products[props.addOrEdit].price,
    OriginalPrice: props.Products[props.addOrEdit].OriginalPrice,
    description: props.Products[props.addOrEdit].description,
    Mesurements: props.Products[props.addOrEdit].specifications.Mesurement,
    Material: props.Products[props.addOrEdit].specifications.Material,
    Color: props.Products[props.addOrEdit].specifications.Color,
    Work: props.Products[props.addOrEdit].specifications.Work,
    StitchType: props.Products[props.addOrEdit].specifications.StitchType,
    Occasion: props.Products[props.addOrEdit].specifications.Occasion,
    printPattern: props.Products[props.addOrEdit].specifications.PrintPattern,
    SupplierSKU: props.Products[props.addOrEdit].specifications.SupplierSKU,
    supplier: props.Products[props.addOrEdit].specifications.Supplier,
    CountryOfOrigin: props.Products[props.addOrEdit].specifications.CountryOfOrigin,
    CareGuide: props.Products[props.addOrEdit].specifications.CareGuide,
    CareGuide: props.Products[props.addOrEdit].SoldOut,
  } : ''));

  // Code to Add a New Product
  const sendAddProducts = async () => {
    try {
      const SubmitBtn = document.querySelector('.AdminProductEdit .LoginBtn button');
      const res = await fetch('http://localhost:5000/addProduct', {
        method: 'POST',
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "productId": newProduct.productId, "name": newProduct.name, "category": newProduct.category, "price": parseInt(newProduct.price),
          "OriginalPrice": parseInt(newProduct.OriginalPrice), "Images": productImages, "description": newProduct.description,
          "Mesurements": newProduct.Mesurements, "Material": newProduct.Material, "Color": newProduct.Color, "ColorVariant": colorVariantInputs,
          "ColorVariantImages": colorImages, "Size": sizeAvailable, "Work": newProduct.Work, "StitchType": newProduct.StitchType,
          "Occasion": newProduct.Occasion, "printPattern": newProduct.printPattern, "SupplierSKU": newProduct.SupplierSKU,
          "supplier": newProduct.supplier, "CountryOfOrigin": newProduct.CountryOfOrigin, "CareGuide": newProduct.CareGuide,
          "SoldOut": newProduct.SoldOut
        })
      }).then((response) => { return response.json() })
        .then((data) => {
          setClickedSubmit(false);
          SubmitBtn.innerText = 'SAVE CHANGES';
          props.closeEditForm(closeAddress);
        })
    } catch (error) { }
  }

  // code to Edit a Existing product
  const editTheProduct = async () => {
    try {
      const SubmitBtn = document.querySelector('.AdminProductEdit .LoginBtn button');
      const response = await fetch('http://localhost:5000/editProduct', {
        method: 'PUT',
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "productId": newProduct.productId, "name": newProduct.name, "category": newProduct.category, "price": parseInt(newProduct.price),
          "OriginalPrice": parseInt(newProduct.OriginalPrice), "Images": productImages, "description": newProduct.description,
          "Mesurements": newProduct.Mesurements, "Material": newProduct.Material, "Color": newProduct.Color, "ColorVariant": colorVariantInputs,
          "ColorVariantImages": colorImages, "Size": sizeAvailable, "Work": newProduct.Work, "StitchType": newProduct.StitchType,
          "Occasion": newProduct.Occasion, "printPattern": newProduct.printPattern, "SupplierSKU": newProduct.SupplierSKU,
          "supplier": newProduct.supplier, "CountryOfOrigin": newProduct.CountryOfOrigin, "CareGuide": newProduct.CareGuide,
          "SoldOut": newProduct.SoldOut
        })
      }).then((response) => { return response.json() })
        .then((data) => {
          setClickedSubmit(false);
          SubmitBtn.innerText = 'SAVE CHANGES';
          props.closeEditForm(closeAddress);
        })
    } catch (error) { }
  }


  const [clickedSubmit, setClickedSubmit] = useState(false);
  useEffect(() => {
    const AdminProductEdit = document.querySelector('.AdminProductEdit');
    AdminProductEdit.addEventListener('submit', (e) => {
      e.preventDefault();
      if (props.addOrEdit === 'ADD') {
        setClickedSubmit(true);
      } else if (Number.isInteger(props.addOrEdit)) {
        setClickedSubmit(true);
      }
    })
  }, [])

  toCompare = newProduct;
  useEffect((e) => {
    const isEmpty = Object.values(newProduct).every(value => {
      if (value.length === 0) return true;
      return false;
    });
    if (isEmpty === false) {
      if (JSON.stringify(toCompare) === JSON.stringify(newProduct)) {
        if (clickedSubmit === true && props.addOrEdit === 'ADD') {
          sendAddProducts();
        }
        if (clickedSubmit === true && Number.isInteger(props.addOrEdit) === true) {
          editTheProduct(e);
        }
      }
    }
  }, [newProduct, clickedSubmit])

  useEffect(() => {
    const SubmitBtn = document.querySelector('.AdminProductEdit .LoginBtn button');
    if (clickedSubmit === true) {
      SubmitBtn.innerText = 'PLEASE WAIT';
    }
  }, [clickedSubmit])

  return (
    <div className="AdminProductEditOverLay">
      <form className='AdminProductEdit'>
        <div className="AdminProductEditTitle">
          <h1>Edit Product</h1>
          <button onClick={() => { props.closeEditForm(closeAddress); }}>
            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>
          </button>
        </div>
        <div className='LoginInputs'>
          <input type='text' name='name' required value={newProduct.name} onChange={handleInput} />
          <span className="LoginInputSpan">Product Name</span>
        </div>
        <div className='LoginInputs'>
          <input type='number' name='price' required value={newProduct.price} onChange={handleInput} />
          <span className="LoginInputSpan">Price</span>
        </div>
        <div className='LoginInputs'>
          <input type='number' name='OriginalPrice' required value={newProduct.OriginalPrice} onChange={handleInput} />
          <span className="LoginInputSpan">Original Price</span>
        </div>
        {colorVariantInputs.map((variant, i) => {
          return (
            <>
              <div className='LoginInputs' key={i}>
                <input type='text' value={variant} onChange={(e) => { handleColor(e, i) }} />
                <span className="LoginInputSpan">URL to a Color Variant</span>
              </div>
              <div className="productImages" style={{ marginTop: '20px' }}>
                <div className='LoginInputs ColorVariantImages'>
                  <img id="output" width="200" />
                  {Number.isInteger(props.addOrEdit) ?
                    (<input type="file" accept="image/*" name="image" id="file"
                      onChange={(e) => { handleColorImage(e, i) }} style={{ cursor: 'pointer' }} />)
                    : (<input type="file" accept="image/*" name="image" id="file" required
                      onChange={(e) => { handleColorImage(e, i) }} style={{ cursor: 'pointer' }} />)}
                </div>
              </div>
            </>);
        })}
        <button type='button' className='ColorVariantAddInputBtn' onClick={() => { setColorVariantInputs([...colorVariantInputs, []]) }}>
          <p>Add Color Variant</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
          </svg>
        </button>
        <div className="ProductPageRightColorVariant" style={{ marginTop: '20px' }}>
          <div className="ProductPageRightColorVariantTitle">
            <p><b>Size:</b></p>
          </div>
          <div className="ProductPageRightColorVariantMain">
            <button type='button' onClick={handleSize} className={sizeAvailable.includes('XS') ? 'activeSize' : ''} value={'XS'}>XS</button>
            <button type='button' onClick={handleSize} className={sizeAvailable.includes('S') ? 'activeSize' : ''} value={'S'}>S</button>
            <button type='button' onClick={handleSize} className={sizeAvailable.includes('M') ? 'activeSize' : ''} value={'M'}>M</button>
            <button type='button' onClick={handleSize} className={sizeAvailable.includes('L') ? 'activeSize' : ''} value={'L'}>L</button>
            <button type='button' onClick={handleSize} className={sizeAvailable.includes('XL') ? 'activeSize' : ''} value={'XL'}>XL</button>
            <button type='button' onClick={handleSize} className={sizeAvailable.includes('XXL') ? 'activeSize' : ''} value={'XXL'}>XXL</button>
          </div>
        </div>
        <div className="productImages" style={{ marginTop: '20px' }}>
          {productImages.map((image, i) => {
            return (<div className='LoginInputs' key={i}>
              <img id="output" src={image} width="200" />
              {Number.isInteger(props.addOrEdit) ?
                (<input type="file" accept="image/*" name="image" id="file"
                  onChange={(e) => { handleImage(e, i) }} style={{ cursor: 'pointer' }} />)
                : (<input type="file" accept="image/*" name="image" id="file" required
                  onChange={(e) => { handleImage(e, i) }} style={{ cursor: 'pointer' }} />)}
            </div>)
          })}
          <button type='button' className='ColorVariantAddInputBtn' onClick={() => { setProductImages([...productImages, []]) }}>
            <p>Add Product Image</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
            </svg>
          </button>
        </div>
        <div className='LoginInputs'>
          <input type='text' name='Mesurements' required value={newProduct.Mesurements} onChange={handleInput} />
          <span className="LoginInputSpan">Measurements</span>
        </div>
        <div className='LoginInputs'>
          <input type='text' name='Material' required value={newProduct.Material} onChange={handleInput} />
          <span className="LoginInputSpan">Material</span>
        </div>
        <div className='LoginInputs'>
          <input type='text' name='Color' required value={newProduct.Color} onChange={handleInput} />
          <span className="LoginInputSpan">Color</span>
        </div>
        <div className='LoginInputs'>
          <input type='text' name='Work' required value={newProduct.Work} onChange={handleInput} />
          <span className="LoginInputSpan">Work</span>
        </div>
        <div className='LoginInputs'>
          <input type='text' name='category' required value={newProduct.category} onChange={handleInput} />
          <span className="LoginInputSpan">Category</span>
        </div>
        <div className='LoginInputs'>
          <input type='text' name='StitchType' required value={newProduct.StitchType} onChange={handleInput} />
          <span className="LoginInputSpan">Stitch Type</span>
        </div>
        <div className='LoginInputs'>
          <input type='text' name='Occasion' required value={newProduct.Occasion} onChange={handleInput} />
          <span className="LoginInputSpan">Occasion</span>
        </div>
        <div className='LoginInputs'>
          <input type='text' name='printPattern' required value={newProduct.printPattern} onChange={handleInput} />
          <span className="LoginInputSpan">Print / Pattern</span>
        </div>
        <div className='LoginInputs'>
          <input type='text' name='SupplierSKU' required value={newProduct.SupplierSKU} onChange={handleInput} />
          <span className="LoginInputSpan">Supplier SKU</span>
        </div>
        <div className='LoginInputs'>
          <input type='text' name='supplier' required value={newProduct.supplier} onChange={handleInput} />
          <span className="LoginInputSpan">Supplier</span>
        </div>
        <div className='LoginInputs'>
          <input type='text' name='CountryOfOrigin' required value={newProduct.CountryOfOrigin} onChange={handleInput} />
          <span className="LoginInputSpan">Country of Origin</span>
        </div>
        <div className='LoginInputs'>
          <input type='text' name='CareGuide' required value={newProduct.CareGuide} onChange={handleInput} />
          <span className="LoginInputSpan">Care Guide</span>
        </div>
        <div className='LoginInputs' style={{ padding: '0', border: 'none', height: 'auto' }}>
          <textarea placeholder='Description' name='description' required value={newProduct.description} onChange={handleInput} />
        </div>
        <label className="ContactInformationFormAccountEmailTitleEmailNewsCheckbox" style={{ marginBottom: '15px' }}>
          <input type="checkbox" value={true} name='SoldOut' onChange={handleInput} />
          SoldOut
        </label>
        <div className="LoginBtn">
          <button type="submit" style={{ width: '200px' }}>SAVE CHANGES</button>
        </div>
      </form >
    </div>
  )
}