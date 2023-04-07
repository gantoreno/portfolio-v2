import Image from "next/image"
import Heading from "../heading/Heading"
import styles from "./Og.module.css"

import avatar from "../../assets/img/avatar.png"
import Paragraph from "../pragraph/Paragraph"

type OgProps = {
  title: string
  description: string
  duration: string
}

const Og: React.FC<OgProps> = ({ title, description, duration }) => {
  return (
    <div className={styles.og}>
      <div className={styles.wrapper}>
        <Image src={avatar} alt="Avatar" width={360} height={360} />
        <div className={styles.meta}>
          <Heading level={1} compact>
            {title}
          </Heading>
          <Paragraph compact>
            {description} ({duration} min read)
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

export default Og
