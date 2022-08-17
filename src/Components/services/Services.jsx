import React from 'react'
import './services.css'
// import { BiCheck } from "react-icons/bi"
import { servicesListWrite, 
         servicesListTeach,
         servicesListWeb } 
from '../../data'

export default function Services() {
  return (
    <section id='services'>
     <h5>What I Offer</h5>
     <h2>My Services</h2>
     <div className="container services__container">
      <article className='services'>
        <div className="service__head">
          <h3>JavaScript</h3>
        </div>
    {servicesListWrite.map((item) => (
        <ul className="service__list">
          <li>
            <span className="service__list-icon">{item.icon}</span>
            <p>{item.text}</p>
          </li>
        </ul>
    ))}
      </article>

      <article className='services'>
        <div className="service__head">
          <h3> React JS Developer </h3>
        </div>
    {servicesListWeb.map((item) => (
        <ul className="service__list">
          <li>
            <span className="service__list-icon">{item.icon}</span>
            <p>{item.text}</p>
          </li>
        </ul>
    ))}
      </article>

      <article className='services'>
        <div className="service__head">
          <h3>Node JS Developer</h3>
        </div>
    {servicesListTeach.map((item) => (
        <ul className="service__list">
          <li>
            <span className="service__list-icon">{item.icon}</span>
            <p>{item.text}</p>
          </li>
        </ul>
    ))}
      </article>
     </div>
    </section>
  )
}
