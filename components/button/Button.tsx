import styles from "./Button.module.css"

type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
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
