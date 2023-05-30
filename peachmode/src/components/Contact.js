import React, { useEffect } from 'react'
import { OnlineDesigner } from './OnlineDesigner'

export const Contact = () => {

  useEffect(() => {
    document.title = 'Contact';
  }, [])

  return (
    <div className='Login ContactUsMain'>
      <OnlineDesigner title="Contact Us" />
      <div className="ContactUs">
        <div className="ContactUsSmall">
          <a href=""><b>Chat On Whatsapp</b></a>
        </div>
        <div className="ContactUsSmall">
          <p>Customer Care</p>
          <a href="">+91-22-62760606</a>
          <p>MON - SAT (9AM - 6PM)</p>
        </div>
        <div className="ContactUsSmall">
          <p>Email Us:</p>
          <a href="">contact@peachmode.com</a>
        </div>
        <div className="ContactUsSmall">
          <p>For Returns:</p>
          <a href="">returns@peachmode.com</a>
        </div>
        <div className="ContactUsSmall">
          <p>For Marketing and Business Development:</p>
          <a href="">marketing@peachmode.com</a>
        </div>
      </div>
    </div>
  )
}