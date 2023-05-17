import './App.css';

import Header from './Components/landingPage/Header';
// import SectionTitle from './Components/landingPage/SectionTitle';
import classes from './CSS/landing.module.css'
import Card from './Components/Card'
import twitterIcon from './images/twitter.svg'
import instagramIcon from './images/instagram.svg'
import { Routes, Route, useNavigate } from 'react-router-dom'
import DonationPageData from './Components/donationPage/DonationPageData';
import DonationFormWithStripe from './Components/donationPage/DonationFormWithStripe';
import CustomDonation from './Components/donationPage/CustomDonation';


function App() {
  let navigate = useNavigate();

  // function navigates to donation page
  const donationPageLink = () => {
    navigate('/donation');
  }

// function navigates to donation form URL
const donationFormLink = () => {
  window.location.href = 'https://donate.stripe.com/test_aEU2at0MO8Mffja145';
}

// function navigates to custom donation URL
const customDonationLink = () => {
  window.location.href = 'https://donate.stripe.com/test_dR68yR7bcgeH6ME144';
}


  // holds data for landing page
  const homePage = <div className="App">
    <section className={classes.bannerSection}>
      <Header></Header>
      <img src={require('./images/UDK-banner.jpg')} alt='Banner-Image' className={classes.bannerImg} />
      <img src={require('./images/UDK-parklet-name.png')} alt="Partlet-on-the-Ave" className={classes.title} />
    </section>
    <div className={classes.projectSection}>
      {/* <SectionTitle titleName={'About the Parklet'}></SectionTitle> */}
      <div className={classes.projectInfo}>
        <h1 className={classes.titleName}>About the Parklet</h1>
        <hr className={classes.titleUnderline}></hr>
        <br></br>
        <p className={classes.projectGoal}>
          To help fund the renovation of The Parklet on the Ave., we invite you to become a part of this exciting project and join us in making a difference in our community. Your support will be acknowledged with a wooden floor-board personalized with a custom quote by you (of up to 80 characters), showcasing your commitment to the parklet's continued success and making your mark on the U District.
        </p>
        <p className={classes.projectGoal}>
          So, what are you waiting for? Donate today and be a part of something truly special. Your name will forever be associated with the parklet on the Ave, a testament to your dedication to the community and its public spaces. Thank you for your support!
        </p>
      </div>
      <div className={classes.parkletImg}>
        <img src={require('./images/UDK-project.jpg')} alt='Parklet-Project-Img' className={classes.parkletPic} />
      </div>
    </div>
    <div className={classes.historySection}>
      {/* <SectionTitle titleName={'Parklet History'}></SectionTitle> */}
      <h1 className={classes.titleNameHis}>Parklet History</h1>
      <div className={classes.cardHolder}>
        {/* !!!!!!! TODO PUT IN CORRECT IMAGES!!!!!!! */}
        <Card pageLink={"https://www.kickstarter.com/projects/udistrictsquare/u-district-parklet"} cardDescription={'Original Kickstarter'} imageLink={require('./images/kickstarter-2-logo-png-transparent.png')} cardText={'The kickstarter campaign that started it all!'}></Card>
        <Card pageLink={"https://www.theurbanist.org/2015/06/26/u-district-parklet-launch-celebration/"} cardDescription={'Parklet Dedication'} imageLink={require('./images/UDK-parklet-dedication.jpg')} cardText={'Original dedication of parklet (May 2015)'}></Card>
        <Card pageLink={"https://www.youtube.com/watch?v=0TpebWOzGE4"} cardDescription={'Construction Timelapse'} imageLink={require('./images/UDK-parklet-contstruction.jpg')} cardText={'Short timelapse video of the parklet construction'}></Card>
      </div>
    </div>
    <div className={classes.footerSection}>
      <div className={classes.leftFooter}>
        {/* !!! TODO ADD LINKS BELOW !!! */}
        <ul className={classes.links}>
          <li>
            <a href=""><img src={twitterIcon} alt="Twitter" className={classes.twitter} /></a>
          </li>
          <li>
            <a href=""><img src={instagramIcon} alt="Instagram" className={classes.instagram} /></a>
          </li>
        </ul>
        <h3 className={classes.footerTitle}>Make your mark on the park!</h3>
        <p className={classes.footerText}>
          Get a custom inscription on a parklet deck board with a donation of $100 or just kick in a little bit to support our non-profit grow!
        </p>
        <button className={`${classes.btn} ${classes.footerBtn}`} onClick={donationPageLink}>Donate Now!</button>
        <div className={classes.contactInfo}>
          <div className={classes.phoneInfo}>
            <p>Phone</p>
            <p>PHONE NUMBER HERE</p>
          </div>
          <div className={classes.emailInfo}>
            <p>Email</p>
            <p>EMAIL ADDRESS HERE</p>
            <br></br>
          </div>
          </div>
            <div className={classes.faviconLink}>
              {/* <div className={classes.faviconLinkTwitter}>
                <a target="_blank" href="https://icons8.com/icon/60014/twitter">Twitter</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
              </div>
              <div className={classes.faviconLinkInstagram}>
                <a target="_blank" href="https://icons8.com/icon/32309/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
              </div> */}
            </div>
        </div>

      <div className={classes.rightFooter}>
        <img src={require('./images/UDK-board.jpg')} alt="Footer-Img" className={classes.birdImg} />
      </div>
    </div>
    </div>;

  // holds all routes for website
  return (
    <div className='container'>
      <Routes>
        {/* home */}
        <Route path='/' element={homePage} exact></Route>
        {/* donation */}
        <Route path='/donation' element={<DonationPageData donationFormLink={donationFormLink} customDonationLink={customDonationLink}></DonationPageData>} exact></Route>
        <Route path="/donation/board-donation" element={<DonationFormWithStripe />} />
        <Route path='/donation/custom-donation' element={<CustomDonation></CustomDonation>} exact></Route>
      </Routes>
    </div>
  );
}

export default App;