import React from 'react'
import './Hero.css'
import HeroCard from '../herocard/HeroCard'

const Hero = () => {
  return (
    <section className='hero-section gridFlex auto spaceBetween'>
            <HeroCard/>
            <section className='grid'>
                <HeroCard className="hero2"/>
                <section className='gridFlex spaceBetween'>
                    <HeroCard className="hero3"/>
                    <HeroCard className="hero4"/>
                </section>
        </section> 
    </section>
  )
}

export default Hero

