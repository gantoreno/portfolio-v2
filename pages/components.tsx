import type { NextPage } from "next"

import Link from "../components/link/Link"
import Button from "../components/button/Button"
import Container from "../components/container/Container"
import Heading from "../components/heading/Heading"
import Paragraph from "../components/pragraph/Paragraph"
import Code from "../components/code/Code"
import Quote from "../components/quote/Quote"
import Timeline from "../components/timeline/Timeline"
import Experience from "../components/experience/Experience"
import Section from "../components/section/Section"
import Project from "../components/project/Project"
import Repository from "../components/repository/Repository"
import Article from "../components/article/Article"
import Figure from "../components/figure/Figure"

import img from "../assets/img/sample.jpg"
import Navbar from "../components/navbar/Navbar"
import Page from "../components/page/Page"

const Components: NextPage = () => {
  return (
    <Page>
      <Navbar />
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
            code={`console.log("Hello, world!")`}
            language="javascript"
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
            picture={img}
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
          <Figure
            src={img}
            alt="figure"
            caption="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, mollitia."
          />
        </Section>
        <Section>
          <Timeline>
            <Timeline.Item>
              <Experience year="Dec 2022" company="Company" position="Position">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, architecto aspernatur dolore, non omnis dignissimos
                tenetur incidunt officiis neque veniam mollitia nulla a.
                Veritatis impedit, aspernatur aperiam non omnis expedita?
              </Experience>
            </Timeline.Item>
            <Timeline.Item>
              <Experience year="Jul 2022" company="Company" position="Position">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, architecto aspernatur dolore, non omnis dignissimos
                tenetur incidunt officiis neque veniam mollitia nulla a.
                Veritatis impedit, aspernatur aperiam non omnis expedita?
              </Experience>
            </Timeline.Item>
            <Timeline.Item>
              <Experience year="Jan 2022" position="Position">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, architecto aspernatur dolore, non omnis dignissimos
                tenetur incidunt officiis neque veniam mollitia nulla a.
                Veritatis impedit, aspernatur aperiam non omnis expedita?
              </Experience>
            </Timeline.Item>
            <Timeline.Item>
              <Experience year="Dec 2020" compact>
                I started coding. {"🎉"}
              </Experience>
            </Timeline.Item>
          </Timeline>
        </Section>
        <Section>
          <Article
            title="Article"
            duration={10}
            date="Jul 17, 2022"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            link="#"
          />
          <Article
            title="Article"
            duration={10}
            date="Jul 17, 2022"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            link="#"
          />
        </Section>
      </Container>
    </Page>
  )
}

export default Components
