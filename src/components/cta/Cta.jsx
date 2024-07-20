import React from 'react'
import './Cta.css'


const Cta = () => {
  return (
    <section className='cta'>
        <div className='cta-body auto grid'>
            <h6 className='noMargin h6Text sky'>Designing Better Experience</h6>
            <h2 className='noMargin h2Text blue'>Problems trying to resolve the conflict between </h2>
            <p className='noMargin pText grey'>Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
            <div>
                <h3 className='noMargin h3Text '>$16.48</h3>
            </div>
            <button className='filledButton capitalButton justifyCenter'>add your call to action</button>
        </div>
    </section>
  )
}

export default Cta