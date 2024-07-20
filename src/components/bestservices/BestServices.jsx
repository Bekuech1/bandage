import React from 'react'
import './BestServices.css'
import ComponentHeading from '../ComponentHeading'

const BestServices = () => {
  return (
    <section className='bestservices auto grid'>
        <div className='grid bestseller-text auto centerText' >
            <ComponentHeading text="the best services" subtext="Problems trying to resolve the conflict between "headerColor="blue"/>
        </div>
        <div className='gridFlex bestservices-row auto'>
          <BestServicesRow bestImg='images/services1.png'/>
          <BestServicesRow bestImg='images/services2.png' bestCharge='concentrate' bestText='Defalcate is most focused in helping you discover your most beautiful smile'/>
          <BestServicesRow bestImg='images/services3.png' bestCharge='hack growth' bestText='Overcame any hurdle or any other problem.'/>
        </div>
    </section>
  )
}

const BestServicesRow = ( {bestImg, bestCharge='easy wins', bestText='Get your best looking smile now!'} ) => {
  return (
    <div className='best-services-row centerText'>
        <div className='best-services-row-inner grid'>
          <img className='justifyCenter noMargin' src={bestImg} alt="" />
          <h3 className='h3Text capitalize noMargin blue'>{bestCharge}</h3>
          <p className='pText capitalize noMargin grey'>{bestText}</p>
        </div>
    </div>
  )
}


export default BestServices