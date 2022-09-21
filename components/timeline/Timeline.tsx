import styles from "./Timeline.module.css"

type TimelineProps = {
  children: React.ReactNode
}

type TimelineItemProps = {
  children: React.ReactNode
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return <div className={styles.timeline}>{children}</div>
}

const TimelineItem: React.FC<TimelineItemProps> = ({ children }) => {
  return <div className={styles.timelineItem}>{children}</div>
}

export default Object.assign(Timeline, {
  Item: TimelineItem,
})
