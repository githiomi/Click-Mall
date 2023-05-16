const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const STRIPE_API_KEY = 'sk_test_51N8Qw1EkeD57hHs1b4dvYQL8khyMnRUg8cjWyo1b1w57JUFtHLCUJ8ExvZxA9b6CzqcDAFzgUj337Vibzwv8nB0c00K8UPfs2I'

// Initialize the app
const app = express();

// To access the public assets folder for the Stripe page templates
app.use(express.static("public"));

// Set the body parser
app.use(bodyParser.urlencoded({
    // To remove parsed objects from the URL
    extended: false
}));

// Set up parser to be JSON
app.use(bodyParser.json());

// Set up CORS
app.use(cors(
    {
        origin: true,
        credentials: true
    }
));

// Set up stripe
const stripe = require("stripe")(STRIPE_API_KEY);

// Create a new post end point
const checkoutEndPoint = "/checkout";
app.post(checkoutEndPoint,
    async (req, res, next) => {

        // Try/Catch block
        try {

            // Create a session variable to pass back to the cart
            const session = await stripe.checkout.sessions.create({
                // Pass in the data of the cart we want to checkout
                line_items: req.body.cartItems.map(
                    _item => ({
                        // An implicit return
                        price_data: {
                            // Set currency
                            currency: 'usd',
                            product_data: {
                                name: _item.name,
                                images: [_item.product]
                            },
                            unit_amount: _item.price * 100
                        },
                        quantity: _item.quantity
                    })),
                mode: "payment",
                success_url: "http://localhost:4242/success.html",
                cancel_url: "http://localhost:4242/cancel.html"
            })

            // Pass back the session
            res.status(200).json(session);

        } catch (e) {
            // If there is an error, catch it and pass it back
            next(e);
        }

    });

// Open up the port and listen to it
app.listen(4242, () => {
    console.log("Application is running on https://localhost:4242")
})