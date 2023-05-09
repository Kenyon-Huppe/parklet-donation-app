// the top of the site (likely fixed positioning for CSS)
import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../../CSS/landing.module.css'


const Header = ({ }) => {
    // const navigate = useNavigate();
    return (
        <div className={classes.header}>
            <Link to='/'>
                <img src={require('../../images/UDK-logo.png')} alt="Logo" className={classes.logo} />
            </Link>
            
            <Link to='/donation'>
                <div className={classes.buttonNav}>
                    <button className={`${classes.btn} ${classes.donateBtn}`} >Donate</button>
                </div>
            </Link>
            {/* <hr></hr> */}
        </div>
    )
}

export default Header

// todo add logo + 'Donate' btn