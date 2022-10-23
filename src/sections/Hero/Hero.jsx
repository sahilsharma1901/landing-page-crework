import React, { useCallback, useEffect, useState } from "react";
import styles from "./Hero.module.css";

import prevArrow from "../../assets/icons/left-arrow.svg";
import nextArrow from "../../assets/icons/right-arrow.svg";

import { testimonialData as data } from "../../data/testimonialData";

const Hero = () => {
  const [testimonials, _] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(
    testimonials[activeIndex],
  );
  const [activeDP, setActiveDP] = useState(activeTestimonial.DP);

  const handleIncrement = useCallback(() => {
    if (activeIndex === testimonials.length - 1) {
      setActiveIndex(0);
      setActiveTestimonial(testimonials[0]);
      setActiveDP(testimonials[0].DP);
    } else {
      setActiveIndex(activeIndex + 1);
      setActiveTestimonial(testimonials[activeIndex + 1]);
      setActiveDP(testimonials[activeIndex + 1].DP);
    }
  }, [activeIndex, testimonials]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleIncrement();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [handleIncrement]);

  const handleDecrement = () => {
    if (activeIndex <= 0) {
      setActiveIndex(testimonials.length - 1);
      setActiveTestimonial(testimonials[testimonials.length - 1]);
      setActiveDP(testimonials[testimonials.length - 1].DP);
    } else {
      setActiveIndex(activeIndex - 1);
      setActiveTestimonial(testimonials[activeIndex - 1]);
      setActiveDP(testimonials[activeIndex - 1].DP);
    }
  };

  return (
    <div className={styles.heroContainer}>
      <div className="">
        <h1 className={styles.primaryText}>
          Build <span className={styles.specialText}>&nbsp;and Launch</span>{" "}
          <br />
          your best project
          <span className={styles.highlight}>
            {" "}
            <br /> in 12 weeks
          </span>
        </h1>
        <p className={styles.secondaryText}>
          Ideate, build, network and get mentored <br /> with the best people in
          tech
        </p>
        <div className={styles.heroInnerContainer}>
          <div className={styles.CTAContainer}>
            <a
              href="https://tally.so/r/3jadlx"
              target="_blank"
              rel="noreferrer"
              className={styles.joinWaitlist}>
              Apply now
            </a>
            <a href="#knowMore" className={styles.knowMore}>
              Know more
            </a>
          </div>
        </div>
      </div>
      <div className={styles.testimonialsCard}>
        <div className={styles.cardHeader}>
          <div className={styles.DP}>
            <img src={activeDP} alt={activeTestimonial.name} />
          </div>
          <h2 className={styles.testimonialHeader}>
            <span className={styles.p_text}>{activeTestimonial.name}</span>
            <span className={styles.s_text}>
              {activeTestimonial.batch} Batch {activeTestimonial.batchNumber}
            </span>
          </h2>
        </div>
        <div className={styles.testimonialContainer}>
          <p className={styles.testimonialDescription}>
            {activeTestimonial.content}
          </p>
          <div className={styles.progressBar}>
            {testimonials.map((_, index) => {
              return (
                <span
                  className={`${styles.dot} ${
                    index + 1 === activeTestimonial.id ? styles.active : ""
                  } ${
                    index + 1 === activeTestimonial.id - 1
                      ? styles.semiActive
                      : ""
                  }`}
                  key={index}></span>
              );
            })}
          </div>
          <div className="filler"></div>
          <div className={styles.navigationButtonsContainer}>
            <p onClick={handleDecrement}>
              <img
                src={nextArrow}
                alt="previous"
                className={styles.reversedImage}
              />
            </p>
            <p onClick={handleIncrement}>
              <img src={nextArrow} alt="next" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
