import React from 'react'
import TopNav from '../components/TopNav'
import NavBar from '../components/NavBar'

function Header() {
  return (
  <header className='sticky-top'>
  <TopNav />
  <NavBar/>
  </header>

  )
}

export default Header