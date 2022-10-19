import styles from "./Button.module.css"

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  disabled = false,
  ...rest
}) => {
  return (
    <button className={styles.button} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}

export default Button
