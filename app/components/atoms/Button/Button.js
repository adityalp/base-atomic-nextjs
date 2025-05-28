import React from 'react'

export default function Button({ className, type, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  )
}
