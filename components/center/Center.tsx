import classNames from "classnames"

import styles from "./Center.module.css"

type CenterProps = {
  axis: "horizontal" | "vertical" | "both"
  children: React.ReactNode
}

const Center: React.FC<CenterProps> = ({ axis, children }) => {
  return (
    <div
      className={classNames(styles.center, {
        [styles.horizontal]: axis === "horizontal" || axis === "both",
        [styles.vertical]: axis === "vertical" || axis === "both",
      })}
    >
      {children}
    </div>
  )
}

export default Center
