import React from 'react';
import styles from './Splash.module.css';
import EcocoldLogo from '/assets/images/EcoCold Logo 1.png';
const Splash = () => {
  return (
    <div className={styles.splash}>
      <img 
        className={styles.ecocoldLogoIcon} 
        src={EcocoldLogo} 
        alt="EcoCold Logo" 
      />
    </div>
  );
};

export default Splash;
