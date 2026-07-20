import Container from '@/components/Container/Container'
import NavLink from '@/components/NavLink/NavLink'
import IconLink from '@/components/IconLink/IconLink'
import logo from '@/assets/Dona2.png'
import styles from './Footer.module.css'

function Header() {
  return (
    <Container>
      <footer className={styles.footer}>
        <a href="/">
          <img src={logo} alt="Logo" className={styles.heroLogo} />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <NavLink />
        </nav>

        <ul className={styles.socials} aria-label="Social links">
          <li>
            <IconLink />
          </li>
        </ul>
      </footer>

      <p className={styles.copyright}>
        At Solana Casinos, we promote gambling as a form of entertainment, not a source of income. We encourage all users to play responsibly and within their financial limits. Gambling should.
      </p>
    </Container>
  )
}

export default Header
