import React from 'react'
import './card.css'

export default function Card(props) {
  return (
    <div className='cards'>
      <div className="__card">
        {props.children}
      </div>
    </div>
  )
}
