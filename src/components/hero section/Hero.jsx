import React from 'react'
import './Hero.css'
import HeroCard from './herocard/HeroCard'

const Hero = () => {
  return (
    <section className='hero-section gridFlex auto mobileAuto'>
            <HeroCard/>
            <section className='grid'>
                <HeroCard className="hero2"/>
                <section className='hero-section2 gridFlex'>
                    <HeroCard className="hero3"/>
                    <HeroCard className="hero4"/>
                </section>
            </section> 
    </section>
  )
}

export default Hero

