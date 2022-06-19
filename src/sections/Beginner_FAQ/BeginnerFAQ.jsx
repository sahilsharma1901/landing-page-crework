import React, {useState} from 'react'
import parse from 'html-react-parser';
import styles from './BeginnerFAQ.module.css'
import {beginnerFaqData as data} from "../../data/beginnerFaqData"
import plus from '../../assets/icons/plus.png'
import minus from '../../assets/icons/minus.png'

const BeginnerFAQ = () => {
    const [faqs, setFaqs] = useState(data);

    const faqHandler = (id) => {
        let updatedFaqs = faqs.map(faq => {
            if(id === faq.id){
                return {
                    ...faq,
                    opened: !faq.opened
                }
            } else {
                return faq
            }
        })

        setFaqs(updatedFaqs)
    }

  return (
    <div className={styles.FAQContainer}>
        <div className={styles.side}>
            <h2 className={styles.heading}>Help Center</h2>
            <h3 className={styles.subHeading}>Need answers?<br/>Find them here!</h3>
        </div>
        <div className={styles.main}>
            <div className={styles.FAQs}>
                {faqs.map((item, index) => {
                    return (
                        <div key={index} className={styles.FAQ} onClick={faqHandler.bind(null, item.id)}>
                            <div className={styles.FAQHead}>
                                <img src={item.opened ? minus : plus} alt="icon" className={styles.faqIcon} />
                                <p className={styles.text}>{item.question}</p>
                            </div>
                            <div className={`${styles.FAQBody} ${item.opened ? styles.opened : ''}`}>
                                <p className={styles.text}>{item.answer.map((sentence, idx) => {
                                    if(item.link) {
                                        const linkSentence = sentence.replace(item.link.anchor, `<a href="${item.link.url}" target="_blank">${item.link.anchor}</a>`)
                                        return <p className={styles.text} key={idx}>{parse(linkSentence)}</p>
                                    }

                                    return <p className={styles.text} key={idx}>{sentence}</p>
                                })}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default BeginnerFAQ