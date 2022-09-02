import React from 'react'
import './portfolio.css'
// import {BrowserRouter as Link} from 'react-router-dom';
// import IMG from '../../assets/portfolio1.jpg'
import Button from '../../tools/Button/Button'
import { portfolioData } from '../../data'

export default function Portfolio() {
  return (
    <section className='portfoliohgroup' id='portfolio'>
     <h3>My Recent Work</h3>
     <h2> Portfolio </h2>

     <div className="container portfolio__container">
      {portfolioData.map((item) => (
        <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={item.img} alt="" />
        </div>

        <h3>{item.text}</h3>
        <Button className='cta'>
          <a href={item.gitlnk} className='btn' target='_blank' rel='noreferrer'> GitHub </a>
          <a href={item.netlifylnk} className='btn btn-primary' target='_blank' rel="noreferrer" > Live Demo </a>
        </Button>
      </article>
        ))}
     </div>
    </section>
  )
}

