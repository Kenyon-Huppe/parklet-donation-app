import React from 'react'
import Header from '../landingPage/Header'
import DonationCard from '../donationPage/DonationCard'
import DonateCard from '../../images/donateCard.png'
import classes from '../../CSS/donation.module.css'
import Footer from '../landingPage/Footer'


// import donationFormImg from '../../images/UDK-Parklet-03.jpg'

const DonationPageData = ({ donationFormLink, customDonationLink }) => {
    // const [wordCount, setWordCount] = React.useState(0);
    return (
        <div>
            <Header></Header>
            <h1>Donate</h1>
            <hr></hr>
            <div className={classes.donateSection}>
                <DonationCard className={classes.donationCard} imageLink={DonateCard} directoryChange={donationFormLink} cardTitle={'Buy a Board'} cardText={'Purchase a custom engraved board ($100 minimum) with text of your choosing (70 characters) that will be the foundation for the parklet for years to come!'} ></DonationCard>
                <DonationCard className={classes.donationCard} imageLink={DonateCard} directoryChange={customDonationLink} cardTitle={'Custom Donation'} cardText={'Don\'t feel like spending $100 for a custom board? That\'s alright! You can still do your part to help support the parklet & it\'s continued development with a custom donation!'}></DonationCard>
            </div>
            <Footer></Footer>
        </div>



        // DELETE LATER POSSIBLY (if end up going with donation subpages) <div>
        //     <Header homePageLink={homePageLink} donationPageLink={donationPageLink}></Header>

        //     <h3 className={classes.title}>Make a Donation, Make a Difference</h3>
        //     <form action="" className={classes.engravingForm}>
        //         <label>
        //             <strong>First Name</strong>
        //             <input type="text" name='name' className={classes.firstName} required />
        //         </label>
        //         <label>
        //             <strong>Last Name</strong>
        //             <input type="text" className={classes.lastName} /></label>
        //         <label>
        //             <strong>Email Address</strong>
        //             <input type="text" className={classes.email} required />
        //         </label>
        //         <label>
        //             <strong>Phone Number</strong>
        //             <input type="text" className={classes.phone} required />
        //         </label>
        //         <label>
        //             <strong>Personal Message - Up to 80 Characters</strong>
        //             <textarea cols="50" rows="10" id='quoteBox' className={classes.quoteBox} placeholder='Example:  &apos;Congradulation, UW class of 2022!&apos; (34 character)' maxLength={80} onChange={e => setWordCount(e.target.value.length)} required></textarea>
        //             <p className={classes.wordCounter}>{wordCount}/80</p>
        //         </label>
        //         <input type="submit" value='Submit' />
        //     </form>


        //     <section className={classes.engravingItem}>
        //         {/* TODO PUT IN ENGRAVING PICTURE EXAMPLE INTO CARD */}
        //         <div className={classes.engravingItemLeft}>
        //             <Card className={classes.engravingExample}></Card>
        //         </div>
        //         <div className={classes.engravingItemRight}>
        //             <h4 className={classes.engravingTitle}>$100 Donation</h4>
        //             <ul className={classes.donationList}>
        //                 <li>
        //                     $100 donation for an engraving deck board with your custom message (up to 40 characters per line; up to 2 lines).
        //                 </li>
        //                 <li>
        //                     You can only check out one of these donations at a time.
        //                 </li>
        //             </ul>
        //             <button className={`${classes.btn} ${classes.btnCart}`}><img src={cartIcon} alt="Shopping-Cart" className={classes.cartIcon} />Engrave Quote!</button>
        //         </div>
        //     </section>
        //     <section className={classes.donationOther}>
        //         <div className={classes.customItemRight}>
        //             {/* TODO PUT IMG OF SOMTHING REVOLVING AROUND DONATING */}
        //             <Card></Card>
        //             <h4>Custom Donation</h4>
        //         </div>
        //         <div className={classes.customItemLeft}>
        //             <p className={classes.customDonateDesc}>
        //                 Don't feel like spending $100 for a custom board? That's alright! You can still do your part to help support the parklet & it's continued development. Donate a custom amount here to support the future of this community!
        //             </p>
        //         </div>
        //     </section>
        //     <article className={classes.faviconLink}>
        //         <div className={classes.faviconLinkCart}>
        //             <a target="_blank" href="https://icons8.com/icon/9671/shopping-cart">Shopping Cart</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        //         </div>
        //     </article>
        // </div>
    )
}

export default DonationPageData