import React from 'react'
import '../css/header.min.css'

const Header = () => {
  return (
    <header>
      <div className="axoLogo">
        <div className="axolotl"></div>
        <div className="bubbles bub1"></div>
        <div className="bubbles bub2"></div>
        <div className="bubbles bub3"></div>
        <div className="bubbles bub4"></div>
        <div className="bubbles bub5"></div>
        <div className="bubbles bub6"></div>
        <div className="bubbles bub7"></div>
        <div className="bubbles bub8"></div>
      </div>
      <h4>Lintbox.</h4>
      <nav className="topNav">
        <ul>
          <li>
            <a href="index.html" className="topNavItem default_topNavItem">home</a>
            <a href="index.html" className="topNavItem responsive_topNavItem">home</a>
            <p className="navDescription navItem1">i wanna make another poem</p>
          </li>
          <li>
            <a href="about.html" className="topNavItem default_topNavItem">who</a>
            <a href="about.html" className="topNavItem responsive_topNavItem">about me</a>
            <p className="navDescription navItem2">who do dis?</p>
          </li>
          <li>
            <a href="contact.html" className="topNavItem default_topNavItem">hello</a>
            <a href="contact.html" className="topNavItem responsive_topNavItem">contact</a>
            <p className="navDescription navItem3">let's talk</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header