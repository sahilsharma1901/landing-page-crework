import React, {useEffect, useState} from 'react';
import styles from './Hero.module.css';

import prevArrow from '../../assets/icons/left-arrow.svg';
import nextArrow from '../../assets/icons/right-arrow.svg';

import {testimonialData as data} from "../../data/testimonialData"

const Hero = () => {

    const [testimonials, _] = useState(data);
    const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

    useEffect(
        () => {
            const interval = setInterval(() => {
                let activeTestimonialId = activeTestimonial.id
                if(activeTestimonialId === testimonials.length){
                    setActiveTestimonial(testimonials[0])
                } else {
                    setActiveTestimonial(testimonials[activeTestimonialId])
                }
            }, 4000)

            return () => {
                clearInterval(interval)
            }
        }, [activeTestimonial.id, testimonials]
    )

  return (
    <div className={styles.heroContainer}>
        <h1 className={styles.primaryText}>Build your best <br/> project in <span className={styles.highlight}>8 weeks</span></h1>
        <p className={styles.secondaryText}>Ideate, build, network and get mentored <br/> with the best people in tech</p>
        <div className={styles.heroInnerContainer}>
            <div className={styles.CTAContainer}>
                <button className={styles.joinWaitlist}>Apply now</button>
                <a href="#knowMore" className={styles.knowMore}>Know More</a>
            </div>
            <div className={styles.testimonialsCard}>
                <div className={styles.cardHeader}>
                    <div className={styles.DP}>
                        <img src={activeTestimonial.DP} alt={activeTestimonial.name}/>
                    </div>
                    <h2 className={styles.testimonialHeader}>{activeTestimonial.name}</h2>
                    <h3 className={styles.testimonialSubHeader}>{activeTestimonial.batch}</h3>
                </div>
                <div className={styles.testimonialContainer}>
                    <p className={styles.testimonialDescription}>{activeTestimonial.content}</p>
                    <div className={styles.navigationButtonsContainer}>
                        <p><img src={prevArrow} alt="previous"/></p>
                        <p><img src={nextArrow} alt="next"/></p>
                    </div>
                </div>
                <div className={styles.progressBar}>
                    {testimonials.map((_, index) => {
                        return <span className={`${styles.dot} ${index + 1 === activeTestimonial.id ? styles.active : ''} ${index + 1 === activeTestimonial.id - 1 ? styles.semiActive : ''}`} key={index}></span>
                    })}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;