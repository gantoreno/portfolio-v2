import classNames from "classnames"
import Image, { ImageProps, StaticImageData } from "next/image"

import styles from "./Figure.module.css"

type FigureProps = {
  children: React.ReactNode
  compact?: boolean
}

const Figure: React.FC<FigureProps> = ({ children, compact = false }) => {
  return (
    <figure
      className={classNames(styles.figure, {
        [styles.compact]: compact,
      })}
    >
      {children}
    </figure>
  )
}

type FigureImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  full?: boolean
}

const FigureImage: React.FC<FigureImageProps> = ({
  src,
  alt,
  full = false,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(styles.image, {
        [styles.full]: full,
      })}
    />
  )
}

type FigureCaptionProps = {
  children: React.ReactNode
}

const FigureCaption: React.FC<FigureCaptionProps> = ({ children }) => {
  return <figcaption className={styles.caption}>{children}</figcaption>
}

export default Object.assign(Figure, {
  Image: FigureImage,
  Caption: FigureCaption,
})
