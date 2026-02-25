import React, { useCallback } from 'react';
import styles from './Signup.module.css';

const Signup = () => {
  const onButtonIconClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.signup}>
      <div className={styles.containerParent}>
        <div className={styles.container}>
          <img className={styles.buttonIcon} alt="" onClick={onButtonIconClick} />
        </div>
        <div className={styles.signUp}>
          <img className={styles.containerIcon} alt="" />
          <div className={styles.container2}>
            <div className={styles.heading1}>
              <div className={styles.createAccount}>Create Account</div>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.joinEcocoldTo}>Join EcoCold to get started</div>
            </div>
          </div>
          <div className={styles.signUpForm}>
            <div className={styles.container3}>
              <div className={styles.container4}>
                <img className={styles.containerIcon2} alt="" />
                <div className={styles.label}>
                  <div className={styles.joinEcocoldTo}>Your Name</div>
                </div>
                <div className={styles.textInput}>
                  <b className={styles.joinEcocoldTo}>Aisha Ahmed</b>
                </div>
                <img className={styles.containerIcon3} alt="" />
                <div className={styles.label2}>
                  <div className={styles.joinEcocoldTo}>Phone Number</div>
                </div>
                <div className={styles.container5}>
                  <div className={styles.container6}>
                    <div className={styles.text}>
                      <div className={styles.div}>+234</div>
                    </div>
                  </div>
                  <div className={styles.phoneInput}>
                    <div className={styles.joinEcocoldTo}>801 234 5678</div>
                  </div>
                </div>
                <div className={styles.paragraph2}>
                  <div className={styles.wellSendYou}>We'll send you a verification code</div>
                </div>
                <div className={styles.ecocoldPrimaryButtons}>
                  <div className={styles.createAccount}>Continue</div>
                  <div className={styles.oluronkeMarthasIcons}>
                    <img className={styles.vectorIcon} alt="" />
                    <img className={styles.vectorIcon2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container7}>
            <img className={styles.icon} alt="" />
            <div className={styles.container8}>
              <div className={styles.paragraph3}>
                <b className={styles.easySignup}>Easy signup</b>
              </div>
              <div className={styles.paragraph4}>
                <div className={styles.enterYourName}>1. Enter your name</div>
                <div className={styles.enterPhoneNumber}>2. Enter phone number (10 digits)</div>
                <div className={styles.verifyWithCode}>3. Verify with code</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container9}>
          <div className={styles.paragraph5}>
            <div className={styles.joinEcocoldTo}>Already have an account?</div>
          </div>
          <div className={styles.button2} onClick={onButtonIconClick}>
            <div className={styles.signIn}>Sign-In</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
