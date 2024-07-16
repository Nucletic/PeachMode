import React, { useState, useEffect } from 'react'
import { NewArrivalProduct } from './NewArrivalProduct'
import { OnlineDesigner } from './OnlineDesigner'
import { ViewAll } from './ViewAll'
import fetchProducts from './FetchAPI'
import { LoaderAnimation } from './LoaderAnimation'


export const SaleHome = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const data = fetchProducts().then(products => {
      setProducts(products.allProducts);
    });
  }, [])

  const [onSaleProducts, setOnSaleProducts] = useState([]);
  const productSale = [];
  const getOnSaleProducts = () => {
    products.sort((a, b) => {
      if (a.OriginalPrice < b.OriginalPrice) {
        return -1
      }
    })
    products.reverse();
    for (let i = 0; i < products.length; i++) {
      let percent = Math.round((products[i].price / products[i].OriginalPrice) * 100);
      percent = Math.abs(percent - 100);
      productSale.push(percent)
    }
  }

  return (
    <div className='NewArrivals SaleHome'>
      <OnlineDesigner title={"Sale"} desc={"USE CODE SALE20 TO GET EXTRA 20% OFF"} />
      <div className="MainNewArrivals">
        {products ? (getOnSaleProducts())  : <LoaderAnimation />}
        {products ? products.slice(0, 4).map((product, index) => {
          return (<NewArrivalProduct key={index} productId={product.productId} MainProduct={product} images={product.images[0]} name={product.name} price={product.price} OriginalPrice={product.OriginalPrice} />)
        }) : ""}
      </div>
      <ViewAll />
    </div>
  )
}