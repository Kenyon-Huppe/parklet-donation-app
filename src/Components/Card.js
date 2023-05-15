// This Card houses various information such as links 
import React from 'react'
import SectionTitle from './landingPage/SectionTitle'
import classes from '../CSS/landing.module.css'

const Card = ({ imageLink, cardDescription, cardText, pageLink, directoryChange }) => {
    return (
        <div className={classes.card}>
            <a href={pageLink}>
                <img className={classes.cardImg} src={imageLink} alt="Image-Link" onClick={directoryChange} width={300} />
                <p className={classes.cardDescription}>{cardDescription}</p>
                </a>
                <hr></hr>
                <p className={classes.cardText}>{cardText}</p>
            
        </div>
    )
}

export default Card


// todo add 'History' information