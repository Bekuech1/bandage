import React from 'react'
import './HeroCard.css'

const HeroCard = ({className}) => {
  return (
    <div className={ ` hero1 ${className}` }>
        <div className='grid'>
            <h6 className='capitalize h6Text noMargin green'>5 items</h6>
            <h3 className='uppercase h3Text noMargin blue'>furniture</h3>
            <h6 className='capitalize h6Text noMargin blue'>read more</h6>
        </div>
    </div>
  )
}

export default HeroCard