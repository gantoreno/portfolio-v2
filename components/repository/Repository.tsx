import Heading from "../heading/Heading"
import Link from "../link/Link"
import Paragraph from "../pragraph/Paragraph"

import styles from "./Repository.module.css"

type RepositoryProps = {
  name: string
  description: string
  url: string
}

const Repository: React.FC<RepositoryProps> = ({ name, description, url }) => {
  return (
    <div className={styles.repository}>
      <div>
        <div className={styles.name}>
          <Heading level={6} compact>
            {name}
          </Heading>
        </div>
        <div className={styles.description}>
          <Paragraph compact>{description}</Paragraph>
        </div>
      </div>
      <Link href={url}>View</Link>
    </div>
  )
}

export default Repository
