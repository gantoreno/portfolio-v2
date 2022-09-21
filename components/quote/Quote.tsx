import classNames from "classnames"
import styles from "./Quote.module.css"

type QuoteProps = {
  children: React.ReactNode
  icon?: React.ReactNode
  compact?: boolean
}

const Quote: React.FC<QuoteProps> = ({ children, icon, compact = false }) => {
  return (
    <div
      className={classNames(styles.quote, {
        [styles.compact]: compact,
      })}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.text}>{children}</div>
    </div>
  )
}

export default Quote
