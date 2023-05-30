import React from 'react'
import { LeaderTitle } from './LeaderTitle'


export const OnlineDesigner = (props) => {
  return (
    <div className='OnlineDesigner'>
      <LeaderTitle text={props.title} />
      <p>{props.desc}</p>
    </div>
  )
}