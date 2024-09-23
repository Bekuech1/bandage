import React from 'react'
import './Description.css'
import descrip from "/images/description2.jpg"

const Description = () => {
  return (
    <section className='description noMobile'>
        <div className='description-top auto'>
            <li className='flex capitalize grey pText capitalize'>
                <ul>description</ul>
                <ul>additional information</ul>
                <ul>reviews <span className='green'>(0)</span></ul>
            </li>
        </div>
        <section className='description-bottom auto flex'>
          <div className='description-text grid'>
            <h3 className='h3Text noMargin blue'>the quick fox jumps over </h3>
            <p className='pText noMargin grey capitalize description-text-p'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            <div>
              <p className='pText noMargin grey capitalize'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            </div>
            <p className='pText noMargin grey capitalize description-text-p'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
          <div className='description-img'>
            <img className='description-img1' src="images/description1.jpg" alt="" />
            <img src={descrip} alt="" className='description-img2'/>
          </div>
        </section>
    </section>
  )
}

export default Description