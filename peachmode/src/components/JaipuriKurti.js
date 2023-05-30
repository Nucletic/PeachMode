import React, { useState, useEffect } from 'react'
import { NewArrivalProduct } from './NewArrivalProduct'
import { ViewAll } from './ViewAll'
import { LeaderTitle } from './LeaderTitle'
import FetchAPI from './FetchAPI'
import { LoaderAnimation } from './LoaderAnimation'


export const JaipuriKurti = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const data = FetchAPI.fetchProducts().then(products => {
      setProducts(products.allProducts);
    });
  }, [])

  const [jaipuriProducts, setJaipuriProducts] = useState([]);
  const setKurtiProducts = () => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === 'Jaipuri Kurti') {
        jaipuriProducts.push(products[i])
      }
    }
  }

  return (
    <div className='NewArrivals SaleHome'>
      <LeaderTitle text={"Jaipuri Kurti Sets"} />
      <div className="MainNewArrivals">
        {products ? (setKurtiProducts()) : <LoaderAnimation />}
        {products ? jaipuriProducts.slice(0, 4).map((jaipuriProduct, index) => {
          return (<NewArrivalProduct key={index} productId={jaipuriProduct.productId} MainProduct={jaipuriProduct} images={jaipuriProduct.images[0]} name={jaipuriProduct.name} price={jaipuriProduct.price} OriginalPrice={jaipuriProduct.OriginalPrice} />)
        }) : ""}
      </div>
      <ViewAll />
    </div>
  )
}