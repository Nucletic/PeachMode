import React from 'react'

export const NewsLetter = () => {
  return (
    <div className="NewsLetter">
      <form action="">
        <div className="NewsLetterTitle">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        </div>
        <div className="NewsLetterInputs">
          <input type="text" />
          <label id='NewsLetterLabel'>
            Your e-mail
          </label>
          <button type="submit">SUBSCRIBE</button>
        </div>
      </form>
    </div>
  )
}
