import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';



const Navbar = ( { navClass, navMarginAuto } ) => {
  return (
    <>
    
    <nav className={`main-nav flex ${navMarginAuto}`} id='main-nav'>
        <section className='logo alignCenter'>
            <h3 className='capitalize logo'>bandage</h3>
        </section>
        <section className={`flex spaceBetween ${navClass}`}>
            <section className='alignCenter'>
                <li className='flex'>
                    <ul className='capitalize '>
                        <NavLink className='noDeco' to="/home">Home</NavLink>
                    </ul>
                    <ul className='capitalize flex' id='dropdown-nav'>
                        <NavLink className='noDeco' to="/shop">
                        shop
                        </NavLink>
                        <img src="icons/expand.svg" alt="" />
                    </ul>
                    <ul className='capitalize'>
                        <NavLink className='noDeco' to="/home">about</NavLink>
                    </ul>
                    <ul className='capitalize'>
                        <NavLink className='noDeco' to="/home">blog</NavLink>
                    </ul>
                    <ul className='capitalize'>
                        <NavLink className='noDeco' to="/home">contact</NavLink>
                    </ul>
                    <ul className='capitalize'>
                        <NavLink className='noDeco' to="/home">pages</NavLink>
                    </ul>
                </li>
            </section>
            <section className='alignCenter'>
                <li className='flex alignCenter'>
                    <ul id='profile' className='flex'>
                        <NavLink className='noDeco capitalize' to="/home"><img className='auto' src="icons/profile.svg" alt="" /> login / register</NavLink>
                    </ul>
                    <ul id='search' className='flex'>
                        <NavLink className='noDeco' to="/home"><img  className='alignCenter' src="icons/search.svg" alt="" /></NavLink>
                    </ul>
                    <ul id='cart' className='flex'>
                        <NavLink className='noDeco' to="/cart"><img src="icons/cart.svg" alt="" /></NavLink>
                        1
                    </ul>
                    <ul id='heart' className='flex'>
                        <NavLink className='noDeco' to="/home"><img  className='alignCenter' src="icons/heart.svg" alt="" /></NavLink>
                        1
                    </ul>
                </li>
            </section>
        </section>
    </nav>

    {/* MOBILE NAV */}
    <nav className='mobile-nav'>
        <div className='mobile-nav1 flex auto spaceBetween'>
            <div className='mobile-nav1-1'>
                <h3 className='noMargin blue capitalize mobile-logo'>bandage</h3>
            </div>
            <section className='flex mobile-nav1-2'>
                <img  className='auto' src="icons/mobile-search.svg" alt="" />
                <img  className='auto' src="icons/mobile-cart.svg" alt="" />
                <img  className='auto' src="icons/mobile-menu.svg" alt="" />
            </section>
        </div>
        <section className='grid auto nav-lists'>
            <ul className='grid nav-lists1 noMargin'>
                <li className='grey'>home</li>
                <li className='grey'>product</li>
                <li className='grey'>pricing</li>
                <li className='grey'>contact</li>
            </ul>
            <ul className='grid nav-lists2 noMargin'>
                <li className='blue'>home</li>
                <li className='blue'>shop</li>
                <li className='blue'>about</li>
                <li className='blue'>blog</li>
                <li className='blue'>contact</li>
                <li className='blue'>pages</li>
            </ul>
            <ul className='grid nav-lists3'>
                <li className='sky'>
                    <img src="icons/profile.svg" alt="" className='auto'/> login/register
                </li>
                <li className='sky'>
                    <img src="icons/cart.svg" alt="" />
                </li>
                <li className='sky'>
                    <img src="icons/search.svg" alt="" />
                </li>
                <li className='sky'>
                    <img src="icons/heart.svg" alt="" />
                </li>
            </ul>
        </section>
    </nav>
    

    </>
  )
}

export default Navbar