import Link from 'next/link'
import React from 'react'

export default function Link({ className, href, children }) {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  )
}
