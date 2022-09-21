import classNames from "classnames"

import styles from "./Heading.module.css"

type HeadingProps = {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  compact?: boolean
  light?: boolean
}

const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  compact = false,
  light = false,
  ...rest
}) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Component
      className={classNames(styles.heading, styles[`level-${level}`], {
        [styles.compact]: compact,
        [styles.light]: light,
      })}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Heading
