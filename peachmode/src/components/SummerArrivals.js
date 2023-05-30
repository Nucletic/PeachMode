import React from 'react'
import { LeaderTitle } from './LeaderTitle'
import { Link } from 'react-router-dom'
export const SummerArrivals = () => {
  return (
    <div className='NewArrivals SaleHome'>
      <LeaderTitle text={"Summer Arrivals"} />
      <div className="MainNewArrivals">
        <SummerArrivalsBox text="Cotton Sarees" imageUrl="https://cdn.shopify.com/s/files/1/0637/4834/1981/products/innovative-rama-colored-lining-pattern-casual-wear-cotton-saree-peachmode-1.jpg?v=1669011587" />
        <SummerArrivalsBox text="Cotton Kurtis" imageUrl="https://cdn.shopify.com/s/files/1/0637/4834/1981/products/blue-casual-wear-embroidered-cotton-kurti-peachmode-1.jpg?v=1669033856" />
        <SummerArrivalsBox text="Cotton Salwar Suits" imageUrl="https://cdn.shopify.com/s/files/1/0637/4834/1981/products/grey-printed-poly-cotton-dress-material-peachmode-1_4496ee44-1032-488d-9235-807a07974df9.jpg?v=1669043693" />
        <SummerArrivalsBox text="Mens Kurta Pyjama" imageUrl="https://cdn.shopify.com/s/files/1/0637/4834/1981/products/beige-embroidered-art-silk-mens-s-kurta-pyjama-set-peachmode-1.jpg?v=1669056724" />
        <SummerArrivalsBox text="Jewellery" imageUrl="https://cdn.shopify.com/s/files/1/0637/4834/1981/products/file_d00586b3-2489-46ce-a2cc-34929b8380bc.jpg?v=1680235282" />
        <SummerArrivalsBox text="Handbags" imageUrl="https://cdn.shopify.com/s/files/1/0637/4834/1981/products/1_PEACHMODE_e588c929-aa0a-459d-a7ca-69c1f8b60ac3.jpg?v=1669026284" />
      </div>
    </div>
  )
}

const SummerArrivalsBox = (props) => {
  return (
    <Link to={"#"}><div className="MainSummerArrivalsBox">
      <img src={props.imageUrl} className='MainSummerArrivalsImg' alt="background image" />
      <div className="MainSummerArrivalsBoxTitle">
        <h1>{props.text}</h1>
      </div>
    </div></Link>
  )
}