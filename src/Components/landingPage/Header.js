// the top of the site (likely fixed positioning for CSS)
import React from 'react'
import classes from '../../CSS/landing.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <img src={require('../../images/UDK-logo.png')} alt="Logo" className={classes.logo} />
            <button className={`${classes.btn} ${classes.donateBtn}`}>Donate</button>
        </div>
    )
}

export default Header

// todo add logo + 'Donate' btn