import React from 'react'
import './Featured.css'
import ComponentHeading from '../ComponentHeading'
import { Link } from 'react-router-dom'

const Featured = () => {
  return (
    <section className='featured auto grid'>
        <div className='justifyCenter centerText featured-text grid'>
            <ComponentHeading text='featured posts' className='blue-featured'/>
        </div>
        <div className='gridFlex featured-row'>
          <FeaturedCard feat featuredImg='images/featured1.png' featuredDate='13 june 2024' featuredComments='10'/>
          <FeaturedCard feat featuredImg='images/featured2.png' featuredDate='13 june 2024' featuredComments='10'/>
          <FeaturedCard feat featuredImg='images/featured3.png' featuredDate='13 june 2024' featuredComments='10'/>
        </div>
    </section>
  )
}

const FeaturedCard = ( {featuredImg, featuredDate, featuredComments} ) => {
  return (
    <section className='grid featured-card relative'>
        <img src={featuredImg} alt="" className='featured-main-img' />
        <div className='featured-new absolute'>
          <h6 className=' uppercase h6Text noMargin'>new</h6>
        </div>
        <section className='grid featured-grid'>
            <div className='flex featured-grid-1'>
              <p className='capitalize pText sky'>google</p>
              <p className='capitalize pText'>trending</p>
              <p className='capitalize pText'>new</p>
            </div>
            <h4 className='capitalize noMargin h4Text blue featured-grid-2'>Loudest à la Madison #1 (L'integral)</h4>
            <p className='capitalize noMargin pText grey featured-grid-3'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            <div className='flex spaceBetween featured-grid-4'>
              <div className='flex'>
                <img src="icons/date.svg" alt="" />
                <p className='pText grey capitalize'>{featuredDate}</p>
              </div>
              <div className='flex'>
                <img src="icons/comments.svg" alt="" />
                <p className='pText grey capitalize'>{featuredComments} Comments</p>
              </div>
            </div>
            <div className='flex featured-grid-5'>
              <Link to="" className='noMargin h6Text capitalize noDeco grey'>learn more</Link>
              <img src="icons/learn-more.svg" alt="" />
            </div>
        </section>
    </section>
  )
}

export default Featured