import React, { useCallback } from 'react';
import styles from './Onboarding3.module.css';

const Onboarding3 = () => {
  const onButtonContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.onboaring3}>
      <div className={styles.onboarding3}>
        <img className={styles.image3Icon} alt="" />
        <div className={styles.text}>
          <div className={styles.text2}>
            <div className={styles.heading2}>
              <div className={styles.secureReliable}>Secure & Reliable</div>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.accessAffordableCleanEnerg}>Your produce is monitored 24/7 with automated alerts and transparent pricing.</div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.container2} />
            <div className={styles.container2} />
            <div className={styles.container4} />
          </div>
        </div>
        <div className={styles.ecocoldPrimaryButtons}>
          <div className={styles.secureReliable}>Get Started</div>
          <div className={styles.oluronkeMarthasIcons}>
            <img className={styles.vectorIcon} alt="" />
            <img className={styles.vectorIcon2} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.skip}>
        <div className={styles.button2} onClick={onButtonContainerClick}>
          <div className={styles.skip2}>Skip</div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding3;
