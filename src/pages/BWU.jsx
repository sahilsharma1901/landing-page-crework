import React from 'react'
import FAQ from '../sections/FAQ/FAQ';
import Features from '../sections/Features/Features';
import Footer from '../sections/Footer/Footer';
import Hero from '../sections/Hero/Hero';
import Mentors from '../sections/Mentors/Mentors';
import Navbar from '../sections/Navbar/Navbar'
import Schedule from '../sections/Schedule/Schedule';
import CTA from '../sections/SecondCTA/CTA';
import Stats from '../sections/Stats/Stats';
import WorkReady from '../sections/WorkReady/WorkReady';
import BeginnerHero from '../sections/Beginner_Hero/Hero';
import BeginnerFeatures from '../sections/Beginner_Features/BeginnerFeatures';
import BeginnerFAQ from '../sections/Beginner_FAQ/BeginnerFAQ';
import BeginnerWho from '../sections/Beginner_Who/BeginnerWho';

const BWU = () => {
  return (
    <div>
      <Navbar/>
      <BeginnerHero/>
      <BeginnerWho/>
      <BeginnerFeatures/>
      <BeginnerFAQ/>
      <Footer/>
    </div>
  )
}

export default BWU