import React from 'react'

export const SearchReducer = (state, action) => {
  if (action.type === 'SEARCH_TERM') {
    let { search } = action.payload
    return { ...state, search }
  }
}
