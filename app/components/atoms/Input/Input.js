import React from 'react'

export default function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      className={className}
      {...props}
    />
  )
}
