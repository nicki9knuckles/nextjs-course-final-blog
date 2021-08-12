import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

export function getPostsFiles() {
  return fs.readdirSync(postsDir)
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '') // removes the file extension
  const filePath = path.join(postsDir, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const postData = {
    slug: postSlug,
    ...data,
    content,
  }

  return postData
}

export function getAllPosts() {
  const postFiles = getPostsFiles()
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile)
  })
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.data > postB.data ? -1 : 1
  )
  return sortedPosts
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()

  const featuredPosts = allPosts.filter((post) => post.isFeatured)

  return featuredPosts
}