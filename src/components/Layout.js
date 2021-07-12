import * as React from 'react'
import { Link } from 'gatsby'
import { container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText } from '../styles/layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout