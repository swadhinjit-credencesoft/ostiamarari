'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BlogsRedirect() {
  const router = useRouter()
  useEffect(() => { router.replace('/kerala-alleppey-beach-blogs') }, [router])
  return null
}