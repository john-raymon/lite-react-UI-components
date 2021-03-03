import React from 'react'
import ReactDOM from 'react-dom'

export default function TextField({ className = '', type = 'text', onChange, value = '' }) {
  return (
    <div className={`relative ${className}`}>
      <input type={type} value={value} onChange={onChange} />
    </div>
  )
}
