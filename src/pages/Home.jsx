import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero section/Hero'
import BestSeller from '../components/bestseller/BestSeller'
import BestServices from '../components/bestservices/BestServices'
import Featured from '../components/featured/Featured'
import About from '../components/aboutus/About'
import Cta from '../components/cta/Cta'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <BestSeller/>
    <BestServices/>
    <Featured/>
    <About/>
    <Cta/>
    </>
  )
}

export default Home