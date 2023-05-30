import React from 'react'

export const FooterService = () => {
  return (
    <div className="FooterService">
      <FooterServicePart title="FREE SHIPPING" desc="Free shipping in India" svg={<svg clipRule="evenodd" height="24" width="24" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3.514 6.61c-.317.179-.514.519-.514.887v8.95c0 .37.197.708.514.887 1.597.901 6.456 3.639 8.005 4.512.152.085.319.128.487.128.164 0 .328-.041.477-.123 1.549-.855 6.39-3.523 7.994-4.408.323-.177.523-.519.523-.891v-9.055c0-.368-.197-.708-.515-.887-1.595-.899-6.444-3.632-7.999-4.508-.151-.085-.319-.128-.486-.128-.168 0-.335.043-.486.128-1.555.876-6.405 3.609-8 4.508m15.986 2.115v7.525l-6.75 3.722v-7.578zm-15 7.425v-7.458l6.75 3.75v7.511zm.736-8.769 6.764-3.813 6.801 3.834-6.801 3.716z" fillRule="nonzero" /></svg>} />

      <FooterServicePart title="CUSTOMER SERVICE" desc="We are available from monday to saturday (9AM - 6PM)" svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z" /></svg>} />

      <FooterServicePart title="SECURE PAYMENT" desc="Your payment information is processed securely." svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 16c0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723v2.277h-2v-2.277c-.596-.347-1-.985-1-1.723zm11-6v14h-18v-14h3v-4c0-3.313 2.687-6 6-6s6 2.687 6 6v4h3zm-13 0h8v-4c0-2.206-1.795-4-4-4s-4 1.794-4 4v4zm11 2h-14v10h14v-10z" /></svg>} />

      <FooterServicePart title="CONTACT US" desc="Need to contact us ? Just send us an e-mail to contact@peachmode.com" svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z" /></svg>} />
    </div>
  )
}


const FooterServicePart = (props) => {
  return (
    <div className="FooterServicePart">
      <div className="FooterServicePartImg">
        {props.svg}
      </div>
      <div className="FooterServicePartTitle">
        <h2>{props.title}</h2>
      </div>
      <div className="FooterServicePartDesc">
        <p>{props.desc}</p>
      </div>
    </div>
  )
}