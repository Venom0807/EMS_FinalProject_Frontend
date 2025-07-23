import React from 'react'
import HeroSection from '../components/Herosection'
import Navbar from '../components/Navbar'
import WhyChooseUs from '../components/WhyChooseUs'
import Features from '../components/Features'
import Footer from '../components/Footer.jsx'
import CitySlider from '../components/CitySlider.jsx'
import Contact from './Contact.jsx'


const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <WhyChooseUs></WhyChooseUs>
      <CitySlider></CitySlider>
      <Features></Features>
      <Contact></Contact>
      <Footer></Footer>


    </>
  )
}

export default Home