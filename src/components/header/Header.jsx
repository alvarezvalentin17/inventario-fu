import React from 'react'
import './Header.css'
import image from '../../asset/img/logo.png'

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand ms-3" href="#"><img src={image} alt="Logo FU" width={160} height={60} /></div>
    </nav>
  )
}

export default Header