import React from "react"
import styles from "./Timeline.module.css"

const Timeline: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return <div className={styles.timeline}>{children}</div>
}

const TimelineItem: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return <div className={styles.timelineItem}>{children}</div>
}

export default Object.assign(Timeline, {
  Item: TimelineItem,
})
