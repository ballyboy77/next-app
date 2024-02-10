import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <section className=' flex items-end  justify-center gap-10 shadow-xl my-10'>
        
        <h2><Link href="/">HOME |</Link></h2>
        <h2> <Link href="/posts"> |POST</Link></h2>

    </section>
  )
}
