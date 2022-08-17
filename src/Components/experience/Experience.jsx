import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { expFrontEndData, expBackEndData } from '../../data'
export default function experience() {
  return (
    <section id='experience'>
      <h5>GENERAL SKILLS</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
          <div className="experience__frontend">
          <h3>FRONTEND DEVELOPMENT</h3>
          <div className="experience__content">
        {expFrontEndData.map((item) =>(
            <article className="experience__details">
              <span className='experience__details-icon'>{item.icon}</span>
              <div>
              <h4>{item.progLang}</h4>
              <small className='text-light'>{item.experience}</small>      
              {/* <small className="text-light">{item.framewrk}</small> */}
              </div>
            </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
        <h3>BACKEND DEVELOPMENT</h3>
          <div className="experience__content">
            {expBackEndData.map((item) => (
            <article className="experience__details">
              <span className='experience__details-icon'>{item.icon}</span>
              <div>
              <h4>{item.progLang}</h4>
              <small className='text-light'>{item.experience}</small>
              <small className="text-light"></small>
              </div>
            </article>
              ))}
          </div>
        </div>
        </div>
  </section>
  )
}
