import Head from "next/head"
import Image from "next/image"

import Center from "../components/center/Center"
import Container from "../components/container/Container"
import Heading from "../components/heading/Heading"
import Link from "../components/link/Link"
import Paragraph from "../components/paragraph/Paragraph"
import Spacer from "../components/spacer/Spacer"

import avatarSad from "../assets/img/avatar-sad.webp"

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Gabriel Moreno - Oops</title>
      </Head>
      <Container>
        <Center axis="vertical">
          <div>
            <Spacer top="7rem" bottom="2rem">
              <Center axis="horizontal">
                <Image
                  src={avatarSad}
                  alt="Avatar"
                  width={300}
                  height={300}
                  loading="lazy"
                  placeholder="blur"
                />
              </Center>
            </Spacer>
            <Center axis="horizontal">
              <Heading level={1}>Whops!</Heading>
            </Center>
            <Center axis="horizontal">
              <Paragraph>
                The page you&apos;re trying to access could not be found, but
                you can go back to the <Link href="/">main website</Link>{" "}
                instead.
              </Paragraph>
            </Center>
          </div>
        </Center>
      </Container>
    </>
  )
}
