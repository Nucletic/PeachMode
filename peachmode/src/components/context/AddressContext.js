import { createContext, useContext, useReducer } from "react";
import { AddressReducer } from "../reducer/AddressReducer";

const AddressContext = createContext();

const initialState = {
  addresses: ''
}

const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AddressReducer, initialState);

  const getAddressId = (addressId) => {
    dispatch({ type: 'GET_ADDRESS_ID', payload: { addressId } })
  }

  return (
    <AddressContext.Provider value={{ ...state, getAddressId }}>
      {children}
    </AddressContext.Provider>
  )
}

const useAddressContext = () => {
  return useContext(AddressContext);
}
export { useAddressContext, AddressProvider }