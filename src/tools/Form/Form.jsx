import React from 'react';
import Button from '../Button/Button';
import './form.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com'



export default function Form() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yf5s6wb', 'template_qdpryzf', form.current, 'J8aksFjgEH03rW-Vg')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder='YOUR FULL NAME' required />
      <input type="email" name="email" placeholder='YOUR EMAIL' required />
      <textarea name="text" rows="7" placeholder='Your Text Here'></textarea>
      <Button >
      <a type= "submit" className='btn btn-primary'>SEND MESSAGE</a>
      </Button>
    </form>
  )
}
