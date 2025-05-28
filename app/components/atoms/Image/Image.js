import React from 'react'

export default function Image({ src, alt, width, height, className }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover ${className}`}
    />
  )
}
