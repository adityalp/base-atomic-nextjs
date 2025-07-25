import React from 'react'

export default function Button({ className, type, onClick, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  )
}
