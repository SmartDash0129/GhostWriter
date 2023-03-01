const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const dotenv = require('dotenv');
dotenv.config();
const ST_PUBLISH_KEY = process.env.ST_PUBLISH_KEY;
const ST_SECRET_KEY = process.env.ST_SECRET_KEY;

const stripe = require("stripe")(ST_SECRET_KEY);
const getStripeToken = async (cardNumber, expMonth, expYear, cvc) => {
    const token = await stripe.tokens.create({
        card: {
          number: cardNumber,   
          exp_month: expMonth,
          exp_year: expYear,
          cvc: cvc,
        },
      });
    return token.id;
}
router.post('/pay', auth, async (req, res) => {
    try {
        const stripeEmail = req.body.email;
        const stripeToken =await getStripeToken(req.body.cardNumber, req.body.expMonth, req.body.expYear, req.body.cvc);
        
        let amount = 11 * 100;
        
        stripe.customers.create({
            email: stripeEmail,
            source: stripeToken 
        })
        .then(customer =>
            stripe.charges.create({ // charge the customer
            amount,
            description: "Sample Charge",
            currency: "usd",
            customer: customer.id
        }))
        .then(charge => res.json("success"));
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;