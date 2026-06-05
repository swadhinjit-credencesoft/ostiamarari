'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RoomsSuitesRedirect() {
  const router = useRouter()
  useEffect(() => { router.replace('/Book-Rooms-Suites') }, [router])
  return null
}