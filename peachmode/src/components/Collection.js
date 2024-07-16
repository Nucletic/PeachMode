import React, { useState, useEffect } from 'react'
import { LeaderTitle } from './LeaderTitle'
import { NewArrivalProduct } from './NewArrivalProduct'
import fetchProducts from './FetchAPI'
import { LoaderAnimation } from './LoaderAnimation'
import { useSearchContext } from './context/SearchContext'
import { useParams } from 'react-router-dom'
import Lottie from 'react-lottie';
import animationData from './NotFound.json'

export const Collection = () => {

  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  };


  const { search } = useSearchContext();
  const urlParams = new URLSearchParams(window.location.search);
  const [FilterTypeUrl, setFilterTypeUrl] = useState();
  const myParam = useParams();
  useEffect(() => {
    if (urlParams.has('filter')) {
      setFilterTypeUrl(urlParams.get('filter'))
    } else {
      setFilterTypeUrl(undefined)
    }
  }, [myParam])


  useEffect(() => {
    if (FilterTypeUrl) {
      document.title = FilterTypeUrl.charAt(0).toUpperCase() + FilterTypeUrl.slice(1);;
    } else {
      document.title = 'Collections';
    }
  }, [FilterTypeUrl])


  const [products, setProducts] = useState(null);
  useEffect(() => {
    const data = fetchProducts().then(products => {
      setProducts(products.allProducts);
    });
  }, [])

  const [filteredProducts, setFilteredProducts] = useState();
  useEffect(() => {
    if (FilterTypeUrl && products) {
      const urlProducts = products.filter((product) => (product.category.toLowerCase() === FilterTypeUrl.toLowerCase()))
      setFilteredProducts(urlProducts)
    } else {
      setFilteredProducts(undefined)
    }
  }, [FilterTypeUrl, products])

  let category;
  let Color;
  let StitchType;
  let PrintPattern;
  let Material;
  let Work;
  if (products != null) {
    const filterProducts = (data, filter) => {
      let newVal = data.map((value) => {
        return value[filter]
      })
      newVal = [...new Set(newVal)];
      return newVal
    }
    const filterProductsObjects = (data, object, filter) => {
      let newVal = [];
      data.map((elem) => {
        for (const key in elem[object]) {
          if (key === filter) {
            newVal.push(elem.specifications[key])
          }
        }
      })
      newVal = [...new Set(newVal.join(",").toString().split(","))]
      return newVal;
    }
    if (FilterTypeUrl && filteredProducts) {
      category = filterProducts(filteredProducts, 'category')
      Color = filterProductsObjects(filteredProducts, 'specifications', 'Color');
      StitchType = filterProductsObjects(filteredProducts, 'specifications', 'StitchType');
      PrintPattern = filterProductsObjects(filteredProducts, 'specifications', 'PrintPattern');
      Material = filterProductsObjects(filteredProducts, 'specifications', 'Material');
      Work = filterProductsObjects(filteredProducts, 'specifications', 'Work');
    } else {
      category = filterProducts(products, 'category')
      Color = filterProductsObjects(products, 'specifications', 'Color');
      StitchType = filterProductsObjects(products, 'specifications', 'StitchType');
      PrintPattern = filterProductsObjects(products, 'specifications', 'PrintPattern');
      Material = filterProductsObjects(products, 'specifications', 'Material');
      Work = filterProductsObjects(products, 'specifications', 'Work');
    }
  }

  const loadFilterListener = (event) => {
    const filter = document.querySelectorAll('.CollectionLeftMainFilterItemsType');
    const filterBtn = document.querySelectorAll('.CollectionLeftMainFilterTitleBtn');
    const buttonElement = event.currentTarget;
    const dataKey = buttonElement.getAttribute('data-key');
    buttonElement.classList.toggle('openFilterBtn');
    filter[dataKey].classList.toggle('openFilter');
  }
  // ///////////////////////////////////
  const [filtersNames, setFiltersNames] = useState({ filters: [] });
  const HandleChange = (e) => {
    const { value, checked } = e.target;
    const { filters } = filtersNames;
    if (checked) {
      setFiltersNames({ filters: [...filters, value] });
    } else if (!checked) {
      setFiltersNames({
        filters: filters.filter((e) => e !== value)
      });
    }
  }


  let filterProductType;
  let filterStitchType;
  let filterPrintPattern;
  let filterMaterial;
  let filterWork;
  let filterColor;
  let filterPrice;
  let newVal = [];
  if (filtersNames) {
    filtersNames.filters.map((filter) => {
      filterProductType = products.filter((curElem) => {
        return curElem.category === filter
      })
      filterStitchType = products.filter((curElem) => {
        return curElem.specifications.StitchType === filter
      })
      filterPrintPattern = products.filter((curElem) => {
        return curElem.specifications.PrintPattern === filter
      })
      filterMaterial = products.filter((curElem) => {
        return curElem.specifications.Material === filter
      })
      filterWork = products.filter((curElem) => {
        return curElem.specifications.Work === filter
      })
      filterColor = products.filter((curElem) => {
        return curElem.specifications.Color === filter
      })
      filterPrice = products.filter((curElem) => {
        return curElem.price <= filter
      })
      newVal = [...newVal, ...filterProductType, ...filterStitchType, ...filterPrintPattern, ...filterMaterial, ...filterWork, ...filterColor];
      newVal = [... new Set(newVal)];
    })
  }

  const openFilterForMobile = () => {
    const FitlerTitle = document.querySelector('.CollectionLeftFiltersTitle');
    const CollectionLeftFilters = document.querySelector('.CollectionLeftFilters');
    let MbleFltrOptsOpn = false
    FitlerTitle.addEventListener('click', () => {
      if (MbleFltrOptsOpn === true) {
        CollectionLeftFilters.style.height = '55px';
        MbleFltrOptsOpn = false
      } else {
        CollectionLeftFilters.style.height = 'auto';
        MbleFltrOptsOpn = true
      }
    })
  }

  useEffect(() => {
    if (window.innerWidth <= 765) {
      openFilterForMobile()
    }
  }, [window.innerWidth])


  const findsearch = () => {
    if (products) {
      if (search) {
        if (search.length > 0) {
          const searchedProducts = products.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          );
          return searchedProducts
        } else {
          return products
        }
      } return products
    }
  }

  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    if (products) {
      if ((filteredProducts && filteredProducts.length === 0) || (search && findsearch().length === 0)) {
        setShowAnimation(true)
      } else {
        setShowAnimation(false)
      }
    }
  }, [products, filteredProducts, search])


  // (search ? (search.length > 0 ? (
  //   products.filter((item) =>
  //     search.toLowerCase() === ''
  //       ? item : item.name.toLowerCase().includes(search)
  //   )) : products) : products)


  return (
    <div className='Collection'>
      {showAnimation ? (<div className='NotFoundAnimation'>
        <Lottie options={lottieOptions} height={280} width={280} />
        <h2>Nothing To Show Here</h2>
      </div>) : (<>
        <LeaderTitle text={FilterTypeUrl ? (FilterTypeUrl[0].toUpperCase() + FilterTypeUrl.slice(1).toLowerCase()) : 'Collection'} />
        <div className="MainCollection" style={FilterTypeUrl && { justifyContent: 'center' }}>
          <div className="CollectionLeft">
            <div className="CollectionLeftFilters">
              <div className="CollectionLeftFiltersTitle">
                <h1>Filters</h1>
              </div>

              <div className="CollectionLeftMainFilter" style={FilterTypeUrl && { display: 'none' }}>
                <button data-key='0' onClick={loadFilterListener} className="CollectionLeftMainFilterTitleBtn">
                  <h3>Product Type</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                  </svg>
                </button>
                <div className="CollectionLeftMainFilterItemsType">
                  {category ? category.map((elem, i) => {
                    return (
                      <div className="CollectionLeftMainFilterItem" key={i}>
                        <label htmlFor="">
                          <input type="checkbox" name='ProductType' value={elem} onClick={HandleChange} />
                          <p>{elem}</p>
                        </label>
                      </div>)
                  }) : ""}
                </div>
              </div>
              <div className="CollectionLeftMainFilter">
                <button data-key='1' onClick={loadFilterListener} className="CollectionLeftMainFilterTitleBtn">
                  <h3>Color</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                  </svg>
                </button>
                <div className="CollectionLeftMainFilterItemsType">
                  {Color ? Color.map((elem, i) => {
                    return (
                      <div className="CollectionLeftMainFilterItem" key={i}>
                        <label htmlFor="">
                          <input type="checkbox" name='ProductType' value={elem} onClick={HandleChange} />
                          <p>{elem}</p>
                        </label>
                      </div>)
                  }) : ""}
                </div>
              </div>
              <div className="CollectionLeftMainFilter">
                <button data-key='2' onClick={loadFilterListener} className="CollectionLeftMainFilterTitleBtn">
                  <h3>Stitch Type</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                  </svg>
                </button>
                <div className="CollectionLeftMainFilterItemsType">
                  {StitchType ? StitchType.map((elem, i) => {
                    return (
                      <div className="CollectionLeftMainFilterItem" key={i}>
                        <label htmlFor="">
                          <input type="checkbox" name='StitchType' value={elem} onClick={HandleChange} />
                          <p>{elem}</p>
                        </label>
                      </div>)
                  }) : ""}
                </div>
              </div>
              <div className="CollectionLeftMainFilter">
                <button data-key='3' onClick={loadFilterListener} className="CollectionLeftMainFilterTitleBtn">
                  <h3>Print Pattern</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                  </svg>
                </button>
                <div className="CollectionLeftMainFilterItemsType">
                  {PrintPattern ? PrintPattern.map((elem, i) => {
                    return (
                      <div className="CollectionLeftMainFilterItem" key={i}>
                        <label htmlFor="">
                          <input type="checkbox" name='PrintPattern' value={elem} onClick={HandleChange} />
                          <p>{elem}</p>
                        </label>
                      </div>)
                  }) : ""}
                </div>
              </div>
              <div className="CollectionLeftMainFilter">
                <button data-key='4' onClick={loadFilterListener} className="CollectionLeftMainFilterTitleBtn">
                  <h3>Material</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                  </svg>
                </button>
                <div className="CollectionLeftMainFilterItemsType">
                  {Material ? Material.map((elem, i) => {
                    return (
                      <div className="CollectionLeftMainFilterItem" key={i}>
                        <label htmlFor="">
                          <input type="checkbox" name='Material' value={elem} onClick={HandleChange} />
                          <p>{elem}</p>
                        </label>
                      </div>)
                  }) : ""}
                </div>
              </div>
              <div className="CollectionLeftMainFilter">
                <button data-key='5' onClick={loadFilterListener} className="CollectionLeftMainFilterTitleBtn">
                  <h3>Work</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                  </svg>
                </button>
                <div className="CollectionLeftMainFilterItemsType">
                  {Work ? Work.map((elem, i) => {
                    return (
                      <div className="CollectionLeftMainFilterItem" key={i}>
                        <label htmlFor="">
                          <input type="checkbox" name='Work' value={elem} onClick={HandleChange} />
                          <p>{elem}</p>
                        </label>
                      </div>)
                  }) : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="CollectionRight">
            <div className="JustForYouTitle">
              <h3>{filteredProducts ? filteredProducts.length : (newVal.length > 0 ? newVal.length : products ? products.length : "")} Products</h3>
            </div>
            <div className="CollectionRightMainItems">
              {newVal.length !== 0 ? (
                newVal.map((product, i) => (
                  <NewArrivalProduct
                    key={i}
                    productId={product.productId}
                    MainProduct={product}
                    images={product.images}
                    name={product.name}
                    price={product.price}
                    OriginalPrice={product.OriginalPrice}
                  />
                ))
              ) : (
                filteredProducts ? (
                  filteredProducts.map((product, i) => (
                    <NewArrivalProduct
                      key={i}
                      productId={product.productId}
                      MainProduct={product}
                      images={product.images}
                      name={product.name}
                      price={product.price}
                      OriginalPrice={product.OriginalPrice}
                    />
                  ))
                ) : products ? (findsearch().map((product, i) => (
                  <NewArrivalProduct
                    key={i}
                    productId={product.productId}
                    MainProduct={product}
                    images={product.images}
                    name={product.name}
                    price={product.price}
                    OriginalPrice={product.OriginalPrice}
                  />
                ))) : (
                  <LoaderAnimation />
                ))}
            </div>
          </div>
        </div>
      </>)}
    </div>
  )
}