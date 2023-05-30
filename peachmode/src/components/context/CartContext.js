import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../reducer/CartReducer";

// creating Context using context API
const CartContext = createContext();


const getLocalCartData = () => {
  let localCartData = localStorage.getItem('CartItems');
  if (!localCartData) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
}

// Defining initial State for the useReducer
const initialState = {
  cart: getLocalCartData(),
  buyNowProduct: "",
  total_item: "",
  orderInfo: null // Add orderInfo to the initial state
}
const CartProvider = ({ children }) => {

  // Defining useReducer, dispatch, state  
  const [state, dispatch] = useReducer(reducer, initialState);

  // Add products to cart
  const addToCart = (MainProduct, amount, size) => {
    dispatch({ type: "ADD_TO_CART", payload: { MainProduct, amount, size } });
  };

  const BuyNow = (MainProduct, amount, size) => {
    dispatch({ type: "BUY_NOW", payload: { MainProduct, amount, size } });
  };

  // Add products to cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // Decreament Product Quantity
  const setDecreament = (id) => {
    dispatch({ type: "SET_DECREAMENT", payload: id })
  }

  // Increament Product Quantity
  const setIncreament = (id) => {
    dispatch({ type: "SET_INCREAMENT", payload: id })
  }
  // Send User Data to Shipping
  const sendUserData = (usInfo) => {
    dispatch({ type: "USER_DATA", payload: usInfo })
  }
  const sendOrderData = (orderInfo) => {
    localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
    dispatch({ type: "ORDER_INFO", payload: orderInfo })
  }

  useEffect(() => {
    localStorage.setItem('CartItems', JSON.stringify(state.cart));
  }, [state])

  // useEffect(() => {
  //   localStorage.setItem('orderInfo', JSON.stringify(state.orderInfo));
  // }, [state.orderInfo]);

  // Creating the Provider
  return (<CartContext.Provider value={{ ...state, addToCart, BuyNow, removeItem, setIncreament, setDecreament, sendUserData, sendOrderData }}>
    {children}
  </CartContext.Provider>);
}

// Creating use context API
const useCartContext = () => {
  return useContext(CartContext);
}

export { CartProvider, useCartContext };