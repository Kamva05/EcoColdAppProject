import React, { useCallback } from 'react';
import styles from './Verification.module.css';

const Verification = () => {
  const onButtonIconClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.verification}>
      <div className={styles.otpVerificationScreen}>
        <div className={styles.container}>
          <img className={styles.buttonIcon} alt="" onClick={onButtonIconClick} />
        </div>
        <img className={styles.containerIcon} alt="" />
        <div className={styles.container2}>
          <div className={styles.heading1}>
            <div className={styles.enterCode}>Enter Code</div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.weSentA}>We sent a code to</div>
          </div>
          <div className={styles.paragraph2}>
            <img className={styles.icon} alt="" />
            <div className={styles.div}>+2348012345678</div>
          </div>
        </div>
        <div className={styles.container3}>
          <div className={styles.container4}>
            <div className={styles.container5}>
              <div className={styles.phoneInput} />
              <div className={styles.phoneInput2} />
              <div className={styles.phoneInput2} />
              <div className={styles.phoneInput} />
              <div className={styles.phoneInput5} />
              <div className={styles.phoneInput2} />
            </div>
            <div className={styles.paragraph3}>
              <div className={styles.weSentA}>
                <span>
                  <span>Code expires in</span>
                  <span className={styles.span}> </span>
                </span>
                <b className={styles.s}>40s</b>
              </div>
            </div>
            <div className={styles.ecocoldPrimaryButtons}>
              <div className={styles.div}>{`Verify & Login`}</div>
              <div className={styles.oluronkeMarthasIcons}>
                <img className={styles.vectorIcon} alt="" />
                <img className={styles.vectorIcon2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container6}>
          <img className={styles.icon2} alt="" />
          <div className={styles.container7}>
            <div className={styles.paragraph4}>
              <b className={styles.checkYourPhone}>Check your phone</b>
            </div>
            <div className={styles.paragraph5}>
              <div className={styles.enterThe6Digit}>Enter the 6-digit code from SMS</div>
            </div>
          </div>
        </div>
        <div className={styles.container8}>
          <img className={styles.icon3} alt="" />
          <img className={styles.icon4} alt="" />
          <img className={styles.icon5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Verification;
