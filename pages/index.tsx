import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import Center from "../components/center/Center"
import Experience from "../components/experience/Experience"
import Footer from "../components/footer/Footer"
import Grid from "../components/grid/Grid"
import Header from "../components/header/Header"
import Heading from "../components/heading/Heading"
import Link from "../components/link/Link"
import Main from "../components/main/Main"
import Navbar from "../components/navbar/Navbar"
import Page from "../components/page/Page"
import Paragraph from "../components/pragraph/Paragraph"
import Project from "../components/project/Project"
import Quote from "../components/quote/Quote"
import Repository from "../components/repository/Repository"
import Section from "../components/section/Section"
import Spacer from "../components/spacer/Spacer"
import Timeline from "../components/timeline/Timeline"

import avatar from "../assets/img/avatar.png"
import codework from "../assets/img/codework.png"
import insightt from "../assets/img/insightt.png"
import resident from "../assets/img/resident.png"
import resivenca from "../assets/img/resivenca.png"
import totalcom from "../assets/img/totalcom.png"

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Gabriel Moreno - Welcome</title>
        <meta
          name="description"
          content="Software engineer, full-stack web developer"
        />
        <meta name="keyword" content="portfolio, software engineer" />
      </Head>
      <Navbar />
      <Header>
        <Grid columns={[2, 1]}>
          <Center axis="vertical">
            <div>
              <Heading level={1}>Hello there! I&apos;m Gabriel</Heading>
              <Heading level={2} compact light>
                Software Engineer
              </Heading>
            </div>
          </Center>
          <Center axis="vertical">
            <Image src={avatar} alt="Avatar" width={180} height={180} />
          </Center>
        </Grid>
      </Header>
      <Main>
        <Section>
          <Heading level={3} linkable>
            About me
          </Heading>
          <Paragraph>
            I&apos;m a software engineer &amp; full-stack web developer
            specialized in commercial projects, startup creations, corporate
            identity, and personal websites. My job is to bring ideas to life
            through dynamic client-developer experiences, working as a team to
            transform amazing ideas into exceptional realities.
          </Paragraph>
          <Paragraph>
            When I&apos;m not developing commercial applications, I&apos;m
            working on personal &amp; open source projects, as well as mentoring
            beginner programmers and students with an awesome team at{" "}
            <Link href="https://www.electrichive.org/" target="_blank">
              The Electric Hive
            </Link>
            ; but the most important thing is, I&apos;m always discovering,
            learning, and improving, one day at a time.
          </Paragraph>
          <Paragraph>
            Want to learn more about me? Have a look at my{" "}
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
            For the past 3+ years, I&apos;ve been working really close to known
            companies from around the world, doing web consulting &amp; project
            assessments. Here&apos;s a brief overview of my journey as a
            developer:
          </Paragraph>
          <Timeline>
            <Timeline.Item>
              <Experience
                company="TheoremOne, LLC"
                position="Senior Engineering Talent Advocate"
                year="Jul 2022"
              >
                I owned, managed &amp; improved the front-end React pipeline,
                engineered new manual and automatized systems for the different
                areas of the hiring process, engineered new feature for the
                hiring tooling backing our processesm as well as designed and
                built new technical assessments for the engineering roles.
              </Experience>
            </Timeline.Item>
            <Timeline.Item>
              <Experience
                company="CobuildLab, Inc"
                position="React Engineer"
                year="Aug 2021"
              >
                I developed commercial-grade applications by implementing
                full-stack web technologies such as JavaScript with React and
                TypeScript, GraphQL &amp; more, contributed to internal
                libraries &amp; projects (authentication tools, validation
                tools), and performed API optimizations &amp; codebase
                improvements, increasing overall performance, efficiency &amp;
                cost savings by 80%.
              </Experience>
            </Timeline.Item>
            <Timeline.Item>
              <Experience
                company="Totalcom Venezuela, C.A"
                position="Systems Engineer"
                year="Apr 2021"
              >
                I developed internal tools with web technologies such as
                React.js, led the engineering team for a custom high-performant
                streaming service, created &amp; maintained the company&apos;s
                web media player for live video &amp; signal broadcasting with
                Next.js, and implemented custom software solutions for DNS
                management.
              </Experience>
            </Timeline.Item>
            <Timeline.Item>
              <Experience position="Software Engineer" year="Jan 2020">
                I maintained the company&apos;s client management system with
                custom PHP scripts &amp; SQL data querying, configured various
                servers for monitoring services such as SolarWinds Orion, Splynx
                &amp; UNMS, as well as the company&amp;s main database, and
                mplemented custom bash routines for server tasks, as well as
                custom RouterOS scripts for managing a client&apos;s connection
                status &amp; a speed test utility.
              </Experience>
            </Timeline.Item>
            <Timeline.Item>
              <Experience position="Frontend Engineer" year="Apr 2019">
                I Redesigned the company&apos;s legacy website by implementing
                React with Next.js &amp; Scss, worked with the design team to
                refresh the company&apos;s public image &amp; corporate
                identity, as well as the copywriting team for updating their
                mission, vision, and values, and implemented new visual designs
                on their customer portal to match it with the company&apos;s
                design language &amp; corporate identity.
              </Experience>
            </Timeline.Item>
            <Timeline.Item>
              <Experience
                company="CodeWork Venezuela, C.A"
                position="Full Stack Developer"
                year="Jan 2019"
              >
                I Worked with the design &amp; development team to create
                beautiful, modern &amp; responsive websites for the
                company&apos;s clients with React, developed the company&apos;s
                project management system through PHP with the Laravel framework
                with roles, tasks &amp; comments, as well as template showcasing
                for client presentations, optimizing development times &amp;
                time tracking routines by 37%, and configured the company&apos;s
                project storage server &amp; linked it with the project
                management system for full remote access to their projects &amp;
                templates.
              </Experience>
            </Timeline.Item>
            <Timeline.Item>
              <Experience year="Sep 2018" compact>
                I learned how to code. {"🎉"}
              </Experience>
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
            fortune to develop and see in action:
          </Paragraph>
          <Project
            title="Insightt.io"
            description="Insightt is a revolutionary tool that was designed and built by a repossessor. With great need comes great innovation, and Insightt is nothing short of that."
            alt="Insightt"
            link="https://www.insightt.io/"
            picture={insightt}
          />
          <Project
            title="Resident.io"
            description="Find apartments, choose lease period, sign required documents, enjoy your new apartment. Student housing made easy."
            alt="Resident"
            link="https://app.resident.io/"
            picture={resident}
          />
          <Project
            title="Totalcom Venezuela"
            description="Proveedor de internet empresarial por excelencia, confiabilidad del servicio las 24 Horas al día, los 365 días del año. 60 años en telecomunicaciones."
            alt="Totalcom"
            link="https://www.behance.net/gallery/109534879/Totalcom-Venezuela-ISP"
            picture={totalcom}
          />
          <Project
            title="Resivenca I+E"
            description="Internet + Energía, soluciones de infraestructura e interconexión a tu alcance en toda la región del occidente de Venezuela."
            alt="Resivenca"
            link="https://www.behance.net/gallery/109535527/Resivenca-Internet-Energia"
            picture={resivenca}
          />
          <Project
            title="CWV Management System"
            description="Centralized project storage &amp; repository management tool for CodeWork Venezuela's internal &amp; external projects, templates, and resource sets."
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
            during my whole coding journey, so stay tuned for that!
          </Paragraph>
          <Paragraph>
            Once it&apos;s done, the <Link href="/blog">Blog</Link> link should
            be available.
          </Paragraph>
        </Section>
      </Main>
      <Footer />
    </Page>
  )
}

export default Home
