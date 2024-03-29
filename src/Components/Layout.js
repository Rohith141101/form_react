import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children,logout}) => {
  return (
    <>
    <Navbar logout={logout}/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout