import React, { useEffect } from 'react'
import { OnlineDesigner } from './OnlineDesigner'


export const GoodsAndServices = () => {

  useEffect(() => {
    document.title = 'Goods & Services Tax';
  }, [])


  return (
    <div className='Login'>
      <OnlineDesigner title="Goods & Services Tax" />
      <div className="ShippingPolicyMain">
        <h1>How is the GST amount decided?</h1>

        <p>Following rules will govern whether or not additional GST will be applicable on the products purchased by you:<br /></p>

        <p><b>GST applicability:</b> For a product, if the fulfillment is done on or after July 1st, 2017 and total discount percentage
          is more than 19% of MRP, then GST may be collected from customer in addition to product price, post discounts. The discounts
          include those resulting from special offers such as Buy 1 Get 1 and similar offers.<br /></p>

        <p><b>GST amount:</b> If applicable, the amount of GST collected from customer depends on category</p>

        <p><b>Apparel/Clothing:</b> Max 12% of net payable (MRP - product discount - coupon discount) will be collected from the customer.</p>

        <p><b>Footwear:</b> Max 18% of net payable (MRP - product discount - coupon discount) will be collected from the customer.</p>

        <p><b>Home Furnishing:</b> Min. 5% - Max. 28% of net payable (MRP - product discount - coupon discount) will be collected from the customer.</p>

        <p><b>Accessories/Other Categories:</b> Max 28% of net payable (MRP - product discount - coupon discount) will be collected from the customer.
          The amount of GST shown at the cart level is a mere estimate. The actual GST payable shall be determined basis the warehouse
          (based on availability of the products) from where the goods are being shipped, which will be checked once the order is placed.
          Only in case of GST being lower than the estimate GST (based on the warehouse from where the goods would be shipped), the customer
          would be notified of the same and any additional GST paid by the customer would be duly refunded to the customer.
        </p>
      </div>
    </div>
  )
}
