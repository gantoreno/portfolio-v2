import Image, { ImageProps } from "next/image"

import Heading from "../heading/Heading"
import Link from "../link/Link"
import Spacer from "../spacer/Spacer"

import styles from "./Article.module.css"

type ArticleProps = React.HTMLAttributes<HTMLDivElement>

const Article: React.FC<ArticleProps> = ({ children }) => {
  return <article className={styles.article}>{children}</article>
}

type ArticleThumbnailProps = {
  title: string
  duration: number
  description: string
  date: string
  link: string
  thumbnail: string | ImageProps["src"]
}

const ArticleThumbnail: React.FC<ArticleThumbnailProps> = ({
  title,
  duration,
  description,
  date,
  link,
  thumbnail,
}) => {
  return (
    <article className={styles.container}>
      <Image
        className={styles.thumbnail}
        src={thumbnail}
        alt=""
        width="120px"
        height="120px"
        layout="intrinsic"
        objectFit="cover"
        objectPosition="center"
      />
      <div className={styles.content}>
        <div className={styles.title}>
          <strong>{title}</strong>
          <span className={styles.duration}> ({duration} min read)</span>
        </div>
        <div className={styles.date}>{date}</div>
        <div className={styles.description}>{description}</div>
        <Link href={link}>Read</Link>
      </div>
    </article>
  )
}

const ArticleHero: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <Spacer bottom="var(--spacing-minor)">
      <Image
        src={src}
        alt={alt}
        className={styles.hero}
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
        width="100%"
        height="50px"
      />
    </Spacer>
  )
}

export default Object.assign(Article, {
  Thumbnail: ArticleThumbnail,
  Hero: ArticleHero,
})
