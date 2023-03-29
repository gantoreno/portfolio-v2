import { Components } from "@mdx-js/react/lib"
import Image, { ImageProps } from "next/image"
import reactNodeToString from "react-node-to-string"

import Code from "../code/Code"
import Figure from "../figure/Figure"
import Header from "../header/Header"
import Heading from "../heading/Heading"
import Link from "../link/Link"
import Paragraph from "../pragraph/Paragraph"
import Quote from "../quote/Quote"
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
}

const ArticleThumbnail: React.FC<ArticleThumbnailProps> = ({
  title,
  duration,
  description,
  date,
  link,
}) => {
  return (
    <article className={styles.article}>
      <div className={styles.title}>
        <Heading level={6} compact>
          {title}
        </Heading>
        <span className={styles.duration}> ({duration} min read)</span>
      </div>
      <div className={styles.date}>{date}</div>
      <div className={styles.description}>{description}</div>
      <Link href={link}>Read</Link>
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

const components: Components = {
  h1: ({ children }) => (
    <Heading level={1} linkable>
      {reactNodeToString(children)}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading level={2} linkable>
      {reactNodeToString(children)}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading level={3} linkable>
      {reactNodeToString(children)}
    </Heading>
  ),
  p: Paragraph,
  a: Link,
  blockquote: Quote,
  code: ({ children }) => <Code>{children}</Code>,
  pre: ({ children }) => {
    const code = reactNodeToString(children)
    const language = (children as React.ReactElement)?.props?.className?.split(
      "-"
    )?.[1] as string

    return <Code.Block code={code} language={language} />
  },
  img: ({ src, alt }) => <Figure.Image src={src} alt={alt} />,
}

// eslint-disable-next-line react/display-name
export const withLayout = (A: typeof import("*.mdx")) => () => {
  // @ts-expect-error
  const title = A.title
  // @ts-expect-error
  const author = A.author
  // @ts-expect-error
  const date = new Date(A.date).toDateString()
  // @ts-expect-error
  const duration = A.duration
  // @ts-expect-error
  const hero = A.hero

  return (
    <Article>
      <Header>
        <ArticleHero src={hero} />
        <Spacer bottom="var(--spacing-minor)">
          <strong>{author}</strong> • {date} • {duration} min read
        </Spacer>
        <Heading level={1} compact>
          {title}
        </Heading>
      </Header>
      <A.default components={components} />
    </Article>
  )
}

export default Object.assign(Article, {
  Thumbnail: ArticleThumbnail,
  Hero: ArticleHero,
})
