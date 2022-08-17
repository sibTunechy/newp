import React from 'react'
import { 
    BsLinkedin,
    BsTwitter,
    BsWhatsapp
 } from "react-icons/bs";
 import './socials.css'

export default function Socials() {
  return (
    <div className='socials'>
      <a href="http://linkedin.com"><BsLinkedin /></a>
      {/* <a href="http://facebook.com"><BsFacebook /></a> */}
      <a href="http://twitter.com"><BsTwitter /></a>
      <a href="http://whatsapp.com"><BsWhatsapp /></a>
    </div>
  )
}
