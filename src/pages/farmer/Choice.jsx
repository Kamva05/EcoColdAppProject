import React, { useCallback } from 'react';
import styles from './Choice.module.css';

const Choice = () => {
  const onButtonIconClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.choice}>
      <div className={styles.choice2}>
        <div className={styles.heading2}>
          <div className={styles.iAmA}>I am a...</div>
        </div>
        <div className={styles.choice3}>
          <div className={styles.container}>
            <img className={styles.containerIcon} alt="" />
            <div className={styles.container2}>
              <div className={styles.heading3}>
                <div className={styles.farmerTrader}>Farmer / Trader</div>
              </div>
              <div className={styles.paragraph}>
                <div className={styles.storeProduceAnd}>Store produce and track spoilage risk</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.choice3}>
          <div className={styles.container3}>
            <img className={styles.containerIcon} alt="" />
            <div className={styles.container4}>
              <div className={styles.heading3}>
                <div className={styles.farmerTrader}>Hub Operator</div>
              </div>
              <div className={styles.paragraph}>
                <div className={styles.storeProduceAnd}>Manage storage facility and bookings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container5}>
        <img className={styles.buttonIcon} alt="" onClick={onButtonIconClick} />
      </div>
    </div>
  );
};

export default Choice;
