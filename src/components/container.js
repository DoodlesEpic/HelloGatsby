import React from "react"
import { Link } from "gatsby"
import styles from "./container.module.css"

const ListLink = ({ to, children }) => (
  <li className={styles.listLink}>
    <Link to={to}>{children}</Link>
  </li>
)

export default function Container({ children }) {
  return (
    <div className={styles.container}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>HelloGatsby</h3>
        </Link>
        <ul className={styles.linkList}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
