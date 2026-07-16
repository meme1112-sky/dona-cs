import { useEffect, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import Container from '@/components/Container/Container'
import NavLink from '@/components/NavLink/NavLink'
import IconLink from '@/components/IconLink/IconLink'
import logo from '@/assets/dona1.png'
import styles from './Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  return (
    <Container className={styles.wrapper}>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.heroLogo} />

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <div
          id="mobile-menu"
          className={isMenuOpen ? `${styles.menu} ${styles.menuOpen}` : styles.menu}
        >
          <nav className={styles.nav} aria-label="Primary">
            <NavLink />
          </nav>

          <ul className={styles.socials} aria-label="Social links">
            <li>
              <IconLink />
            </li>
          </ul>
        </div>
      </header>

      {isMenuOpen ? (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        />
      ) : null}
    </Container>
  )
}

export default Header
