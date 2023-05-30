import React from 'react'

export const reducer = (state, action) => {
  if (action.type === "SET_DECREAMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.MainProduct.productId === action.payload) {
        let decAmount = curElem.amount === 1 ? 1 : curElem.amount - 1;
        return {
          ...curElem,
          amount: decAmount
        }
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct }
  }

  if (action.type === "SET_INCREAMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.MainProduct.productId === action.payload) {
        let decAmount = curElem.amount + 1;
        return {
          ...curElem,
          amount: decAmount
        }
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.MainProduct.productId !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }


  if (action.type === "ADD_TO_CART") {
    let { MainProduct, amount, size } = action.payload;

    let existingProduct = state.cart.find(
      (curItem) => curItem.MainProduct.productId === MainProduct.productId);

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {

        if (curElem.MainProduct.productId === MainProduct.productId) {

          let newAmount = curElem.amount + amount;

          return {
            ...curElem,
            amount: newAmount,
            size
          }

        } else {
          return curElem;
        }
      })
      return {
        ...state,
        cart: updatedProduct
      }
    } else {
      return {
        ...state,
        cart: [...state.cart, { MainProduct, amount, size }]
      }
    }
  }

  if (action.type === "USER_DATA") {
    let usInfo = action.payload;
    return {
      ...state,
      usInfo
    }
  }
  if (action.type === "BUY_NOW") {
    let buyNowProduct = action.payload;
    return {
      ...state,
      buyNowProduct
    }
  }
  if (action.type === "ORDER_INFO") {
    let orderInfo = action.payload;
    return {
      ...state,
      orderInfo
    }
  }
  return state;
}
