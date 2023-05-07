import './App.css';

import Header from './Components/landingPage/Header';
import SectionTitle from './Components/landingPage/SectionTitle';
import classes from './CSS/landing.module.css'
import Card from './Components/Card'
import facebookIcon from './images/facebook.svg'
import twitterIcon from './images/twitter.svg'
import instagramIcon from './images/instagram.svg'

import { Routes, Route, useNavigate } from 'react-router-dom'
import DonationPageData from './Components/donationPage/DonationPageData';


function App() {
  let navigate = useNavigate();

  // function navigates to home page
  const homePageLink = () => {
    navigate('/');
  }

  // function navigates to donation page
  const donationPageLink = () => {
    navigate('/donation');
  }

  // holds data for landing page
  const homePage = <div className="App">
    <section className={classes.bannerSection}>
      <Header homePageLink={homePageLink} donationPageLink={donationPageLink}></Header>
      <img src={require('./images/UDK-banner.jpg')} alt='Banner-Image' className={classes.bannerImg} />
      <img src={require('./images/UDK-parklet-name.png')} alt="Partlet-on-the-Ave" className={classes.title} />
    </section>
    <section className={classes.projectSection}>
      <SectionTitle titleName={'About the Parklet'}></SectionTitle>
      <hr></hr>
      <p>
        To help fund the renovation of The Parklet on the Ave., we invite you to become a part of this exciting project and join us in making a difference in our community. Your support will be acknowledged with a wooden floor-board personalized with a custom quote by you (of up to 80 words), showcasing your commitment to the parklet's continued success and making your mark on the U-District.
      </p>
      <p>
        So, what are you waiting for? Donate today and be a part of something truly special. Your name will forever be associated with the parklet on the Ave, a testament to your dedication to the community and its public spaces. Thank you for your support!
      </p>

      <img src={require('./images/UDK-project.jpg')} alt='Parklet-Project-Img' />
    </section>
    <section className={classes.historySection}>
      <SectionTitle titleName={'Parklet History'}></SectionTitle>
      <div className={classes.cardHolder}>
        {/* !!!!!!! TODO PUT IN CORRECT IMAGES!!!!!!! */}
        <Card imageLink={require('./images/kickstarter-2-logo-png-transparent.png')} cardTitle={'Original Kickstarter'} cardText={'The kickstarter campaign that started it all!'}></Card>
        <Card imageLink={require('./images/UDK-parklet-dedication.jpg')} cardTitle={'Parklet Dedication'} cardText={'Original dedication of parklet (May 2015)'}></Card>
        <Card imageLink={require('./images/UDK-parklet-contstruction.jpg')} cardTitle={'Construction Timelapse'} cardText={'Short timelapse video of the parklet construction'}></Card>
      </div>
    </section>
    <section className={classes.footerSection}>
      <div className={classes.leftFooter}>
        {/* !!! TODO ADD LINKS BELOW !!! */}
        <ul className={classes.links}>
          <li>
            <a href=''><img src={facebookIcon} alt="Facebook" /></a>
          </li>
          <li>
            <a href=""><img src={twitterIcon} alt="Twitter" /></a>
          </li>
          <li>
            <a href=""><img src={instagramIcon} alt="Instagram" /></a>
          </li>
        </ul>
        <h3 className={classes.footerTitle}>Make your mark on the park!</h3>
        <p className={classes.footerText}>
          Get a custom inscription on a parklet deck board with a donation of $100 or just kick in a little bit to support our non-profit grow!
        </p>
        <button className={`${classes.btn} ${classes.footerBtn}`} onClick={donationPageLink}>Donate Now!</button>
        <article className={classes.contactInfo}>
          <div className={classes.phoneInfo}>
            <p>Phone</p>
            <p>PHONE NUMBER HERE</p>
          </div>
          <div className={classes.emailInfo}>
            <p>Email</p>
            <p>EMAIL ADDRESS HERE</p>
          </div>
        </article>
      </div>
      <div className={classes.rightFooter}>
        <img src={require('./images/UDK-board.jpg')} alt="Footer-Img" />
      </div>
      {/* below is included as it is necessary to credit for use of given favicons */}
      <article className={classes.faviconLink}>
        <div className={classes.faviconLinkFacebook}>
          <a target="_blank" href="https://icons8.com/icon/118467/facebook">Facebook</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div className={classes.faviconLinkTwitter}>
          <a target="_blank" href="https://icons8.com/icon/60014/twitter">Twitter</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div className={classes.faviconLinkInstagram}>
          <a target="_blank" href="https://icons8.com/icon/32309/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
      </article>
    </section>
  </div >;

  // holds all routes for website
  return (
    <div className='container'>
      <Routes>
        {/* home */}
        <Route path='/' element={homePage} exact></Route>
        {/* donation */}
        <Route path='/donation' element={<DonationPageData homePageLink={homePageLink} donationPageLink={donationPageLink}></DonationPageData>} exact></Route>
      </Routes>
    </div>
  );
}

export default App;