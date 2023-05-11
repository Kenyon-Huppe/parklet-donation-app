const stripe = require('stripe')('sk_test_51JJr9eGqo18zNOLi2ibtqs6hbsCgEjXmhxesmtLU836rV072zqfyhNZ3hxgpYIvSG4i0QMfQsST0SnGuzEJWAmVP00Jk50lujE');//This is a TESTING secret key only. Insert real secret key when ready for publishing. 

module.exports = async (req, res) => {
  const { paymentMethodId, amount } = JSON.parse(req.body);
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
};