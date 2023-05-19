import type { StaticImageData } from "next/image"

import Grid from "../grid/Grid"
import Link from "../link/Link"
import Paragraph from "../paragraph/Paragraph"

import styles from "./Project.module.css"
import Figure from "../figure/Figure"

type ProjectProps = {
  title: string
  description: string
  picture: string | StaticImageData
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
            <Paragraph compact>{description}</Paragraph>
          </div>
          <Link href={link} target="_blank">
            View
          </Link>
        </div>
        <div className={styles.pictureContainer}>
          <div className={styles.picture}>
            <Figure.Image
              src={picture}
              layout="fill"
              objectFit="cover"
              loading="lazy"
              alt={alt}
              placeholder="blur"
            />
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default Project
