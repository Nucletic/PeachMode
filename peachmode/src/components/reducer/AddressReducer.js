import React from 'react'

export const AddressReducer = (state, action) => {
  if (action.type === 'GET_ADDRESS_ID') {
    let { addressId } = action.payload
    return { ...state, addressId }
  }
  return state;
}