import type { ImageProps } from "next/image"
import slugify from "slugify"
import Grid from "../grid/Grid"

import Spacer from "../spacer/Spacer"

import styles from "./Article.module.css"
import Figure from "../figure/Figure"
import Link from "next/link"

type ArticleProps = React.HTMLAttributes<HTMLDivElement>

const Article: React.FC<ArticleProps> = ({ children }) => {
  return <article className={styles.article}>{children}</article>
}

type ArticleTagProps = {
  children: string
}

const ArticleTag: React.FC<ArticleTagProps> = ({ children }) => {
  const slug = slugify(children).toLowerCase()

  return (
    <Link href={`/blog?tag=${slug}`} className={styles.tags}>
      <a>
        <span className={styles.tag}>{children}</span>
      </a>
    </Link>
  )
}

type ArticleThumbnailProps = {
  title: string
  duration: number
  description: string
  date: string
  link: string
  thumbnail: string | ImageProps["src"]
  tags: string[]
}

const ArticleThumbnail: React.FC<ArticleThumbnailProps> = ({
  title,
  duration,
  description,
  date,
  link,
  thumbnail,
  tags = [],
}) => {
  return (
    <article className={styles.container}>
      <Grid columns={[1, 2]}>
        <Link href={link} className={styles.thumbnailContainer}>
          <a>
            <Figure.Image
              className={styles.thumbnail}
              src={thumbnail}
              alt={`Link to ${link}`}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </a>
        </Link>
        <div className={styles.content}>
          <Link href={link} className={styles.link}>
            <a>
              <div className={styles.title}>
                <strong>{title}</strong>
              </div>
              <div className={styles.date}>
                {date} ({duration} min read)
              </div>
            </a>
          </Link>
          <div className={styles.tags}>
            {tags.length > 0 && <ArticleTag>{tags[0]}</ArticleTag>}
          </div>
        </div>
      </Grid>
    </article>
  )
}

const ArticleHero: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <Spacer bottom="var(--spacing-minor)">
      <Figure.Image
        src={src}
        alt={alt}
        className={styles.hero}
        layout="responsive"
        loading="lazy"
        objectFit="cover"
        objectPosition="center"
        width="100%"
        height="50px"
        placeholder="blur"
      />
    </Spacer>
  )
}

export default Object.assign(Article, {
  Thumbnail: ArticleThumbnail,
  Hero: ArticleHero,
  Tag: ArticleTag,
})
