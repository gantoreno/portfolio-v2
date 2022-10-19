import classNames from "classnames"

import styles from "./Quote.module.css"

type QuoteProps = React.QuoteHTMLAttributes<HTMLQuoteElement> & {
  icon?: React.ReactNode
  compact?: boolean
}

const Quote: React.FC<QuoteProps> = ({
  children,
  icon,
  compact = false,
  ...rest
}) => {
  return (
    <blockquote
      className={classNames(styles.quote, {
        [styles.compact]: compact,
      })}
      {...rest}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.text}>{children}</div>
    </blockquote>
  )
}

export default Quote
