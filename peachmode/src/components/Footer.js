import React from 'react'
import { NewsLetter } from './NewsLetter'
import { FooterService } from './FooterService'
import { MainFooter } from './MainFooter'
import { Route, Routes } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='Footer'>
      <FooterService />
      <MainFooter />
    </div>
  )
}