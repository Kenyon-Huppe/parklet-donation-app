// the top of the site (likely fixed positioning for CSS)
import React from 'react'
import classes from '../../CSS/header.module.css'


const Header = ({ homePageLink, donationPageLink }) => {
    // const navigate = useNavigate();
    return (
        <div className={classes.header}>
            <img src={require('../../images/UDK-logo.png')} alt="Logo" className={classes.logo} onClick={homePageLink} />
           <div className={classes.buttonNav}>
                <button className={`${classes.btn} ${classes.donateBtn}`} onClick={donationPageLink}>Donate</button>
            </div>
            {/* <hr></hr> */}
        </div>
    )
}

export default Header

// todo add logo + 'Donate' btn