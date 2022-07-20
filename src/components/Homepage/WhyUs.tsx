import React from 'react';
import styles from '../../../styles/Home.module.css';
import { FaBriefcase, FaThumbsUp, FaUser } from "react-icons/fa";

const WhyUs = (): JSX.Element => {
  return (
    <div id={styles.whyUs}>
      <div>
        <h3>WHY US</h3>
      </div>
      <div className={styles.whyUsMethods}>
        <div className={styles.gridItem}>
          <div className={styles.methodFonts}>
            <FaThumbsUp size={'3.5rem'} color={'white'} />
          </div>
          <div className={styles.methodHeader}>Specialization</div>
          <p className={styles.para}>
            We specializes in matching both professional qualifications with the 
            client&apos;s requirements and personality with the business culture 
            to find you the best fit.
          </p>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.methodFonts}>
            <FaBriefcase size={'3.5rem'} color={'white'} />
          </div>
          <div className={styles.methodHeader}>Job Seekers</div>
          <p className={styles.para}>
            If you are a job seeker – Our goal is to provide you with outstanding 
            career opportunities in the IT industry that are the best fit for you!
          </p>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.methodFonts}>
            <FaUser size={'3.5rem'} color={'white'} />
          </div>
          <div className={styles.methodHeader}>Client</div>
          <p className={styles.para}>
            If you are a client in search of workforce – Solutions Sync is 
            skilled in recruiting professionals for all IT platforms. We take 
            a hands-on approach with your organization, learning about 
            and understanding your technical and cultural environment, 
            before we begin work on your job order.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs