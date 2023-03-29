import type { NextPage } from "next"

import Article from "../components/article/Article"
import Button from "../components/button/Button"
import Code from "../components/code/Code"
import Container from "../components/container/Container"
import Experience from "../components/experience/Experience"
import Figure from "../components/figure/Figure"
import Heading from "../components/heading/Heading"
import Link from "../components/link/Link"
import Paragraph from "../components/pragraph/Paragraph"
import Project from "../components/project/Project"
import Quote from "../components/quote/Quote"
import Repository from "../components/repository/Repository"
import Section from "../components/section/Section"
import Timeline from "../components/timeline/Timeline"

const Components: NextPage = () => {
  return (
    <>
      <Container>
        <Section>
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
          <Heading level={6}>Heading 6</Heading>
        </Section>
        <Section>
          <Paragraph>
            This is a paragraph, lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolorum quia animi nam quibusdam sit tenetur rem,
            repellendus amet iste harum iure delectus id ut velit adipisci, eum
            ipsum sed doloribus.
          </Paragraph>
        </Section>
        <Section>
          <Link href="#">This is a link</Link>
        </Section>
        <Section>
          <Quote icon="💬">
            This is a quote. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. In, ad. Ullam esse sequi blanditiis accusantium fugit illo
            architecto quos in.
          </Quote>
        </Section>
        <Section>
          <Code>some-code</Code>
        </Section>
        <Section>
          <Code.Block
            code={`import styles from "./Button.module.css"

type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
}
            
const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  ...rest
}) => {
  return (
    <button className={styles.button} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}
            
export default Button`}
            language="tsx"
          />
        </Section>
        <Section>
          <Button>Button</Button>
        </Section>
        <Section>
          <Button disabled>Disabled</Button>
        </Section>
        <Section>
          <Project
            title="Project 1"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptates voluptatum enim porro molestiae sint officiis eos libero nam expedita harum ea neque eaque eum deserunt, commodi a. Asperiores, nam?"
            picture="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
            alt="Project 1"
            link="#"
          />
        </Section>
        <Section>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "1rem",
            }}
          >
            <Repository
              name="repo-one"
              description="ℹ️ Lorem ipsum dolor sit amet"
              url="#"
            />
            <Repository
              name="repo-one"
              description="ℹ️ Lorem ipsum dolor sit amet"
              url="#"
            />
          </div>
        </Section>
        <Section>
          <Figure>
            <Figure.Image
              src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
              alt="Figure"
            />
            <Figure.Caption>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              mollitia.
            </Figure.Caption>
          </Figure>
        </Section>
        <Section>
          <Timeline>
            <Timeline.Item>
              <Experience
                year="Dec 2022"
                company="Company"
                position="Position"
                description="Lorem ipsum dolor sit amet."
              />
            </Timeline.Item>
            <Timeline.Item>
              <Experience
                year="Jul 2022"
                company="Company"
                position="Position"
                description="Lorem ipsum dolor sit amet."
              />
            </Timeline.Item>
            <Timeline.Item>
              <Experience
                year="Jan 2022"
                position="Position"
                description="Lorem ipsum dolor sit amet."
              />
            </Timeline.Item>
            <Timeline.Item>
              <Experience
                year="Dec 2020"
                description="I started coding. 🎉"
                compact
              />
            </Timeline.Item>
          </Timeline>
        </Section>
        <Section>
          <Article.Thumbnail
            title="Article"
            duration={10}
            date="Jul 17, 2022"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            link="#"
            thumbnail="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
          />
          <Article.Thumbnail
            title="Article"
            duration={10}
            date="Jul 17, 2022"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            link="#"
            thumbnail="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
          />
        </Section>
      </Container>
    </>
  )
}

export default Components
