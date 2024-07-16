import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LeaderTitle } from './LeaderTitle';
import { NewArrivalProduct } from './NewArrivalProduct';
import { LoaderAnimation } from './LoaderAnimation';
import { useCartContext } from './context/CartContext';
import fetchProducts from './FetchAPI'
import { useNavigate } from 'react-router-dom';

export const ProductPage = () => {

  let navigate = useNavigate();

  const [products, setProducts] = useState(null);
  useEffect(() => {
    const data = fetchProducts().then(products => {
      setProducts(products.allProducts);
    });
  }, [])
  const { addToCart } = useCartContext();
  const { BuyNow } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [ProductTab, setProductTab] = useState(2);
  const [Size, setSize] = useState('XL');
  const params = useParams()["*"].split(":").splice(1, 3);
  let currentProduct = 0;
  if (products) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].productId === parseInt(params[0])) {
        currentProduct = products[i]
      }
    }
  }

  let parentWidth = 500;
  if (window.innerWidth <= 1020) {
    parentWidth = 400
  }
  if (window.innerWidth <= 430) {
    parentWidth = 300
  }

  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? currentProduct.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === currentProduct.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, currentProduct.images]);


  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext()
    }, 100000);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);


  useEffect(() => {
    if (currentProduct) {
      document.title = currentProduct.name; // Replace 'New Page Title' with your desired title
    }
  }, [currentProduct]);



  return (
    <div className="ProductPage">
      <div className="JustForYouTitle">
        <h3><a href="/">Home</a> / {products && currentProduct.name}</h3>
      </div>
      <div className="ProductPageMain">
        <div className="ProductPageLeft" style={{ height: `${parentWidth + 82}px` }}>
          <div className="ProductPageLeftImg" style={{ width: `${parentWidth}px`, height: `${parentWidth}px` }}>
            {products && currentProduct.images.map((image, i) => {
              return (<img src={products && image} key={i} style={{ transform: `translateX(${-currentIndex * parentWidth}px)`, width: parentWidth, height: parentWidth }} />)
            })}
          </div>
          <div className="ProductPageLeftAllImg">
            {products && currentProduct.images.map((image, i) => {
              return <img src={image} onClick={() => { setCurrentIndex(i) }} className={currentIndex === i ? 'giveBorderToImg' : ''} key={i} />
            })}
          </div>
        </div>
        <div className="ProductPageRight">
          <div className="ProductPageRightTitle">
            <h1>{products && currentProduct.name}</h1>
          </div>
          <div className="ProductPageRightPrice">
            <div className="ProductPageRightPriceMain">
              <h3>₹ {products && currentProduct.price}.00</h3>
              <p><strike>₹ {products && currentProduct.OriginalPrice}.00</strike></p>
              <span>SAVE 50%</span>
            </div>
            <h4>Inclusive of all taxes</h4>
          </div>
          <div className="ProductPageRightColorVariant">
            <div className="ProductPageRightColorVariantTitle">
              <p><b>Color:</b> {products && currentProduct.specifications.Color}</p>
            </div>
            <div className="ProductPageRightColorVariantMain">
              {products && currentProduct.specifications.ColorVariant.map((ImgSrc, i) => {
                return (
                  <Link to={ImgSrc}>
                    <img src={currentProduct.specifications.ColorVariantImages[i]} />
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="ProductPageRightColorVariant">
            <div className="ProductPageRightColorVariantTitle">
              <p><b>Size:</b> XL</p>
            </div>
            <div className="ProductPageRightColorVariantMain">
              <button className={Size === 'XS' ? 'activeSize' : ''} onClick={() => { setSize('XS') }}>XS</button>
              <button className={Size === 'S' ? 'activeSize' : ''} onClick={() => { setSize('S') }}>S</button>
              <button className={Size === 'M' ? 'activeSize' : ''} onClick={() => { setSize('M') }}>M</button>
              <button className={Size === 'L' ? 'activeSize' : ''} onClick={() => { setSize('L') }}>M</button>
              <button className={Size === 'XL' ? 'activeSize' : ''} onClick={() => { setSize('XL') }}>XL</button>
              <button className={Size === 'XXL' ? 'activeSize' : ''} onClick={() => { setSize('XXL') }}>XXL</button>
            </div>
          </div>
          <div className="ProductPageRightQuantity">
            <div className="ProductPageRightColorVariantTitle">
              <p>Quantity:</p>
            </div>
            <div className="ProductPageRightQuantityMain">
              <button onClick={() => { quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 10h24v4h-24z" />
                </svg>
              </button>
              <span>{quantity}</span>
              <button onClick={() => { setQuantity(quantity + 1) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="ProductPageRightButtons">
            <div className="LoginBtn">
              <button style={{ background: "#f7aea6", margin: 0 }} onClick={() => { addToCart(currentProduct, quantity, Size) }} type="submit">ADD TO CART</button>
            </div>
            <div className="LoginBtn">
              <button style={{ margin: "10px 0" }} type="button"
                onClick={() => { BuyNow(currentProduct, quantity, Size); navigate('/PlaceOrder/ContactInformation') }}>BUY IT NOW</button>
            </div>
            <div className="ProductPageRightShare">
              <p>Share:</p>
              <Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </Link>
              <Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ProductPageTabs">
        <div className="ProductPageTabsMain">
          <button onClick={() => { setProductTab(1) }} className={ProductTab === 1 ? 'activeProductPageTabsMain' : ''} >DESCRIPTION</button>
          <button onClick={() => { setProductTab(2) }} className={ProductTab === 2 ? 'activeProductPageTabsMain' : ''} >SPECIFICATIONS</button>
          <button onClick={() => { setProductTab(3) }} className={ProductTab === 3 ? 'activeProductPageTabsMain' : ''} >RETURN POLICY</button>
        </div>
        <div className="ProductPageTabsContent">
          {ProductTab === 1 && (<div className="ProductPageTabsDescription">
            <p>{products && currentProduct.description}</p>
          </div>
          )}
          {ProductTab === 2 && (<div className="ProductPageTabsSpecifications">
            <p><b>Measurements:</b> <span>{products && currentProduct.specifications.Mesurement}</span></p>
            <p><b>Material:</b> <span>{products && currentProduct.specifications.Material}</span></p>
            <p><b>Color:</b> <span>{products && currentProduct.specifications.Color}</span></p>
            <p><b>Work:</b> <span>{products && currentProduct.specifications.Work}</span></p>
            <p><b>Stitch Type:</b> <span>{products && currentProduct.specifications.StitchType}</span></p>
            <p><b>Occasion:</b> <span>{products && currentProduct.specifications.Occasion}</span></p>
            <p><b>Print / Pattern:</b> <span>{products && currentProduct.specifications.PrintPattern}</span></p>
            <p><b>Supplier SKU:</b> <span>{products && currentProduct.specifications.SupplierSKU}</span></p>
            <p><b>Supplier:</b> <span>{products && currentProduct.specifications.Supplier}</span></p>
            <p><b>Country of Origin:</b> <span>{products && currentProduct.specifications.CountryofOrigin}</span></p>
            <p><b>Care Guide:</b> <span>{products && currentProduct.specifications.CareGuide}</span></p>
          </div>
          )}
          {ProductTab === 3 && (<div className="ProductPageTabsDescription">
            <p>{products && currentProduct.returnPolicty}</p>
          </div>
          )}
        </div>
      </div>
      <div className="YouMayAlsoLike">
        <YouMayAlsoLike products={products} />
      </div>
    </div>
  )
}

const YouMayAlsoLike = ({ products }) => {
  return (
    <div className="NewArrivals">
      <LeaderTitle text={"You may also like"} />
      <div className="MainNewArrivals">
        {products ? products.slice(0, 5).map((product, index) => {
          return (<NewArrivalProduct key={index} productId={product.productId} MainProduct={product} images={product.images[0]} name={product.name} price={product.price} OriginalPrice={product.OriginalPrice} />)
        }) : <LoaderAnimation />}
      </div>
    </div>
  )
}