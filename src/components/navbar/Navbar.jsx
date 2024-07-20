import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';



const Navbar = ( { navClass, navMarginAuto } ) => {
  return (
    <nav className={`flex ${navMarginAuto}`}>
        <section className='logo alignCenter'>
            <h3 className='capitalize logo'>bandage</h3>
        </section>
        <section className={`flex spaceBetween ${navClass}`}>
            <section className='alignCenter'>
                <li className='flex'>
                    <ul className='capitalize '>
                        <Link className='noDeco' to="/home">Home</Link>
                    </ul>
                    <ul className='capitalize flex' id='dropdown-nav'>
                        <Link className='noDeco' to="/shop">
                        shop
                        </Link>
                        <img src="icons/expand.svg" alt="" />
                    </ul>
                    <ul className='capitalize'>
                        <Link className='noDeco' to="/home">about</Link>
                    </ul>
                    <ul className='capitalize'>
                        <Link className='noDeco' to="/home">blog</Link>
                    </ul>
                    <ul className='capitalize'>
                        <Link className='noDeco' to="/home">contact</Link>
                    </ul>
                    <ul className='capitalize'>
                        <Link className='noDeco' to="/home">pages</Link>
                    </ul>
                </li>
            </section>
            <section className='alignCenter'>
                <li className='flex alignCenter'>
                    <ul id='profile' className='flex'>
                        <Link className='noDeco capitalize' to="/home"><img className='auto' src="icons/profile.svg" alt="" /> login / register</Link>
                    </ul>
                    <ul id='search' className='flex'>
                        <Link className='noDeco' to="/home"><img  className='alignCenter' src="icons/search.svg" alt="" /></Link>
                    </ul>
                    <ul id='cart' className='flex'>
                        <Link className='noDeco' to="/cart"><img src="icons/cart.svg" alt="" /></Link>
                        1
                    </ul>
                    <ul id='heart' className='flex'>
                        <Link className='noDeco' to="/home"><img  className='alignCenter' src="icons/heart.svg" alt="" /></Link>
                        1
                    </ul>
                </li>
            </section>
        </section>
    </nav>
  )
}

export default Navbar