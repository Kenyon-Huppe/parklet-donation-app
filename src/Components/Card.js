// This Card houses various information such as links 
import React from 'react'
import SectionTitle from './landingPage/SectionTitle'
import classes from '../CSS/landing.module.css'

const Card = ({ imageLink, cardTitle, cardText }) => {
    return (
        <div className={classes.card}>
            <img src={imageLink} alt="Image-Link" />
            <SectionTitle className={classes.cardSectionTitle}>{cardTitle}</SectionTitle>
            <p className={classes.cardText}>{cardText}</p>
        </div>
    )
}

export default Card


// todo add 'History' information