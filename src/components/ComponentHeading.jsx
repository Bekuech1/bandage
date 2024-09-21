import React from 'react'

const ComponentHeading = (componentHeader, {headerColor}) => {
  return (
    <div className='componentHead grid'>
        <h4 className={`capitalize noMargin h4Text grey noMobile ${headerColor}`}>featured Products</h4>
        <h3 className='uppercase noMargin h3Text blue'>{componentHeader.text}</h3>
        <p className='capitalize noMargin pText grey'>{componentHeader.subtext}</p>
    </div>
  )
}

export default ComponentHeading