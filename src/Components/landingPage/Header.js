// the top of the site (likely fixed positioning for CSS)
import React from 'react'
// import { useNavigate } from 'react-router-dom'
import classes from '../../CSS/landing.module.css'

const Header = ({ homePageLink, donationPageLink }) => {
    // const navigate = useNavigate();
    return (
        <div className={classes.header}>
            <img src={require('../../images/UDK-logo.png')} alt="Logo" className={classes.logo} onClick={homePageLink} />

            <button className={`${classes.btn} ${classes.donateBtn}`} onClick={donationPageLink}>Donate</button>
        </div>
    )
}

export default Header