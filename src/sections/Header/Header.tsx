import {
  FaGift,
  FaEnvelope,
  FaTwitch,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaLink,
} from 'react-icons/fa6'
import Container from '@/components/Container/Container'
import NavLink from '@/components/NavLink/NavLink'
import IconLink from '@/components/IconLink/IconLink'
import logo from '@/assets/dona1.png'
import styles from './Header.module.css'


const socialLinks = [
  { label: 'Twitch', href: '#', icon: FaTwitch },
  { label: 'YouTube', href: '#', icon: FaYoutube },
  { label: 'Instagram', href: '#', icon: FaInstagram, highlighted: true },
  { label: 'TikTok', href: '#', icon: FaTiktok },
  { label: 'X', href: '#', icon: FaXTwitter },
  { label: 'Linktree', href: '#', icon: FaLink },
]

function Header() {
  return (
    <Container className={styles.container}>
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

