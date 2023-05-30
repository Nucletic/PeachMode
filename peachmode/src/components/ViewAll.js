import React from 'react'
import { Link } from 'react-router-dom'
export const ViewAll = (props) => {
  return (
    <Link to={'#'} className='ViewAllBtn'>{props.text}</Link>
  )
}

ViewAll.defaultProps = {
  text: "VIEW ALL"
}