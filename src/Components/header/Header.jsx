import React from 'react'
import './header.css'
import CV from '../../assets/AhmedResume.pdf'
import { data } from '../../data'

import Button from '../../tools/Button/Button'
import Socials from '../../tools/Socials/Socials'
export default function Header() {
  return (<>
    <header className='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ahmed Abdullahi</h1>
        <h5 className='text-light'> FrontEnd Developer</h5>
        <Button>
        <a href={CV} download className='btn'> Download CV </a>
        <a href='#contact' className='btn btn-primary'> Let's Talk </a>
        </Button>
      <Socials />

      <div className="me">
        <img src={data.imag} alt="me" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  </>
  )
}
