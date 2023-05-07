// This Card houses various information such as links 
import React from 'react'
import SectionTitle from './landingPage/SectionTitle'
import classes from '../CSS/landing.module.css'

const Card = ({ imageLink, cardTitle, cardText, pageLink, directoryChange }) => {
    return (
        <div className={classes.card}>
            <a href={pageLink}>
                <img src={imageLink} alt="Image-Link" onClick={directoryChange} />
                {/* <SectionTitle className={classes.cardSectionTitle}>{cardTitle}</SectionTitle> */}
                <p className={classes.cardText}>{cardText}</p>
            </a>
        </div>
    )
}

export default Card


// todo add 'History' information