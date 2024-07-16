import React, { useEffect, useState } from 'react'
import { NewArrivalProduct } from './NewArrivalProduct'
import { ViewAll } from './ViewAll'
import { LeaderTitle } from './LeaderTitle'
import fetchProducts from './FetchAPI'
import { LoaderAnimation } from './LoaderAnimation'


export const NewArrivals = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const data = fetchProducts().then(products => {
      setProducts(products.allProducts);
    });
  }, [])
  return (
    <div className='NewArrivals'>
      <LeaderTitle text={"New Arrivals"} />
      <div className="MainNewArrivals">
        {products ? products.slice(0, 4).map((product, index) => {
          return (<NewArrivalProduct key={index} productId={product.productId} MainProduct={product} images={product.images[0]} name={product.name} price={product.price} OriginalPrice={product.OriginalPrice} />)
        }) : <LoaderAnimation />}
      </div>
      <ViewAll />
    </div>
  )
}
