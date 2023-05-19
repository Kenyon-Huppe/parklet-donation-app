// This Card houses various information such as links 
import React from 'react'
import classes from '../../CSS/donation.module.css'

const DonationCard = ({ imageLink, cardDescription, cardText, pageLink, directoryChange }) => {
    return (
        <div className={classes.donationCardContainer}>
            <a href={pageLink}>
                <img className={classes.cardImg} src={imageLink} alt="Image-Link" onClick={directoryChange} width={300} />
                <p className={classes.cardDescription}>{cardDescription}</p>
            </a>
            <hr></hr>
            <p className={classes.cardText}>{cardText}</p>

        </div>
    )
}

export default DonationCard


// todo add 'History' information