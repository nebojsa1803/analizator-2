import { useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { externalLinks, links } from './links'
import NavIcon from './NavIcon/NavIcon'
import styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksUlRef = useRef(null)

  const toggleLinks = () => setShowLinks(!showLinks)

  // if showLinks is true give me height of ul and that height will be height of links container div
  // if showLinks is false then height of links container will be 0
  const linkStyles = {
    height: showLinks
      ? `${linksUlRef.current.getBoundingClientRect().height}px`
      : '0px',
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to='/' className={styles.logo}>
            <NavIcon /> <span>Тест</span>Анализатор
          </Link>
          <button onClick={toggleLinks} className={styles.bars}>
            <FaBars />
          </button>
        </div>

        {/*this wrapper div for ul is important, without it links will be 0px, not container, container height is 0 not links height */}
        <div
          className={styles.linksContainer}
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className={styles.links} ref={linksUlRef}>
            {links.map((link) => {
              const { id, text, url } = link
              return (
                //onClick added later, withdraw div after click
                <li key={id} onClick={toggleLinks}>
                  <NavLink
                    to={url}
                    style={({ isActive }) => {
                      return { color: isActive && '#fff' }
                    }}
                  >
                    {text}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
        {/* external pages, school and facebook */}
        <ul className={styles.externalLinksIcons}>
          {externalLinks.map((link) => {
            const { id, url, icon } = link
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
