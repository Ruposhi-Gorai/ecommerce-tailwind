import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

export default function RootLayout() {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>

)
}
