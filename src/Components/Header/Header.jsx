import React from 'react'
import Newsbar from './Newsbar'
import Navbar from './Navbar'
import Mainnav from './Mainnav'

const Header = () => {
  return (
    <>
        <header>
            <Newsbar/>
            <Mainnav/>
            <Navbar/>
        </header>
    </>
  )
}

export default Header;