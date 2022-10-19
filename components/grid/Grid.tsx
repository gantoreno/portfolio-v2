import styles from "./Grid.module.css"

type GridProps = React.HTMLAttributes<HTMLElement> & {
  columns: Array<number>
}

const Grid: React.FC<GridProps> = ({ columns, children }) => {
  const parseColumns = (columns: Array<number>): string => {
    return columns.map((column) => `${column}fr`).join(" ")
  }

  return (
    <div
      className={styles.grid}
      style={{ gridTemplateColumns: parseColumns(columns) }}
    >
      {children}
    </div>
  )
}

export default Grid
