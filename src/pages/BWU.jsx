import React, {useEffect} from 'react'
import FAQ from '../sections/FAQ/FAQ';
import Features from '../sections/Features/Features';
import Hero from '../sections/Hero/Hero';
import Mentors from '../sections/Mentors/Mentors';
import Schedule from '../sections/Schedule/Schedule';
import CTA from '../sections/SecondCTA/CTA';
import Stats from '../sections/Stats/Stats';
import WorkReady from '../sections/WorkReady/WorkReady';
import Navbar from '../sections/Navbar/Navbar'
import Footer from '../sections/Footer/Footer';
import Companies from '../sections/Companies/Companies';


const BWU = () => {
  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Stats/>
      <WorkReady/>
      <Schedule/>
      <Features/>
      <Companies/>
      <Mentors/>
      <CTA/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default BWU