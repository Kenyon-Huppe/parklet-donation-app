const express = require('express');
const stripe = require('stripe')('sk_test_51JJr9eGqo18zNOLi2ibtqs6hbsCgEjXmhxesmtLU836rV072zqfyhNZ3hxgpYIvSG4i0QMfQsST0SnGuzEJWAmVP00Jk50lujE');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; // Choose a port number for your server

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Create a payment intent
app.post('/api/create-payment-intent', async (req, res) => {
  const { paymentMethodId, amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
    });
    res.status(200).json({ id: paymentIntent.id });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});