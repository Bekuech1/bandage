import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';



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
  )
}

export default Navbar