import React, { useState, useEffect } from 'react'
import { LeaderTitle } from './LeaderTitle'
import { NewArrivalProduct } from './NewArrivalProduct'
import fetchProducts from './FetchAPI'
import { LoaderAnimation } from './LoaderAnimation'


export const LatestCollection = () => {

  const [products, setProducts] = useState(null);
  useEffect(() => {
    const data = fetchProducts().then(products => {
      setProducts(products.allProducts);
    });
  }, [])

  const [gownProducts, setGownProducts] = useState([]);
  const [eidSuitsProducts, seteidSuitsProducts] = useState([]);
  const [shararaProducts, setShararaProducts] = useState([]);
  const [palazoProducts, setPalazoProducts] = useState([]);
  const setProductsCate = () => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === 'gown') {
        gownProducts.push(products[i])
      } else if (products[i].category === 'suit') {
        eidSuitsProducts.push(products[i])
      } else if (products[i].category === 'suit') {
        eidSuitsProducts.push(products[i])
      } else if (products[i].category === 'sharara') {
        shararaProducts.push(products[i])
      } else if (products[i].category === 'palazo') {
        palazoProducts.push(products[i])
      }
    }
  }



  const [TabNum, setTabNum] = useState(1);

  const LatestCollectionTabsButtons = document.querySelectorAll('.LatestCollectionTabs button');
  for (let i = 0; i < LatestCollectionTabsButtons.length; i++) {
    if (TabNum === i + 1) {
      LatestCollectionTabsButtons[i].style.color = '#222'
    } else {
      LatestCollectionTabsButtons[i].style.color = '#5d5d5d'
    }
  }

  return (
    <div className="LatestCollection">
      <LeaderTitle text={"Latest Collection"} />
      <div className="LatestCollectionTabsBig">
        <div className="LatestCollectionTabs">
          <button onClick={() => { setTabNum(1) }} className={TabNum === 1 ? 'activeProductTab' : ''}>GOWN</button>
          <button onClick={() => { setTabNum(2) }} className={TabNum === 2 ? 'activeProductTab' : ''}>EID SUIT</button>
          <button onClick={() => { setTabNum(3) }} className={TabNum === 3 ? 'activeProductTab' : ''}>SHARARA SUIT</button>
          <button onClick={() => { setTabNum(4) }} className={TabNum === 4 ? 'activeProductTab' : ''}>PALAZO SUIT</button>
        </div>
      </div>
      {TabNum === 1 ? (<div className="MainNewArrivals">
        {products ? (setProductsCate()) : <LoaderAnimation />}
        {gownProducts.slice(0, 4).map((gownProduct, index) => {
          return (
            <NewArrivalProduct key={index} productId={gownProduct.productId} MainProduct={gownProduct} images={gownProduct.images} name={gownProduct.name} price={gownProduct.price} OriginalPrice={gownProduct.OriginalPrice} />
          )
        })}
      </div>) : ""}
      {TabNum === 2 ? (<div className="MainNewArrivals">
        {products ? (setProductsCate()) : <LoaderAnimation />}
        {eidSuitsProducts.slice(0, 4).map((eidSuitsProduct, index) => {
          return (
            <NewArrivalProduct key={index} productId={eidSuitsProduct.productId} MainProduct={eidSuitsProduct} images={eidSuitsProduct.images} name={eidSuitsProduct.name} price={eidSuitsProduct.price} OriginalPrice={eidSuitsProduct.OriginalPrice} />
          )
        })}
      </div>) : ""}
      {TabNum === 3 ? (<div className="MainNewArrivals">
        {products ? (setProductsCate()) : <LoaderAnimation />}
        {shararaProducts.slice(0, 4).map((shararaProduct, index) => {
          return (
            <NewArrivalProduct key={index} productId={shararaProduct.productId} MainProduct={shararaProduct} images={shararaProduct.images} name={shararaProduct.name} price={shararaProduct.price} OriginalPrice={shararaProduct.OriginalPrice} />
          )
        })}
      </div>) : ""}
      {TabNum === 4 ? (<div className="MainNewArrivals">
        {products ? (setProductsCate()) : <LoaderAnimation />}
        {palazoProducts.slice(0, 4).map((palazoProduct, index) => {
          return (
            <NewArrivalProduct key={index} productId={palazoProduct.productId} MainProduct={palazoProduct} images={palazoProduct.images} name={palazoProduct.name} price={palazoProduct.price} OriginalPrice={palazoProduct.OriginalPrice} />
          )
        })}
      </div>) : ""}
    </div>
  )
}