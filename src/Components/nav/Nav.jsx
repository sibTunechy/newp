import React, { useState } from 'react'
import './nav.css'
import Button from '../../tools/Button/Button'
import { AiOutlineHome } from 'react-icons/ai'
import { RiMapPinUserLine } from 'react-icons/ri'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { FaNetworkWired } from 'react-icons/fa'
import { MdConnectWithoutContact } from 'react-icons/md'

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='nav'>
    <Button>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ' '}> <AiOutlineHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ' '}> <RiMapPinUserLine /></a>
      <a href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ' '}> <BsFillJournalBookmarkFill /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ' '} > < FaNetworkWired /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ' '}> < MdConnectWithoutContact /></a>
    </Button>
    </nav>
  )
}



