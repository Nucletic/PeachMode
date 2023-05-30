import React, { useEffect } from 'react'
import { OnlineDesigner } from './OnlineDesigner'

export const RefundPolicy = () => {

  useEffect(() => {
    document.title = 'Refund Policy';
  }, [])

  return (
    <div className='Login'>
      <OnlineDesigner title="Refund policy" desc='We believe in satisfying and delighting our customers. The product which we sell we belive that
      is the best customer can get at the price. Our return policy is made keeping our valuable customers in mind and hence we have easy transparent
      procedure for it. However we wish that you do not need to use the policy as far as possible but we do understand that under unforeseen conditions
      it is necessary to replace/return the product. Items which have reduced selling price are considered as sale items and which are sold at full price
      are considered non-sale (fresh) items.' />
      <div className="ShippingPolicyMain">
        <h1>Item Received in Damaged Condition / Manufacturing Defect / Wrong Item Delivered:</h1>
        <li>If you have received damaged product or the wrong item, please mail us at <a href="">returns@peachmode.com</a> with your order number and couple of pictures of the material within 7 Days of delivery.</li>
        <li>We will try and replace the product as soon as possible or refund the amount if you need.</li>
        <li>At Peachmode each product is quality checked, verified and then shipped to the customer but we understand that manual errors can happen and hence we offer to exchange the product or ship a new piece.</li>
        <li><b>Sale of clearance sale items as defined are final and will not be exchanged.</b></li>
      </div>
      <div className="ShippingPolicyMain">
        <h1>Do not like the product / Product not as per the picture shown:</h1>
        <li>We understand that in some cases that you may not like the product which you have received or you feel that the product is different from what was shown. There might be several reasons for that. However we do have a flat 7 Day exchange / return policy in such cases. It is applicable in case of non clearance sale items.</li>
        <li>Please mail at <a href="">returns@peachmode.com</a> with order number and reason for return.</li>
        <li>We will get back to you with return packing slip and pickup arrangements in 48-72 hours. (if the pickup is not available at your pincode then please send the package back to us and we will reimburse upto INR 100/- as the courier charges)</li>
        <li>As soon as we receive the product in our warehouse you will get store credit / gift card which can be used to purchase anything else from the website.</li>
        <li>Store credit is valid for lifetime. There is no expiry.</li>
        <li>We do add almost 100+ designs daily so we are sure that you will be able to find a suitable item from our ever increasing collection.</li>
        <li>Sale of clearance sale items are final and will not be exchanged.</li>
      </div>
      <div className="ShippingPolicyMain">
        <h1>Stitching Problems for International Customers:</h1>
        <li>We at Peachmode work with our tailoring team closely to provide you the best fitted product. Although as you understand under normal circumstances with your private tailor after many alterations only perfect fit is possible.</li>
        <li>We do recommend you to get the product stitched with your private tailor for the best fit, however we understand in certain international locations stitching is not possible or it is very closely. Hence we provide this service at nominal cost.</li>
        <li>We recommend that when you select standard size you also put the detailed sizing for the order in comments section which is taken from your tailor. Standard sizing may not fit all and in most cases alterations are required.</li>
        <li>We can alter the product for you free of cost but you will have to send the product at your own expense and we will alter it and send it back to you. One side shipping charge company will bear.</li>
        <li>Please mail the details along with alterations needed on <a href="">returns@peachmode.com.</a></li>
        <li>In any case stitched product won't be taken back and money will not be refunded.</li>
      </div>
      <div className="ShippingPolicyMain">
        <h1>Beads and Sequences coming off:</h1>
        <li>We hope that people who buy product with beads and sequences understand that it has tendency to come off. Even with good handling and shipping this cannot be avoided. Most of such problems can be avoided during stitching. Tailor can hide the part which has less sequences or he can fix it all together. Before returning the product please ask your tailor if it can be adjusted. Even if we replace such items there are high chances that you will receive similar product again.</li>
      </div>
    </div>
  )
}
