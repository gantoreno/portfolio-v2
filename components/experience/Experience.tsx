import classNames from "classnames"
import Paragraph from "../pragraph/Paragraph"

import styles from "./Experience.module.css"

type ExperienceProps = {
  year?: string
  company?: string
  position?: string
  children?: React.ReactNode
  compact?: boolean
}

const Experience: React.FC<ExperienceProps> = ({
  year,
  company,
  position,
  children,
  compact = false,
}) => {
  return (
    <div className={styles.experience}>
      {year && <div className={styles.year}>{year}</div>}
      <div
        className={classNames(styles.wrapper, {
          [styles.compact]: compact,
        })}
      >
        {company && <div className={styles.company}>{company}</div>}
        {position && <div className={styles.position}>{position}</div>}
        {children && (
          <div className={styles.description}>
            <Paragraph.Expandable>{children}</Paragraph.Expandable>
          </div>
        )}
      </div>
    </div>
  )
}

export default Experience
