import fs from "fs"
import matter from "gray-matter"
import { DateTime } from "luxon"
import { serialize } from "next-mdx-remote/serialize"
import path from "path"

import { getReadingTime } from "./reading"

const root = process.cwd()

export type PostMetadata = {
  slug: string
  image: string
  title: string
  description: string
  author: string
  date: string
  tags: string[]
  duration: number
}

export const getPosts = async () => {
  return fs
    .readdirSync(path.join(root, "articles"))
    .map((filename) => filename.split("-").slice(1, 100).join("-"))
}

export const getPostBySlug = async (slug: string) => {
  const posts = fs.readdirSync(path.join(root, "articles"))
  const post = posts.filter((post) => post.includes(slug))[0]

  const mdx = fs.readFileSync(path.join(root, "articles", post), "utf-8")

  const { data, content } = matter(mdx)

  const source = await serialize(content, {})
  const duration = getReadingTime(content)
  const date = DateTime.fromISO(
    new Date(data.date).toISOString()
  ).toLocaleString(DateTime.DATE_MED)

  return {
    source,
    meta: {
      ...data,
      duration,
      date,
    },
  }
}

export const getPostsWithMetadata = async (): Promise<PostMetadata[]> => {
  const posts = await getPosts()
  const postsWithMetadata = Promise.all(
    posts.map(async (post) => {
      const { meta } = await getPostBySlug(post.replace(".mdx", ""))

      return meta
    })
  )

  return postsWithMetadata as unknown as PostMetadata[]
}
