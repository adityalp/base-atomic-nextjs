import React from 'react'

export default function Icon({ className, children }) {
  return (
    <span className={`inline-flex items-center ${className}`}>{children}</span>
  )
}
