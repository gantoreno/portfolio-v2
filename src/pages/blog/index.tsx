import type { GetStaticPropsContext, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import slugify from "slugify"
import Article from "../../components/article/Article"
import Header from "../../components/header/Header"
import Heading from "../../components/heading/Heading"
import Paragraph from "../../components/paragraph/Paragraph"
import Section from "../../components/section/Section"

import { getPostsWithMetadata, PostMetadata } from "../../lib/mdx"
import { resolveImage } from "./[slug]"

type BlogProps = {
  posts: PostMetadata[]
}

const parseTags = (tags: string | string[]) => {
  return Array.isArray(tags) ? tags : [tags]
}

const filterPostsByTags = (posts: PostMetadata[], tags: string[]) => {
  if (!tags.length) return posts

  return posts.filter((post) =>
    post.tags
      .map((tag) => slugify(tag).toLowerCase())
      .some((tag) => tags.includes(tag))
  )
}

export default function Blog({ posts }: BlogProps) {
  const { query } = useRouter()

  const tags = parseTags(query.tag ?? [])
  const filteredPosts = filterPostsByTags(posts, tags)

  return (
    <>
      <Head>
        <title>Gabriel Moreno - Blog</title>
        <meta name="description" content="My latest blog posts" />
        <meta name="keywords" content="blog, programming, knowledge-base" />
      </Head>
      <Header>
        <Heading level={1}>My Latest Posts</Heading>
      </Header>
      <Section>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
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
          ))
        ) : (
          <Paragraph>Whoops! No post matches the search.</Paragraph>
        )}
      </Section>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const posts = await getPostsWithMetadata()

  return { props: { posts } }
}
