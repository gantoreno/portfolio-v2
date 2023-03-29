import fs from "fs"
import matter from "gray-matter"
import { DateTime } from "luxon"
import { serialize } from "next-mdx-remote/serialize"
import path from "path"

import { getReadingTime } from "./reading"

const root = process.cwd()

export type PostMetadata = {
  slug: string
  title: string
  duration: number
  description: string
  date: string
  keywords: string
  featuredImage: string
}

export const getPosts = async () => {
  return fs.readdirSync(path.join(root, "articles"))
}

export const getPostBySlug = async (slug: string) => {
  const mdx = fs.readFileSync(
    path.join(root, "articles", `${slug}.mdx`),
    "utf-8"
  )

  const { data, content } = matter(mdx)

  const source = await serialize(content, {})
  const duration = getReadingTime(content)
  const date = DateTime.fromISO(
    new Date(data.date).toISOString()
  ).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)

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
