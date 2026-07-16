import { useState, type FormEvent } from 'react'
import Container from '@/components/Container/Container'
import Button from '@/components/Button/Button'
import planeLeft from '@/assets/Paper_Plane_PNG_Clip_Art_Image-1492395217 1.png'
import planeRight from '@/assets/Paper_Plane_PNG_Clip_Art_Image-1492395217 2.png'
import trailLeft from '@/assets/Vector 7.png'
import trailRight from '@/assets/Vector 8.png'
import styles from './Contact.module.css'

const inquiryTypes = [
  'Partnership',
  'Sponsorship',
  'Media / Press',
  'General question',
]

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [inquiryType, setInquiryType] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section id="contact" className={styles.contact}>
      {/* Left decoration: plane + dashed trail */}
      <div className={styles.decorLeft} aria-hidden="true">
        <img src={trailLeft} alt="" className={styles.trailLeft} />
        <img src={planeLeft} alt="" className={styles.planeLeft} />
      </div>

      {/* Right decoration: plane + dashed trail */}
      <div className={styles.decorRight} aria-hidden="true">
        <img src={trailRight} alt="" className={styles.trailRight} />
        <img src={planeRight} alt="" className={styles.planeRight} />
      </div>

      <Container className={styles.inner}>
        {/* 1. First part — heading */}
        <div className={styles.first}>
          <h2 className={styles.title}>
            <span className={styles.titleAccent}>CONTACT</span> ME
          </h2>
          <p className={styles.subtitle}>
            Claim exclusive bonuses from my partners!
          </p>
        </div>

        {/* 2. Contact me part — form */}
        <div className={styles.formPart}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formIntro}>
              <h3 className={styles.formTitle}>Your message</h3>
              <p className={styles.formHint}>
                Take a quick look at our{' '}
                <a href="#faq" className={styles.formHintLink}>
                  Frequently Asked Questions
                </a>{' '}
                before reaching out — you might find the solution right away and
                save valuable time.
              </p>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>Your Name / Company</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Your personal or company name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Email Address</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Inquiry Type</span>
              <select
                className={styles.select}
                name="inquiryType"
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
              >
                <option value="" disabled>
                  Select inquiry type
                </option>
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Message</span>
              <textarea
                className={styles.textarea}
                name="message"
                placeholder="Type your question here..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>

            <Button type="submit" variant="primary" className={styles.submit}>
              Send Message
            </Button>
          </form>
        </div>

        {/* 3. Last part — bottom glow / curve */}
        {/* <div className={styles.last} aria-hidden="true" /> */}
      </Container>
    </section>
  )
}

export default Contact
