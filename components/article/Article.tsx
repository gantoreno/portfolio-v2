import Heading from "../heading/Heading"
import Link from "../link/Link"
import styles from "./Article.module.css"

type ArticleProps = {
  title: string
  duration: number
  description: string
  date: string
  link: string
}

const Article: React.FC<ArticleProps> = ({
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
          {title} <span className={styles.duration}>({duration} min read)</span>
        </Heading>
      </div>
      <div className={styles.date}>{date}</div>
      <div className={styles.description}>{description}</div>
      <Link href={link}>Read</Link>
    </article>
  )
}

export default Article
