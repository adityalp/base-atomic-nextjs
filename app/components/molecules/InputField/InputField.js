import React from 'react'
import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Label/Label'

export default function InputField({ id, className, label, ...props }) {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} className={className} {...props} />
    </div>
  )
}
