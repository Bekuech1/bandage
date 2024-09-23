import React from 'react'
import './Clients.css'
import brand1 from '/images/brands-1.svg'
import brand2 from '/images/brands-2.svg'
import brand3 from '/images/brands-3.svg'
import brand4 from '/images/brands-4.svg'
import brand5 from '/images/brands-5.svg'

const Clients = () => {
  return (
    <div className='greyBackground'>
          <section className="shop-logos gridFlex auto fix">
        <div>
            <img src={brand1} alt="" />
        </div>
        <div>
            <img src={brand2} alt="" />
        </div>
        <div>
            <img src={brand3} alt="" />
        </div>
        <div>
            <img src={brand4} alt="" />
        </div>
        <div>
            <img src={brand5} alt="" />
        </div>
    </section>
    </div>
  )
}

export default Clients