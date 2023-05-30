import React, { useEffect } from 'react'
import { OnlineDesigner } from './OnlineDesigner'

export const Faq = () => {

  useEffect(() => {
    document.title = 'FAQs';
  }, [])


  return (
    <div className='Login'>
      <OnlineDesigner title="FAQs" />
      <div className="Faq">
        <details>
          <summary>What is unstitched product ?</summary>
          <div className="ShippingPolicyMain">
            <p>If the product type specified in the description is<b>"unstitched"</b>and it's a patiala suit or any other suit then it
              will be a dress material. You will have to get the product stitched according to your size locally.</p>
          </div>
        </details>
        <details>
          <summary>What is a semi-stitched product ?</summary>
          <div className="ShippingPolicyMain">
            <p>If the product type specified in the description is <b>"semi-stitched"</b> then you will have to get minimal stitching
              done as most of the work will be pre-stitched. You will just have to get the basic altering and stitching done according to your size locally.</p>
          </div>
        </details>
        <details>
          <summary>What is Leon / Crepe material ?</summary>
          <div className="ShippingPolicyMain">
            <p>Leon / Crepe is a high quality mixed synthetic fabric. The fabric is soft and doesn't loose color and luster easily on wash.</p>
          </div>
        </details>
        <details>
          <summary>What is the return policy ?</summary>
          <div className="ShippingPolicyMain">
            <p>You can return the product anytime within 7 days after the product is delivered to you.</p>
          </div>
        </details>
        <details>
          <summary>How do I return the product ?</summary>
          <div className="ShippingPolicyMain">
            <p>To return the product you can email us at <b><a href="">contact@peachmode.com</a></b> with your order number, product that you want to return
              and the reason for return or call us at <b><a href="">+91-22-62760606</a></b>, MON - SAT (9AM - 6PM) to raise a return request. We will arrange
              for a pickup from our courier partners. In case the pickup service is not possible or delayed due to high volume, we will
              request you to send the product yourself and we will reimburse you for the courier charges.</p>
          </div>
        </details>
        <details>
          <summary>When will I get my refund / store-credit / exchange product?</summary>
          <div className="ShippingPolicyMain">
            <p>Once the pickup is done it takes 5-7 days for the product to reach our warehouse. After arrival it takes our team
              24-48 hours to process your cash refund / store-credit / exchange product.</p>
          </div>
        </details>
      </div>
    </div>
  )
}
