import Container from '@/components/Container/Container'
import Button from '@/components/Button/Button'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <h1 className={styles.title}>Your headline goes here</h1>
        <p className={styles.subtitle}>
          Replace this copy and layout with the Figma hero section — spacing,
          type scale, and colors already pull from the design tokens.
        </p>
        <div className={styles.actions}>
          <Button variant="primary">Primary action</Button>
          <Button variant="secondary">Secondary action</Button>
        </div>
      </Container>
    </section>
  )
}

export default Hero
