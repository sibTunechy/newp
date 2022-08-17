import React from 'react'
import { BsWhatsapp, BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
import './footer.css'
export default function () {
  return (
    <footer className='footer'>
      <a href="#" className='footer__logo' > AHMED </a>

      <ul className="permalinks">
        <li><a href="#">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#testimonials">TESTIMONIALS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="footer__social">
        <a href="http://linkedin.com/in/ahm1"><BsLinkedin /></a>
        <a href="http://github.com/sibTunechy"><BsGithub /></a>
        <a href="https://twitter.com/Sib_tunechy"><BsTwitter /></a>
        <a href="https://api.whatsapp.com/send?phone=+2348135163128"><BsWhatsapp /></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Ahmed Abdullahi. All right reserved </small>
      </div>
    </footer>
  )
}
