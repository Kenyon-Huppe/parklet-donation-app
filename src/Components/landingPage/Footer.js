import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../../CSS/landing.module.css'
import twitterIcon from '../../images/twitter.svg'
import instagramIcon from '../../images/instagram.svg'
  

const Footer = ({ }) => {
    // const navigate = useNavigate();
    return (
        <div className={classes.footerSection}>
        <div className={classes.leftFooter}>
          {/* !!! TODO ADD LINKS BELOW !!! */}
          <ul className={classes.links}>
            <li>
              <a href="https://twitter.com/UDistrictOrg"><img src={twitterIcon} alt="Twitter" className={classes.twitter} /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/udistrictseattle/"><img src={instagramIcon} alt="Instagram" className={classes.instagram} /></a>
            </li>
          </ul>
          <h3 className={classes.footerTitle}>Make your mark on the park!</h3>
          <p className={classes.footerText}>
            Get a custom inscription on a parklet deck board with a donation of $100 or just kick in a little bit to support our non-profit grow!
          </p>
          <div className={classes.contactInfo}>
           <div className={classes.addressInfo}>
          <strong>4208 University Way NE</strong>
          <br></br>
          <strong>Seattle WA 98105</strong>
          </div>
          <div className={classes.emailInfo}>
            <a className={classes.email} href="mailto:info@udistrict.org">info@udistrict.org</a>
            <br></br>
          </div>
          </div>
        </div>
        <div className={classes.rightFooter}>
          <img src={require('../../images/UDK-board.jpg')} alt="Footer-Img" className={classes.birdImg} />
        </div>
      </div>
    )
}

export default Footer