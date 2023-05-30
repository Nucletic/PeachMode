import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './components/context/CartContext';
import { SearchProvider } from './components/context/SearchContext';
import { LoginProvider } from './components/context/LoginContext';
import { AddressProvider } from './components/context/AddressContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <SearchProvider>
        <LoginProvider>
          <AddressProvider>
            <App />
          </AddressProvider>
        </LoginProvider>
      </SearchProvider>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
