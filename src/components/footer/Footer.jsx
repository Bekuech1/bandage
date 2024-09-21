import React from 'react'
import './Footer.css'
import facebook from '/icons/facebook.svg'
import insta from '/icons/insta.svg'
import twitter from '/icons/twitter.svg'

const Footer = ( {footerClass} ) => {
  return (
    <footer className='footer'>
        <div className={footerClass}>
            <section className='footer-top1 auto flex'>
                <h3 className='noMargin h3Text blue'>Bandage</h3>
                <div className='top-links flex'>
                    <a href=""><img src={facebook} alt="" /></a>
                    <a href=""><img src={insta} alt="" /></a>
                    <a href=""><img src={twitter} alt="" /></a>
                </div>
            </section>
        </div>
        <section className='footer-middle gridFlex auto'>
            <FooterText classes='footer-text1' footertext1='company info' />
            <FooterText classes='footer-text2' footertext1='legal'/>
            <FooterText classes='footer-text1' footertext1='featured' footertext2='business marketing' footertext3='user analytical' footertext4='live chat' footertext5='unlimited support'/>
            <FooterText classes='footer-text2' footertext1='resources' footertext2='IOS & android' footertext3='watch a demo' footertext4='customer' footertext5='API'/>
            <div className='footer-text3 grid'>
                <h5 className='h5Text noMargin blue'>Get In Touch</h5>
                <form action="" className='footer-form noMargin'>
                    <input type="email" name="" id="" placeholder='Your Email' className='footer-input fic'/>
                    <button type="submit" className='filledButton'>Subscribe</button>
                    <p className='noMargin pText grey'>Lore imp sum dolor Amit</p>
                </form>
            </div>           
        </section>
        <div className='trademark'>
            <section className='auto trademark-text'>
                <h6 className='h6Text noMargin grey'>Made With Love By Finland All Right Reserved</h6>
            </section>
        </div>
    </footer>
  )
}

const FooterText= ({classes, footertext1, footertext2='About Us', footertext3='Carrier', footertext4='We are hiring', footertext5='blog'}) => {
  return (
    <div className={`grid ${classes}`}>
        <h5 className='h5Text noMargin blue capitalize'>{footertext1}</h5>
        <div className='footer-links grid'>
            <a className='h6Text noMargin grey noDeco capitalize' href="http://">{footertext2}</a><br />
            <a className='h6Text noMargin grey noDeco capitalize' href="http://">{footertext3}</a><br />
            <a className='h6Text noMargin grey noDeco capitalize' href="http://">{footertext4}</a><br />
            <a className='h6Text noMargin grey noDeco capitalize' href="http://">{footertext5}</a><br />
        </div>
    </div>
  )
}

export default Footer