'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function TermsRedirect() {
  const router = useRouter()
  useEffect(() => { router.replace('/terms-conditions') }, [router])
  return null
}
