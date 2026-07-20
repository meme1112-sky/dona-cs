import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type SharedProps = {
  variant?: 'primary' | 'secondary'
  className?: string
  children?: ReactNode
}

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: undefined
  }

type ButtonAsLink = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

function Button({ variant = 'primary', className, ...rest }: ButtonProps) {
  const classNames = className
    ? `${styles.button} ${styles[variant]} ${className}`
    : `${styles.button} ${styles[variant]}`

  if ('href' in rest && rest.href) {
    const { href, ...linkRest } = rest
    return <a href={href} className={classNames} {...(linkRest as AnchorHTMLAttributes<HTMLAnchorElement>)} />
  }

  return <button className={classNames} {...(rest as ButtonAsButton)} />
}

export default Button
