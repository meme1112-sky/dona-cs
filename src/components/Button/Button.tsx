import type { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

function Button({ variant = 'primary', className, ...rest }: ButtonProps) {
  const variantClass = variant === 'secondary' ? styles.secondary : styles.primary
  return (
    <button
      className={className ? `${styles.button} ${variantClass} ${className}` : `${styles.button} ${variantClass}`}
      {...rest}
    />
  )
}

export default Button
