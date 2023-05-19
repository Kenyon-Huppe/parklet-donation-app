import React, { useState } from 'react';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51JJr9eGqo18zNOLi4kcaIhibPf6of3HBYddyD4WlQvGv6OhhHA5SkJlqYVMGFx9asDanRchjm9VvQQxlKUVQBUgv004JVSvADP'); // This is a testing publishable key. Insert regular publishable key when ready.

const DonationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [customQuote, setCustomQuote] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    if (donationAmount < 100) {
      // Check if the donation amount is less than 100 dollars
      setErrorMessage(
        'Your donation amount must be at least $100 for a custom quote inscription. To donate less than $100 please go to (insert link here)'
      ); // Display an error message to the user if the donation amount is less than 100 dollars
      return;
    }
    // If the donation amount is greater than or equal to 100 dollars, process the payment through Stripe
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: `${firstName} ${lastName}`,
        email: email,
      },
    });
    if (error) {
      // If the payment processing through Stripe fails, display an error message to the user
      setErrorMessage(error.message);
      return;
    }
    const { id: paymentMethodId } = paymentMethod;
    const { id: paymentIntentId } = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentMethodId,
        amount: donationAmount * 100,
      }),
    }).then((res) => res.json());
    const { error: paymentIntentError } = await stripe.confirmCardPayment(paymentIntentId);
    if (paymentIntentError) {
      // If the payment processing through Stripe fails, display an error message to the user
      setErrorMessage(paymentIntentError.message);
      return;
    }
    // If the payment processing through Stripe is successful, send the form data to Formspree to process the email
    const response = await fetch('https://formspree.io/f/mdovbyoa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        donationAmount,
        customQuote,
      }),
    });
    if (response.ok) {
      // If the form submission to Formspree is successful, display a success message to the user
      setErrorMessage('');
      setIsSubmitted(true);
    } else {
      // If the form submission to Formspree fails, display an error message to the user
      setErrorMessage('There was an error processing your donation. Please try again later.');
      setIsSubmitted(false);
    }
  };

  // Add a character counter to the quote section that limits the number of characters to 70
  const handleCustomQuoteChange = (event) => {
    const { value } = event.target;
    if (value.length > 70) {
      return;
    }
    setCustomQuote(value);
  };

  if (isSubmitted) {
    return <div>Thank you for your donation!</div>;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="donationAmount">Donation amount (USD)</label>
        <input
          type="number"
          id="donationAmount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="customQuote">Custom quote inscription (Optional, 70 characters or less)</label>
        <input
          type="text"
          id="customQuote"
          name="customQuote" // Add the name attribute for the custom quote input
          value={customQuote}
          onChange={handleCustomQuoteChange}
        />
      </div>
      <div>
        <label>Card Information</label>
        <CardElement options={{}} />
      </div>
      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

const StripeElements = () => {
  return (
    <Elements stripe={stripePromise}>
      <DonationForm />
    </Elements>
  );
};

export default StripeElements;

