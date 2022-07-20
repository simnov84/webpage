import React from 'react';
import styles from '../../../styles/Home.module.css';
import { FaSun, FaUser, FaUsers } from "react-icons/fa";

const WeDealIn = (): JSX.Element => {
  return (
    <div id={styles.weDeal}>
      <div>
        <h3>WE DEAL IN</h3>
      </div>
      <div className={styles.weDealMethods}>
        <div className={styles.gridItemWeDeal}>
          <div className={styles.weDealUsers}>
            <FaUsers size={'5rem'} color={'hsl(190deg 97% 47%)'} />
          </div>
          <div>
            <div className={styles.weDealHeader}>IT Staffing Solutions</div>
            <p className={styles.para}>
              These are the days of tougher competition and it is ever-evolving market out there. The ability of assembling optimum performance teams that cop up with immediate changes.
            </p>
          </div>
        </div>
        <div className={styles.gridItemWeDeal}>
          <div className={styles.weDealUsers}>
            <FaSun size={'5rem'} color={'hsl(190deg 97% 47%)'} />
          </div>
          <div>
            <div className={styles.weDealHeader}>IT Services</div>
            <p className={styles.para}>
              We have a huge client base and deal with tens of thousands of IT professionals every week. Our IT relations make us strong in turning things alive and creating workable environment.
            </p>
          </div>
        </div>
        <div className={styles.gridItemWeDeal}>
          <div className={styles.weDealUser}>
            <FaUser size={'4rem'} color={'white'} style={{ borderRadius: '50%;' }} />
          </div>
          <div>
            <div className={styles.weDealHeader}>IT Talent Management Expertise</div>
            <p className={styles.para}>
              Quality preparation and execution always harbingers of huge success. We have these principles in mind every moment of our journey. Solutions Sync counsels you about the right workforce strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeDealIn