// This Card houses various information such as links 
import React from 'react'
import classes from '../../CSS/donation.module.css'

const DonationCard = ({ imageLink, cardDescription, pageLink, directoryChange, cardTitle, cardText}) => {
    return (
        <div className={classes.cardContainer}>
            <div className={classes.card}>
                <p className={classes.donationTitle} onClick={directoryChange}>{cardTitle}</p>
                <a href={pageLink}>
                    <img className={classes.cardImg} src={imageLink} alt="Image-Link" onClick={directoryChange} width={300} />
                </a>
                <p className={classes.cardText} onClick={directoryChange}>{cardText}</p>
            </div>
        </div>
    )
}

export default DonationCard