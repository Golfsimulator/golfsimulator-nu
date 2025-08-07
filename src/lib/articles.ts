import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export interface Article {
  slug: string
  title: string
  description: string
  content: string
  date: string
  category: string
  readTime: string
  keywords: string[]
}

const articlesDirectory = path.join(process.cwd(), 'src/content/articles')

export function getArticleBySlug(slug: string): Article | null {
  if (!fs.existsSync(articlesDirectory)) {
    return null
  }

  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      description: data.description,
      content: marked(content),
      date: data.date,
      category: data.category,
      readTime: data.readTime || '5 min',
      keywords: data.keywords || [],
    }
  } catch (error) {
    return null
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames
    .filter(name => name.endsWith('.md'))
    .map(name => name.replace(/\.md$/, ''))
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  const articles = fileNames
    .filter(name => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '')
      const fullPath = path.join(articlesDirectory, name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        content: marked(content),
        date: data.date,
        category: data.category,
        readTime: data.readTime || '5 min',
        keywords: data.keywords || [],
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return articles
}
