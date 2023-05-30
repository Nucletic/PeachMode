import React from 'react'
import { Link } from 'react-router-dom'
export const AnimatedInputs = (props) => {
  return (
    <div className='LoginInputs'>
      <input type={props.type} required />
      <span className="LoginInputSpan">{props.label}</span>
      {props.link ? (<Link to={props.url}>{props.LinkText}</Link>) : ""}
    </div>
  )
}