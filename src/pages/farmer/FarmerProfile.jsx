import React from 'react';
import styles from './FarmerProfile.module.css';

const FarmerProfile = () => {
  return (
    <div className={styles.farmerProfile}>
      <div className={styles.profile}>
        <div className={styles.profile2}>
          <div className={styles.heading1}>
            <div className={styles.profile3}>Profile</div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.manageYourAccount}>Manage your account settings</div>
          </div>
        </div>
        <div className={styles.editProfile}>
          <div className={styles.container}>
            <div className={styles.container2}>
              <div className={styles.ecocoldAvatar}>
                <div className={styles.avatarPlain} />
                <img className={styles.avatarImageIcon} alt="" />
                <div className={styles.online}>
                  <div className={styles.oluronkeMarthasIcons}>
                    <img className={styles.vectorIcon} alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.container3}>
                <div className={styles.heading2}>
                  <div className={styles.aishaAhmed}>Aisha Ahmed</div>
                </div>
                <div className={styles.paragraph2}>
                  <div className={styles.memberSinceJanuary}>Member since January 2026</div>
                </div>
              </div>
            </div>
            <div className={styles.ecocoldPrimaryButtons}>
              <div className={styles.button}>Edit Profile</div>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.container4}>
            <div className={styles.heading3}>
              <b className={styles.manageYourAccount}>Contact Information</b>
            </div>
          </div>
          <div className={styles.container5}>
            <div className={styles.button2}>
              <div className={styles.container6}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.container7}>
                  <div className={styles.heading3}>
                    <div className={styles.phoneNumber}>Phone Number</div>
                  </div>
                  <div className={styles.paragraph4}>
                    <div className={styles.div}>+234 801 234 5678</div>
                  </div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
            <div className={styles.button3}>
              <div className={styles.container8}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.container7}>
                  <div className={styles.heading3}>
                    <div className={styles.phoneNumber}>Email Address</div>
                  </div>
                  <div className={styles.paragraph4}>
                    <div className={styles.div}>john.adebayo@email.com</div>
                  </div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
            <div className={styles.button4}>
              <div className={styles.container10}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.container7}>
                  <div className={styles.heading3}>
                    <div className={styles.phoneNumber}>Location</div>
                  </div>
                  <div className={styles.paragraph4}>
                    <div className={styles.div}>Lagos, Nigeria</div>
                  </div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.setting}>
          <div className={styles.container4}>
            <div className={styles.heading3}>
              <b className={styles.phoneNumber}>Settings</b>
            </div>
          </div>
          <div className={styles.container13}>
            <div className={styles.button5}>
              <div className={styles.container14}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.paragraph9}>
                  <div className={styles.phoneNumber}>Push Notifications</div>
                </div>
              </div>
              <div className={styles.primitivebutton}>
                <div className={styles.primitivespan} />
              </div>
            </div>
            <div className={styles.button5}>
              <div className={styles.container15}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.paragraph9}>
                  <div className={styles.phoneNumber}>SMS Alerts</div>
                </div>
              </div>
              <div className={styles.primitivebutton}>
                <div className={styles.primitivespan} />
              </div>
            </div>
            <div className={styles.button7}>
              <div className={styles.container16}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.paragraph11}>
                  <div className={styles.phoneNumber}>Payment Methods</div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
            <div className={styles.button8}>
              <div className={styles.container17}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.paragraph9}>
                  <div className={styles.phoneNumber}>{`Security & Privacy`}</div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.container18}>
          <div className={styles.container4}>
            <div className={styles.heading3}>
              <b className={styles.phoneNumber}>Support</b>
            </div>
          </div>
          <div className={styles.container20}>
            <div className={styles.button9}>
              <div className={styles.container21}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.paragraph9}>
                  <div className={styles.phoneNumber}>Help Center</div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
            <div className={styles.button10}>
              <div className={styles.container22}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.paragraph9}>
                  <div className={styles.phoneNumber}>Contact Support</div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.button11}>
          <img className={styles.icon} alt="" />
          <div className={styles.text}>
            <div className={styles.switchToHub}>Switch to Hub Operator View</div>
          </div>
        </div>
        <div className={styles.button12}>
          <img className={styles.icon} alt="" />
          <div className={styles.text2}>
            <div className={styles.logOut}>Log Out</div>
          </div>
        </div>
        <div className={styles.text3}>
          <div className={styles.ecocoldV100}>EcoCold v1.0.0</div>
        </div>
      </div>
      <div className={styles.bNav}>
        <div className={styles.home}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon2} alt="" />
            <img className={styles.vectorIcon3} alt="" />
          </div>
          <div className={styles.text4}>
            <div className={styles.discover}>Home</div>
          </div>
        </div>
        <div className={styles.dis}>
          <img className={styles.icon} alt="" />
          <div className={styles.text4}>
            <div className={styles.discover}>Discover</div>
          </div>
        </div>
        <div className={styles.dis}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon4} alt="" />
          </div>
          <div className={styles.text4}>
            <div className={styles.discover}>Alert</div>
          </div>
        </div>
        <div className={styles.dis}>
          <img className={styles.icon} alt="" />
          <div className={styles.text4}>
            <div className={styles.bookings2}>Bookings</div>
          </div>
        </div>
        <div className={styles.dis}>
          <img className={styles.icon} alt="" />
          <div className={styles.text4}>
            <div className={styles.discover}>Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;
