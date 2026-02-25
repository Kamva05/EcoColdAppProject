import React, { useCallback } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const onButtonIconClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.login}>
      <div className={styles.containerParent}>
        <div className={styles.container}>
          <img className={styles.buttonIcon} alt="" onClick={onButtonIconClick} />
        </div>
        <div className={styles.login2}>
          <img className={styles.containerIcon} alt="" />
          <div className={styles.container2}>
            <div className={styles.heading1}>
              <div className={styles.welcomeBack}>Welcome Back!</div>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.enterYourPhone}>Enter your phone number to continue</div>
            </div>
          </div>
          <div className={styles.container3}>
            <div className={styles.form}>
              <div className={styles.paragraph2}>
                <div className={styles.wellSendYou}>We'll send you a code to verify your number</div>
              </div>
              <img className={styles.containerIcon2} alt="" />
              <div className={styles.label}>
                <div className={styles.enterYourPhone}>Phone Number</div>
              </div>
              <div className={styles.container4}>
                <div className={styles.container5}>
                  <div className={styles.text}>
                    <div className={styles.div}>+234</div>
                  </div>
                </div>
                <div className={styles.phoneInput}>
                  <div className={styles.enterYourPhone}>801 234 5678</div>
                </div>
              </div>
              <div className={styles.ecocoldPrimaryButtons}>
                <div className={styles.welcomeBack}>Continue</div>
                <div className={styles.oluronkeMarthasIcons}>
                  <img className={styles.vectorIcon} alt="" />
                  <img className={styles.vectorIcon2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container6}>
            <div className={styles.paragraph3}>
              <div className={styles.enterYourPhone}>Don't have an account?</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.createAccount}>Create Account</div>
            </div>
          </div>
          <div className={styles.container7}>
            <img className={styles.icon} alt="" />
            <div className={styles.paragraph4}>
              <div className={styles.typeYourPhone}>Type your phone number (10 digits)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

