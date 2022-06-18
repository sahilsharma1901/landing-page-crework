import React from 'react'
// import FAQ from '../sections/FAQ/FAQ';
// import Features from '../sections/Features/Features';
// import Hero from '../sections/Hero/Hero';
// import Mentors from '../sections/Mentors/Mentors';
// import Schedule from '../sections/Schedule/Schedule';
// import CTA from '../sections/SecondCTA/CTA';
// import Stats from '../sections/Stats/Stats';
// import WorkReady from '../sections/WorkReady/WorkReady';
import BeginnerHero from '../sections/Beginner_Hero/Hero';
import Navbar from '../sections/Navbar/Navbar'
import Footer from '../sections/Footer/Footer';
import BeginnerFeatures from '../sections/Beginner_Features/BeginnerFeatures';
import BeginnerFAQ from '../sections/Beginner_FAQ/BeginnerFAQ';
import BeginnerWho from '../sections/Beginner_Who/BeginnerWho';
import BeginnerCTA from '../sections/Beginner_SecondCTA/BeginnerCTA';
import BeginnerMentors from '../sections/Beginner_Mentors/BeginnerMentors';
import SubCTA from '../sections/Beginner_SubCTA/SubCTA';

const BWU = () => {
  return (
    <div>
      <Navbar/>
      <BeginnerHero/>
      <BeginnerWho/>
      <BeginnerFeatures/>
      <SubCTA/>
      <BeginnerMentors/>
      <BeginnerCTA/>
      <BeginnerFAQ/>
      <Footer/>
    </div>
  )
}

export default BWU