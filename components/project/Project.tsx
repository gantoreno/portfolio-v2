import Image, { StaticImageData } from "next/image"
import Grid from "../grid/Grid"
import Heading from "../heading/Heading"
import Link from "../link/Link"
import Paragraph from "../pragraph/Paragraph"
import styles from "./Project.module.css"

type ProjectProps = {
  title: string
  description: string
  picture: StaticImageData
  alt: string
  link: string
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  picture,
  alt,
  link,
}) => {
  return (
    <div className={styles.project}>
      <Grid columns={[2, 1]}>
        <div className={styles.information}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>
            <Paragraph.Expandable at={100}>{description}</Paragraph.Expandable>
          </div>
          <Link href={link}>View</Link>
        </div>
        <div className={styles.pictureContainer}>
          <div className={styles.picture}>
            <Image src={picture} layout="fill" objectFit="cover" alt={alt} />
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default Project
