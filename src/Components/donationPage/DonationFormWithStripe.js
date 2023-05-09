import React, { useState } from 'react';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';

const DonationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [customQuote, setCustomQuote] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    if (donationAmount < 100) { // Check if the donation amount is less than 100 dollars
      setErrorMessage('Your donation amount must be at least $100 for a custom quote inscription. To donate less than $100 please go to (insert link here)'); // Display an error message to the user if the donation amount is less than 100 dollars
      return;
    }
    // If the donation amount is greater than or equal to 100 dollars, process the payment through Stripe
    const result = await stripe.confirmCardPayment('your-client-secret', { // Replace 'your-client-secret' with your Stripe API client secret key
      payment_method: {
        card: elements.getElement(CardElement), // Retrieve the credit card information from the CardElement component
        billing_details: {
          name: `${firstName} ${lastName}`,
          email: email
        }
      },
      amount: donationAmount * 100, // Convert the donation amount to cents and set it as the payment amount
      currency: 'usd' // Set the payment currency as US dollars
    });
    if (result.error) { // If the payment processing through Stripe fails, display an error message to the user
      setErrorMessage(result.error.message);
      return;
    }
    // If the payment processing through Stripe is successful, send the form data to Formspree to process the email
    const response = await fetch('https://formspree.io/f/xlekjdyl', { // Replace 'https://formspree.io/f/xlekjdyl' with your Formspree endpoint URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        donationAmount,
        customQuote
      })
    });
    if (response.ok) { // If the form submission to Formspree is successful, display a success message to the user
      setErrorMessage('');
      alert('Your payment has been processed successfully.');
    } else { // If the form submission to Formspree fails, display an error message to the user
      setErrorMessage('There was an error processing your donation. Please try again later.');
    }
  };
  
  // Add a character counter to the quote section that limits the number of characters to 80
  const handleCustomQuoteChange = (event) => {
    const { value } = event.target;
    if (value.length > 80) {
      return;
    }
    setCustomQuote(value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="donationAmount">Donation Amount</label>
      <input type="number" id="donationAmount" name="donationAmount" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} />

      <label htmlFor="customQuote">Custom Quote</label>
      <textarea id="customQuote" name="customQuote" value={customQuote} onChange={handleCustomQuoteChange} maxLength="80" />

      <label htmlFor="cardElement">Credit Card Information</label>
      <div id="cardElement">
        <CardElement />
      </div>

      <button type="submit">Submit</button>

      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const DonationFormWithStripe = () => {
  const stripePromise = loadStripe('your-stripe-publishable-key'); //replace 'your-stripe-publishable-key' with your stripe API publishable key
  return (
    <Elements stripe={stripePromise}>
      <DonationForm />
    </Elements>
  );
};

export default DonationFormWithStripe;