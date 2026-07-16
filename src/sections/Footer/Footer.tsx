import Container from '@/components/Container/Container'
import NavLink from '@/components/NavLink/NavLink'
import IconLink from '@/components/IconLink/IconLink'
import logo from '@/assets/dona1.png'
import styles from './Footer.module.css'

function Header() {
  return (
    <Container>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.heroLogo} />

        <nav className={styles.nav} aria-label="Primary">
          <NavLink />
        </nav>

        <ul className={styles.socials} aria-label="Social links">
          <li>
            <IconLink />
          </li>
        </ul>
      </header>
    </Container>
  )
}

export default Header
