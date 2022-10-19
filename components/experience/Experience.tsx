import classNames from "classnames"

import Paragraph from "../pragraph/Paragraph"

import styles from "./Experience.module.css"

type ExperienceProps = {
  year?: string
  company?: string
  position?: string
  description?: string
  compact?: boolean
}

const Experience: React.FC<ExperienceProps> = ({
  year,
  company,
  position,
  description,
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
        {description && (
          <div className={styles.description}>
            <Paragraph.Expandable>{description}</Paragraph.Expandable>
          </div>
        )}
      </div>
    </div>
  )
}

export default Experience
