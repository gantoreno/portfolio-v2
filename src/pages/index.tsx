import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import Article from "../components/article/Article"
import Center from "../components/center/Center"
import Experience from "../components/experience/Experience"
import Grid from "../components/grid/Grid"
import Header from "../components/header/Header"
import Heading from "../components/heading/Heading"
import Link from "../components/link/Link"
import Main from "../components/main/Main"
import Paragraph from "../components/paragraph/Paragraph"
import Project from "../components/project/Project"
import Quote from "../components/quote/Quote"
import Repository from "../components/repository/Repository"
import Section from "../components/section/Section"
import Spacer from "../components/spacer/Spacer"
import Timeline from "../components/timeline/Timeline"

import avatar from "../assets/img/avatar.webp"
import codework from "../assets/img/codework.webp"
import insightt from "../assets/img/insightt.webp"
import resident from "../assets/img/resident.webp"
import resivenca from "../assets/img/resivenca.webp"
import sny from "../assets/img/sny.webp"
import totalcom from "../assets/img/totalcom.webp"

import { getPostsWithMetadata, PostMetadata } from "../lib/mdx"
import { resolveImage } from "./blog/[slug]"

type HomeProps = {
  posts: PostMetadata[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Gabriel Moreno - Welcome</title>
        <meta
          name="description"
          content="Software engineer, full-stack web developer"
        />
        <meta name="keywords" content="portfolio, software engineer" />
      </Head>
      <Header>
        <Grid columns={[2, 1]}>
          <Center axis="vertical">
            <div>
              <Spacer bottom="2rem">
                <Heading level={1} compact>
                  Hello there! I&apos;m Gabriel
                </Heading>
              </Spacer>
              <Heading level={2} compact light>
                Software Engineer
              </Heading>
            </div>
          </Center>
          <Center axis="vertical">
            <Image
              src={avatar}
              alt="Avatar"
              width={180}
              height={180}
              loading="lazy"
              placeholder="blur"
            />
          </Center>
        </Grid>
      </Header>
      <Main>
        <Section>
          <Heading level={3} linkable>
            About me
          </Heading>
          <Paragraph>
            As a highly experienced senior software engineer and technical
            leader, I&apos;ve dedicated my career to creating exceptional
            digital experiences for clients ranging from startups to established
            businesses. My expertise lies in full-stack web development and
            commercial application creation, with a focus on building scalable,
            secure, and performant solutions that meet the needs of modern
            businesses.
          </Paragraph>
          <Paragraph>
            In addition to my professional work, I&apos;m also deeply committed
            to open source projects and mentoring beginner programmers. I&apos;m
            an active member of{" "}
            <Link href="https://www.electrichive.org/" target="_blank">
              The Electric Hive
            </Link>
            , where I lead a team of developers in creating innovative solutions
            and providing mentorship and guidance to up-and-coming programmers.
          </Paragraph>
          <Paragraph>
            Through my years of experience, I&apos;ve gained a deep
            understanding of the latest technologies and trends in the industry,
            and I&apos;m always eager to discover and learn new ways to improve
            my craft. If you&apos;re looking for a seasoned technical leader
            with a passion for excellence, look no further than me.
          </Paragraph>
          <Paragraph>
            Want to know more? Have a look at my{" "}
            <Link href="https://linkedin.com/in/gantoreno" target="_blank">
              LinkedIn
            </Link>
            .
          </Paragraph>
        </Section>
        <Section>
          <Heading level={3} linkable>
            Work &amp; projects
          </Heading>
          <Paragraph>
            For the past couple of years, I&apos;ve been working really close to
            known companies from around the world, doing web consulting &amp;
            project assessments, or just belonging to an awesome team of
            developers. Here&apos;s a brief overview of my journey as a
            developer:
          </Paragraph>
          <Timeline>
            <Timeline.Item>
              <Experience
                company="Zemoga, Inc"
                position="Senior Frontend Engineer"
                year="Jan 2023"
                description="I performed as the technical leader for the SNY TV project, built scalable websites & web applications with Next.js, TypeScript, TailwindCSS & AWS, developed highly performant interfaces & custom components, and helped with analyzing & unblocking tasks & requirements across the entire team."
              />
            </Timeline.Item>
            <Timeline.Item>
              <Experience
                company="TheoremOne, LLC"
                position="Senior Engineering Talent Advocate"
                year="Jul 2022"
                description="I owned, managed & improved the front-end React pipeline, engineered new manual and automatized systems for the different areas of the hiring process, engineered new feature for the hiring tooling backing our processesm as well as designed and built new technical assessments for the engineering roles."
              />
            </Timeline.Item>
            <Timeline.Item>
              <Experience
                company="CobuildLab, Inc"
                position="React Engineer"
                year="Aug 2021"
                description="I developed commercial-grade applications by implementing full-stack web technologies such as JavaScript with React and TypeScript, GraphQL & more, contributed to internal libraries & projects (authentication tools, validation tools), and performed API optimizations & codebase improvements, increasing overall performance, efficiency & cost savings by 80%."
              />
            </Timeline.Item>
            <Timeline.Item>
              <Experience
                company="Totalcom Venezuela, CA"
                position="Systems Engineer"
                year="Apr 2021"
                description="I developed internal tools with web technologies such as React.js, led the engineering team for a custom high-performant streaming service, created & maintained the company's web media player for live video & signal broadcasting with Next.js, and implemented custom software solutions for DNS management."
              />
            </Timeline.Item>
            <Timeline.Item>
              <Experience
                position="Software Engineer"
                year="Jan 2020"
                description="I maintained the company's client management system with custom PHP scripts & SQL data querying, configured various servers for monitoring services such as SolarWinds Orion, Splynx & UNMS, as well as the company's main database, and mplemented custom bash routines for server tasks, as well as custom RouterOS scripts for managing a client's connection status & a speed test utility."
              />
            </Timeline.Item>
            <Timeline.Item>
              <Experience
                position="Frontend Engineer"
                year="Apr 2019"
                description="I maintained the company's client management system with custom PHP scripts & SQL data querying, configured various servers for monitoring services such as SolarWinds Orion, Splynx & UNMS, as well as the company's main database, and mplemented custom bash routines for server tasks, as well as custom RouterOS scripts for managing a client's connection status & a speed test utility."
              />
            </Timeline.Item>
            <Timeline.Item>
              <Experience
                company="CodeWork Venezuela, CA"
                position="Full Stack Developer"
                year="Jan 2019"
                description="I Worked with the design & development team to create beautiful, modern & responsive websites for the company's clients with React, developed the company's project management system through PHP with the Laravel framework with roles, tasks & comments, as well as template showcasing for client presentations, optimizing development times & time tracking routines by 37%, and configured the company's project storage server & linked it with the project management system for full remote access to their projects & templates."
              />
            </Timeline.Item>
            <Timeline.Item>
              <Experience
                year="Sep 2018"
                compact
                description="I learned how to code. 🎉"
              />
            </Timeline.Item>
          </Timeline>
          <Paragraph>
            Interested in my professional profile? Download my{" "}
            <Link href="/assets/pdf/resume.pdf" target="_blank">
              resume
            </Link>
            .
          </Paragraph>
        </Section>
        <Section>
          <Heading level={4} linkable>
            Commercial &amp; enterprise
          </Heading>
          <Paragraph>
            These are some of the most remarkable projects I&apos;ve had the
            fortune to develop (or contribute to) and see in action:
          </Paragraph>
          <Project
            title="SNY"
            description="The home of all things New York sports, New York Mets, New York Jets and more."
            alt="SNY"
            link="https://www.sny.tv/"
            picture={sny}
          />
          <Project
            title="Insightt.io"
            description="Insightt is a revolutionary tool that was designed and built by a repossessor. "
            alt="Insightt"
            link="https://www.insightt.io/"
            picture={insightt}
          />
          <Project
            title="Resident.io"
            description="Find apartments, choose lease period, sign required documents, enjoy your new apartment."
            alt="Resident"
            link="https://app.resident.io/"
            picture={resident}
          />
          <Project
            title="Totalcom Venezuela"
            description="Proveedor de internet empresarial por excelencia, 24 Horas al día, 365 días al año."
            alt="Totalcom"
            link="https://www.behance.net/gallery/109534879/Totalcom-Venezuela-ISP"
            picture={totalcom}
          />
          <Project
            title="Resivenca I+E"
            description="Internet + Energía, soluciones de infraestructura e interconexión a tu alcance."
            alt="Resivenca"
            link="https://www.behance.net/gallery/109535527/Resivenca-Internet-Energia"
            picture={resivenca}
          />
          <Project
            title="CWV Management System"
            description="Centralized project storage &amp; repository management, templates, and resources."
            alt="CWV"
            link="https://www.behance.net/gallery/109540181/CWV-Project-Management-System"
            picture={codework}
          />
          <Paragraph>
            Like my designs? You might also like my{" "}
            <Link href="https://behance.net/gantoreno" target="_blank">
              Behance
            </Link>{" "}
            profile.
          </Paragraph>
        </Section>
        <Section>
          <Heading level={4} linkable>
            Personal &amp; open source
          </Heading>
          <Paragraph>
            Open source &amp; side projects are important too. I&apos;ve spent a
            major part of the past couple years working on web development,
            ai-related stuff &amp; small interesting projects. Some of them are:
          </Paragraph>
          <Spacer bottom="var(--spacing-minor)">
            <Grid columns={[1, 1]}>
              <Repository
                name="Curtis"
                description="👨🏻‍⚕️ The Cardiovascular Unified Real-Time Intelligent System"
                url="https://github.com/gantoreno/curtis-engine"
              />
              <Repository
                name="Bango"
                description="🐘 The zero-tricks lightweight framework - just you, and PHP"
                url="https://github.com/gantoreno/bango"
              />
              <Repository
                name="Iris"
                description="🧠 A C++ neural networks engine"
                url="https://github.com/gantoreno/iris"
              />
              <Repository
                name="Macfetch"
                description="🍎 A macOS Neofetch alternative written in C++"
                url="https://github.com/gantoreno/muso"
              />
              <Repository
                name="Aether"
                description="📝 An interactive editor that runs on Electron"
                url="https://github.com/gantoreno/aether"
              />
              <Repository
                name="Pytop"
                description="🩺 A Python-based Windows app monitor"
                url="https://github.com/gantoreno/pytop"
              />
              <Repository
                name="Muso"
                description="🎧 A Telegram bot that listens to voice messages, and recognizes music"
                url="https://github.com/gantoreno/muso"
              />
              <Repository
                name="Saturn"
                description="🪐 A ZSH theme for space lovers out there"
                url="https://github.com/gantoreno/saturn-prompt"
              />
            </Grid>
          </Spacer>
          <Quote icon="💼">
            The code for this portfolio is also hosted on{" "}
            <Link
              href="https://github.com/gantoreno/portfolio-v2"
              target="_blank"
            >
              GitHub
            </Link>
            , and it&apos;s an update from my{" "}
            <Link href="https://gantoreno.netlify.app/" target="_blank">
              previous
            </Link>{" "}
            website. Feel free to explore the old one to see how things have
            changed, as I transitioned towards a more minimalistic approach.
          </Quote>
          <Paragraph>
            Want to see more projects? Check out my{" "}
            <Link href="https://github.com/gantoreno" target="_blank">
              GitHub
            </Link>{" "}
            profile.
          </Paragraph>
        </Section>
        <Section>
          <Heading level={3} linkable>
            Blog
          </Heading>
          <Paragraph>
            I&apos;ve played with the idea of starting to write my thoughts and
            experiences in some sort of blog, this is where I&apos;ll compile
            most of the important things I&apos;ve learned and experienced
            during my whole coding journey. Feel free to look around!
          </Paragraph>
          {posts.map((post) => (
            <Article.Thumbnail
              key={post.slug}
              title={post.title}
              duration={post.duration}
              description={post.description}
              date={post.date}
              link={post.slug}
              thumbnail={resolveImage(post.image)}
              tags={post.tags}
            />
          ))}
        </Section>
      </Main>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getPostsWithMetadata()

  return { props: { posts } }
}
