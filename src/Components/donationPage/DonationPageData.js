import React from 'react'
import Header from '../landingPage/Header'

const DonationPageData = ({ homePageLink, donationPageLink }) => {
    return (
        <div>
            <Header homePageLink={homePageLink} donationPageLink={donationPageLink}></Header>
        </div>
    )
}

export default DonationPageData