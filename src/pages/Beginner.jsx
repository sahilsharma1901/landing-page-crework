import React, {useEffect} from 'react'
import BeginnerHero from '../sections/Beginner_Hero/Hero';
import Navbar from '../sections/Navbar/Navbar'
import Footer from '../sections/Footer/Footer';
import BeginnerFeatures from '../sections/Beginner_Features/BeginnerFeatures';
import BeginnerFAQ from '../sections/Beginner_FAQ/BeginnerFAQ';
import BeginnerWho from '../sections/Beginner_Who/BeginnerWho';
import BeginnerCTA from '../sections/Beginner_SecondCTA/BeginnerCTA';
import BeginnerMentors from '../sections/Beginner_Mentors/BeginnerMentors';
import SubCTA from '../sections/Beginner_SubCTA/SubCTA';

const Beginner = () => {
  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])
  return (
    <div>
      <Navbar showAbout={true}/>
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

export default Beginner