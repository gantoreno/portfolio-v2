import classNames from "classnames"
import { useState } from "react"

import styles from "./Paragraph.module.css"

type ParagraphProps = {
  children: React.ReactNode
  compact?: boolean
}

type ExpandableParagraphProps = ParagraphProps & {
  at?: number
}

const Paragraph: React.FC<ParagraphProps> = ({ children, compact = false }) => {
  return (
    <p
      className={classNames(styles.paragraph, {
        [styles.compact]: compact,
      })}
    >
      {children}
    </p>
  )
}

const ExpandableParagraph: React.FC<ExpandableParagraphProps> = ({
  at = 150,
  children,
}) => {
  const text = children as string
  const shouldWrap = text.length > at

  const [showReadMore, setShowReadMore] = useState(shouldWrap)

  const toggleReadMore = () => setShowReadMore(!showReadMore)

  return (
    <p className={styles.expandable}>
      {showReadMore ? text.slice(0, at) + "..." : text}
      {shouldWrap && (
        <button
          onClick={toggleReadMore}
          className={classNames(styles.showMore, {
            [styles.readLess]: !showReadMore,
          })}
        >
          {showReadMore ? "read more" : "show less"}
        </button>
      )}
    </p>
  )
}

export default Object.assign(Paragraph, {
  Expandable: ExpandableParagraph,
})
