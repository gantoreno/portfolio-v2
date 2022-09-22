import classNames from "classnames"
import Image, { StaticImageData } from "next/image"

import styles from "./Figure.module.css"

type FigureProps = {
  src: StaticImageData
  alt: string
  caption: React.ReactNode
  compact?: boolean
  full?: boolean
}

const Figure: React.FC<FigureProps> = ({
  src,
  alt,
  caption,
  compact = false,
  full = false,
}) => {
  return (
    <figure
      className={classNames(styles.figure, {
        [styles.compact]: compact,
      })}
    >
      <Image
        src={src}
        alt={alt}
        className={classNames(styles.image, {
          [styles.full]: full,
        })}
      />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  )
}

export default Figure
