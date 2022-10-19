import classNames from "classnames"
import Link from "next/link"
import { BiLink } from "react-icons/bi"
import slugify from "slugify"

import styles from "./Heading.module.css"

type HeadingProps = {
  children: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  compact?: boolean
  light?: boolean
  linkable?: boolean
}

const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  compact = false,
  light = false,
  linkable = false,
  ...rest
}) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements
  const slug = slugify(children, {
    lower: true,
  })

  return (
    <Component
      id={linkable ? slug : undefined}
      className={classNames(styles.heading, styles[`level-${level}`], {
        [styles.compact]: compact,
        [styles.light]: light,
      })}
      {...rest}
    >
      {linkable ? (
        <>
          <BiLink className={styles.icon} size={`${2.5 - level * 0.25}rem`} />
          <Link href={`#${slug}`}>
            <a>{children}</a>
          </Link>
        </>
      ) : (
        children
      )}
    </Component>
  )
}

export default Heading
