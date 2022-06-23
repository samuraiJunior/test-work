import React from "react"
import s from "./header.module.scss"

const Header = () => {
  return (
    <header className={s.Header}>
      <div className={s.NavWrapper}>
        <div className={s.imgWrapper}>
          <span className={s.logoParts}>
            <img className={s.logoPart1} src="Polygon1.png" alt="logo" />
            <img className={s.logoPart2} src="Polygon.png" alt="logo" />
          </span>
          <h2>Agensy</h2>
        </div>
        <div className={s.LinksWrapper}>
          <span>About</span>
          <span>Services</span>
          <span>Pricing</span>
          <span>Blog</span>
        </div>
        <button>Contact</button>
      </div>
      <div className={s.Info}>
        <h1>Portfolio</h1>
        <p>Agency provides a full service range including technical skills, design, business<br /> understanding.</p>
      </div>
    </header>
  )
}

export default Header
