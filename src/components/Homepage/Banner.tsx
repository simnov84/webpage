import Image from 'next/image';
import React from 'react';
import styles from '../../../styles/Home.module.css';
import bgImage from '../../assets/Training.jpeg';

const Banner = (): JSX.Element => {
  return (
    <div id={styles.banner}>
      <div id={styles.overlay}>
        <div className={styles.title}>
          <div className={styles.bannerContent}>
            <h1>
              WE ARE RESPONSIVE
            </h1>
            <div id={styles.headContent}>
              Delivering Services in creating and understanding IT Solutions
            </div>
          </div>
        </div>
        <div className={styles.bgImage}>
          <Image src={bgImage} alt='banner background image' id={styles.images} layout='responsive' />
        </div>
      </div>
    </div>
  )
}

export default Banner