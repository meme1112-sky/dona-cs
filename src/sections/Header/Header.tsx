import Container from '@/components/Container/Container'
import Button from '@/components/Button/Button'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <span className={styles.logo}>Logo</span>
        <nav className={styles.nav}>
          <a href="#features">Features</a>
          <a href="#footer">Contact</a>
        </nav>
        <Button variant="secondary">Get started</Button>
      </Container>
    </header>
  )
}

export default Header
