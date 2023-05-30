import React from 'react'
import { Link } from 'react-router-dom'

export const BigPinkBtn = (props) => {
  return (
    <Link to={props.url} style={{ width: `${props.width}` }}><button type={props.type}>{props.text}</button></Link>
  )
}
BigPinkBtn.defaultProps = {
  url: '#'
}