import React from 'react'
import './contact.css'
import Card from '../../tools/Card/Card'
import { contactData } from '../../data'
import Form from '../../tools/Form/Form'

export default function Contact() {
  return (
    <section className='contact' id="contact" >
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

      <div className="contact__options">
            {contactData.map(({id, icon, contctType, emailadrss, link})=>{
              return(
                <Card key={id}className="contact__option">
                  <span className='contact__card-icon'>{icon}</span>
                  <h4>{contctType}</h4>
                  <h5>{emailadrss}</h5>
                  <a href={link}>Send a Message</a>
                </Card>
              )
            })}
        </div>

      <Form />
      </div>
    </section>
  )
}
