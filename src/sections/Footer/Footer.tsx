import Container from '@/components/Container/Container'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <Container className={styles.inner}>
        <span>&copy; {new Date().getFullYear()} Your Company</span>
        <nav className={styles.links}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </nav>
      </Container>
    </footer>
  )
}

export default Footer
