'use client'
import React from 'react'
// import NextNProgress from 'nextjs-progressbar';
import Nav from './index'

export default function Layout({children}){

  return (
    <>
     {/* <NextNProgress /> */}
    <Nav/>
    {children}
    </>

  )
}
