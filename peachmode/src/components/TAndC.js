import React, { useEffect } from 'react'
import { OnlineDesigner } from './OnlineDesigner'

export const TAndC = () => {
  
  useEffect(() => {
    document.title = 'Terms of service';
  }, [])
  
  
  return (
    <div className='Login'>
      <OnlineDesigner title="Terms of service" desc='The website www.peachmode.com ("Peachmode.com") is operated by Tulsyan Retail Pvt. Ltd.
       ("Peachmode" or "us" or "we" or "our"), having its registered office located F13, Fourth Floor, Pinnacle Business Park, Andheri East,
        Mumbai - 400093, Maharashtra, India. Please read the Conditions of Use document carefully before using the Peachmode.in website. By
         using the Peachmode.in website, you signify your agreement to be bound by Peachmodes Conditions of Use.' />

    </div>
  )
}
