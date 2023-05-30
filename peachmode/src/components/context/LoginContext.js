import { createContext, useContext, useReducer } from "react";
import { LoginReducer } from "../reducer/LoginReducer";

const LoginContext = createContext();

const initialState = {
  login: '',
  userData: ''
}

const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LoginReducer, initialState);

  return (
    <LoginContext.Provider value={{ ...state}}>
      {children}
    </LoginContext.Provider>
  )
}

const useLoginContext = () => {
  return useContext(LoginContext);
}

export { useLoginContext, LoginProvider };