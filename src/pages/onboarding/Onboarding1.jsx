import React, { useCallback } from 'react';
import styles from './Onboarding1.module.css';

const Onboarding1 = () => {
  const onButtonContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.onboaring1}>
      <div className={styles.onboarding1}>
        <img className={styles.image1Icon} alt="" />
        <div className={styles.textParent}>
          <div className={styles.text}>
            <div className={styles.heading2}>
              <div className={styles.solarPoweredColdStorage}>Solar-Powered Cold Storage</div>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.accessAffordableCleanEnerg}>Access affordable, clean-energy cold storage hubs near you. Pay only for what you use.</div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.container2} />
            <div className={styles.container3} />
            <div className={styles.container3} />
          </div>
        </div>
        <div className={styles.ecocoldPrimaryButtons}>
          <div className={styles.solarPoweredColdStorage}>Next</div>
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

export default Onboarding1;
