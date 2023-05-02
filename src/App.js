import './App.css';
import Header from './Components/landingPage/Header';
import ProjectName from './Components/landingPage/ProjectName';
import SectionTitle from './Components/landingPage/SectionTitle';
import Card from './Components/Card';
import classes from './CSS/landing.module.css'

function App() {
  return (
    <div className="App">
      <div className={classes.bannerSection}>
        <Header></Header>
        <img src={require('./images/UDK-banner.jpg')} alt='Banner-Image' className={classes.bannerImg} />
        <ProjectName></ProjectName>
      </div>
      <div className={classes.projectSection}>
        <SectionTitle titleName={'About the Parklet'}></SectionTitle>
        <p>Text about project HERE</p>
        <img src={require('./images/UDK-project.jpg')} alt='Parklet-Project-Img' />
      </div>
      <div className={classes.historySection}>
        <SectionTitle titleName={'Parklet History'}></SectionTitle>
        <div className={classes.cardHolder}>
          {/* !!!!!!! TODO PUT IN CORRECT IMAGES!!!!!!! */}
          <Card imageLink={require('./images/UDK-Parklet-01.jpg')} cardTitle={'CARD1 TITLE HERE'} cardText={'CARD1 TEXT HERE'}></Card>
          <Card imageLink={require('./images/UDK-Parklet-01.jpg')} cardTitle={'CARD2 TITLE HERE'} cardText={'CARD2 TEXT HERE'}></Card>
          <Card imageLink={require('./images/UDK-Parklet-01.jpg')} cardTitle={'CARD3 TITLE HERE'} cardText={'CARD3 TEXT HERE'}></Card>
        </div>
      </div>
      <div className={classes.footerSection}>
        <div className={classes.leftFooter}>
          {/* !!! TODO ADD LINKS BELOW !!! */}
          <ul className={classes.links}>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Instagram</a></li>
          </ul>
          <h3 className={classes.footerTitle}>Make your mark on the park!</h3>
          <p className={classes.footerText}>Get a custom inscription on a parklet deck board with a donation of $100 or just kick in a little bit to support our non-profit grow!</p>
          <button className={`${classes.btn} ${classes.footerBtn}`}><a href=''>Donate Now!</a></button>
          <div className={classes.contactInfo}>
            <div className={classes.phoneInfo}>
              <p>Phone</p>
              <p>PHONE NUMBER HERE</p>
            </div>
            <div className={classes.emailInfo}>
              <p>Email</p>
              <p>EMAIL ADDRESS HERE</p>
            </div>
          </div>
        </div>
        <div className={classes.rightFooter}>
          {/* !!! TODO REPLACE IMG HERE !!! */}
          <img src={require('./images/UDK-Parklet-01.jpg')} alt="Footer-Img" />
        </div>
      </div>

    </div >
  );
}

export default App;