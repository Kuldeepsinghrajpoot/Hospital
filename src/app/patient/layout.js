import React from 'react'

import Nav from './index'

export default function Layout({children}){

  return (
    <>
   
    <Nav/>
    {children}
    </>

  )
}
