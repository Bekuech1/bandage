import React from 'react'
import './Navbar.css'
import { useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import expand from '/icons/expand.svg'
import profile from '/icons/profile.svg'
import navcart from '/icons/cart.svg'
import navheart from '/icons/heart.svg'
import search from '/icons/search.svg'
import mobilesearch from '/icons/mobile-cart.svg'
import mobilecart from '/icons/mobile-search.svg'
import mobilemenu from '/icons/mobile-menu.svg'




const Navbar = ( { navClass, navMarginAuto } ) => {

  const [openMenu, setOpenMenu] = useState(false);


  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalItemsInCart = cartItems.length;

  return (
    <>
    
    <nav className='main-nav flex'  id='main-nav'>
        <section className='logo alignCenter'>
            <h3 className='capitalize logo'>
                bandage
            </h3>
        </section>
        <section className='nav-section flex spaceBetween'>
            <section className='alignCenter'>
                <li className='flex'>
                    <ul className='capitalize '>
                        <NavLink 
                            className='noDeco' 
                            to="/"
                        >
                            Home
                        </NavLink>
                    </ul>
                    <ul className='capitalize flex' >
                        <NavLink 
                            className='noDeco dropdown-nav' 
                            to="/shop/:id"
                        >
                            shop
                        </NavLink>
                        <img src={expand} alt="" className='auto'/>
                    </ul>
                    <ul className='capitalize'>
                        <NavLink 
                            className='noDeco' 
                            to=""
                    >
                        about
                    </NavLink>
                    </ul>
                    <ul className='capitalize'>
                        <NavLink 
                            className='noDeco' 
                            to="/"
                        >
                            blog
                        </NavLink>
                    </ul>
                    <ul className='capitalize'>
                        <NavLink 
                            className='noDeco' 
                            to="/"
                        >
                            contact
                        </NavLink>
                    </ul>
                    <ul className='capitalize'>
                        <NavLink 
                            className='noDeco' 
                            to="/"
                        >
                            pages
                        </NavLink>
                    </ul>
                </li>
            </section>
            <section className='alignCenter'>
                <li className='flex alignCenter'>
                    <ul className='flex'>
                        <NavLink 
                            className='noDeco capitalize profile nav-ul sky' 
                            to="/"
                        >
                            <img 
                                className='auto profile-img' 
                                src={profile} 
                                alt=""
                            /> 
                                login / register
                        </NavLink>
                    </ul>
                    <ul className='flex'>
                        <NavLink 
                            className='noDeco nav-ul' 
                            to="/home"
                        >
                        <img  
                            className='alignCenter' 
                            src={search} 
                            alt="" 
                        />
                        </NavLink>
                    </ul>
                    <ul className='flex'>
                        <NavLink 
                            className='noDeco  nav-ul' 
                            to="/cart"
                        >
                        <img 
                            src={navcart} 
                            alt="" 
                        />
                        <p>{totalItemsInCart}</p>
                        </NavLink>
                    </ul>
                    <ul className='flex'>
                        <NavLink 
                            className='noDeco  nav-ul' 
                            to="/"
                        >
                        <img  
                            className='alignCenter' 
                            src={navheart} 
                            alt="" 
                        />
                        <p>liked count</p>
                        </NavLink>
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
                { !openMenu &&  (
                    <><img  
                    className='auto' 
                    src={mobilesearch} 
                    alt="" 
                />
                <div className='flex'>
                <img  
                    className='auto' 
                    src={mobilecart} 
                    alt="" 
                    onClick={() => navigate("/cart")}
                /><p className='pText auto'>{totalItemsInCart > 0 && totalItemsInCart}</p>
                </div>
                </> )}
                <img  
                    className='auto' 
                    src={mobilemenu} 
                    alt="" 
                    onClick={() => setOpenMenu ((prev) => !prev)}
                />
            </section>
        </div>
        <section className={ openMenu ? 'grid auto nav-lists' : 'noMobile'}>
            <ul className='grid nav-lists2 noMargin'>
                <li 
                    className='blue'
                    onClick={() => navigate("/")}
                >
                    home
                </li>
                <li 
                    className='blue'
                >
                    shop
                </li>
                <li 
                    className='blue'
                >
                    about
                </li>
                <li 
                    className='blue'
                >
                    blog
                </li>
                <li 
                    className='blue'
                >
                    contact
                </li>
                <li 
                    className='blue'
                >
                    pages
                </li>
            </ul>
            <ul className='grid nav-lists3'>
                <li className='sky'>
                    <img src={profile} alt="" className='auto'/> login/register
                </li>
                <li 
                    className='sky'
                    onClick={() => navigate("/cart")}
                >
                    <img src={navcart} alt="" />
                    {totalItemsInCart}
                </li>
                <li className='sky'>
                    <img src={search} alt="" />
                </li>
                <li className='sky'>
                    <img src={navheart} alt="" />
                </li>
            </ul>
        </section>
    </nav>
    

    </>
  )
}

export default Navbar