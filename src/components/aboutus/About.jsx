import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='about auto'>
        <div className='about-inner gridFlex spaceBetween auto'>
            <section className='grid about1'>
                <h3 className='capitalize h3Text noMargin blue justifyCenter'>What they say about us</h3>
                <div className='about1-1 justifyCenter'>
                    <div className='about1-1-1 grid'>
                        <img className='about-img' src="images/about-profile.png" alt="" />
                        <div className='stars flex'>
                            <img src="icons/full-star.svg" alt="" />
                            <img src="icons/full-star.svg" alt="" />
                            <img src="icons/full-star.svg" alt="" />
                            <img src="icons/full-star.svg" alt="" />
                            <img src="icons/star.svg" alt="" />
                        </div>
                        <h6 className='h6Text noMargin grey'>Slate helps you see how many more days you need to work to reach your financial goal.</h6>
                        <div>
                            <a href="" className='noMargin h6Text sky noDeco capitalize'>regina miles</a>
                            <h6 className='noMargin h6Text blue capitalize'>designer</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className='grid about2'>
                <div className='flex about2-1 spaceBetween'>
                    <img src="images/about1.jpg" className='group-img' alt="" />
                    <img src="images/about2.jpg" className='group-img' alt="" />
                    <img src="images/about3.jpg" className='group-img' alt="" />
                </div>
                <div className='flex about2-1 spaceBetween'>
                    <img src="images/about4.jpg" className='group-img' alt="" />
                    <img src="images/about5.jpg" className='group-img' alt="" />
                    <img src="images/about6.jpg" className='group-img' alt="" />
                </div>
                <div className='flex about2-1 spaceBetween'>
                    <img src="images/about7.jpg" className='group-img' alt="" />
                    <img src="images/about8.jpg" className='group-img' alt="" />
                    <img src="images/about9.jpg" className='group-img' alt="" />
                </div>
            </section>

        </div>
    </section>
  )
}

export default About