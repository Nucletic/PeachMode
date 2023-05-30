import React, { useEffect } from 'react'
import { OnlineDesigner } from './OnlineDesigner'

export const ShippingPolicy = () => {

  useEffect(() => {
    document.title = 'Shipping Policy';
  }, [])






  return (
    <div className='Login'>
      <OnlineDesigner title="Shipping policy" />
      <div className="ShippingPolicyMain">
        <h1>Shipping Policy and Information</h1>
        <p>Peachmode is commited to deliver your order accurately in good condition and always on time.
          We believe in express shipping and most of your order is shipped within 24 hours once the order
          is placed except on weekend or on public holidays. We deliver to all the locations across the world.
        </p>
      </div>
      <div className="ShippingPolicyMain">
        <h1>Shipping Restriction</h1>
        <p>Any items notified by delivery company to be restricted and/or banned and/or prohibited from time
          to time(including but not limited to animals, bullion, currency, bearer from negotiable instruments,
          precious metals and stones, firearms or parts thereof and ammunition, human remains, pornography and
          illegal narcotics/drugs).
        </p>
      </div>
      <div className="ShippingPolicyMain">
        <h1>Important Information</h1>
        <p>Order cut-off times are provided as guidelines only, and do not take into account possible delays caused
          by payment authorization. We aim to dispatch all orders as soon as the product is ready and within time
          shown on the product page. However, a delay of 72 hours is possible from the designer / manufacturer in
          case of unforeseen circumstances. Estimated delivery times are to be used as a guide only and commence
          from the date of dispatch. We are not responsible for any delays caused by destination customs clearance
          processes. We are unable to redirect orders once items have been dispatched.
        </p>
      </div>
      <div className="ShippingPolicyMain">
        <h1>When do we Deliver</h1>
        <p>All domestic orders are shipped by delivery company between 9am - 6pm, Monday to Saturday. It takes maximum
          of 7 days for national shipping. If there is further delay kindly contact us on contact@peachmode.com and we
          will try and delivery the products as soon as possible.
        </p>
      </div>
      <div className="ShippingPolicyMain">
        <h1>Shipping in India</h1>
        <p>Shipping in India is free of charge. This is to maintain the service level and provide your product on time.
          We use Delhivery and Speed Post services to deliver in India.
        </p>
      </div>
      <div className="ShippingPolicyMain">
        <h1>Insurance</h1>
        <p>Peachmode insures each purchase during the time it is in transit until it is delivered to you. We require a
          signature for any goods delivered, at which point responsibility for your purchased goods passes to you. If
          you have specified a recipient who is not you for delivery purposes (for example as a gift) then you accept
          that evidence of a signature by them (or at that delivery address) is evidence of delivery and fulfilment by
          Peachmode and transfer of responsibility in the same way.
        </p>
      </div>
      <div className="ShippingPolicyMain">
        <h1>Taxes and Duties</h1>
        <p>For Indian Customers, GST will be charged as specified. For international customers we send the package as a
          personal use item only but if the customs is applied for that country it needs to be paid by the customer and
          take the delivery for same. Company is not responsible for any Custom duties. The information about customs if
          applied will be informed to customer via email/phone.
        </p>
      </div>
    </div>
  )
}