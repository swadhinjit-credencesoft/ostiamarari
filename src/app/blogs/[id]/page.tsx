import { blogs } from '@/lib/blogs'
import RedirectClient from './RedirectClient'

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }))
}

interface BlogPageProps {
  params: {
    id: string
  }
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  return <RedirectClient id={params.id} />
}