// This Card houses various information such as links 
import React from 'react'
import SectionTitle from './landingPage/SectionTitle'
import classes from '../CSS/landing.module.css'

const Card = ({ imageLink, cardTitle, cardDescription, cardText, pageLink, directoryChange }) => {
    return (
        <div className={classes.card}>
            <a href={pageLink}>
                <img className={classes.cardImg} src={imageLink} alt="Image-Link" onClick={directoryChange} width={300} />
                <p className={classes.cardDescription}>{cardDescription}</p>
                <hr></hr>
                {/* <SectionTitle className={classes.cardSectionTitle}>{cardTitle}</SectionTitle> */}
                <p className={classes.cardText}>{cardText}</p>
            </a>
        </div>
    )
}

export default Card


// todo add 'History' information