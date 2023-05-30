import { createContext, useContext, useReducer } from "react";
import { SearchReducer } from "../reducer/SearchReducer";

const SearchContext = createContext();

const initialState = {
  search: ''
}

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const searchTerm = (search) => {
    dispatch({ type: "SEARCH_TERM", payload: { search } })
  }

  return (<SearchContext.Provider value={{ ...state, searchTerm }}>
    {children}
  </SearchContext.Provider>)
}

const useSearchContext = () => {
  return useContext(SearchContext);
}

export { useSearchContext, SearchProvider };