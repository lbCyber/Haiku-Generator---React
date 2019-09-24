import React from 'react'
import '../css/header.css'

const refresh = () => {
  window.location.reload();
}

const Header = () => {
  return (
    <header>
      <div className="axoLogo">
        <div className="axolotl" onClick={refresh}></div>
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
            <a href="https://lintbox.com" className="topNavItem default_topNavItem">home</a>
            <a href="https://lintbox.com" className="topNavItem responsive_topNavItem">home</a>
            <p className="navDescription navItem1">take a gander at my other work!</p>
          </li>
          <li>
            <a href="https://lintbox.com#about" className="topNavItem default_topNavItem">who</a>
            <a href="https://lintbox.com#about" className="topNavItem responsive_topNavItem">about me</a>
            <p className="navDescription navItem2">who do dis?</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header