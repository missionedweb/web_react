const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
dotenv.config();
app.use(cors());

app.listen(8000, () => {
    console.log("Server is listening at http://localhost:8000");
});

const instance = new Razorpay({
    key_id: process.env.RAZOR_PAY_KEY_ID,
    key_secret: process.env.RAZOR_PAY_KEY_SECRET,
});

app.get("/order", (req, res) => {
    try {
        const options = {
        amount: 10 * 100,
        currency: "INR",
        receipt: "receipt#1",
        payment_capture: 0,
        // 1 for automatic capture 
        // 0 for manual capture
        };
        instance.orders.create(options, async function (err, order) {
            if (err) {
            return res.status(500).json({
                message: "Something Went Wrong",
            });
            }
            return res.status(200).json(order);
        });
    } catch (err) {
        return res.status(500).json({
            message: "Something Went Wrong",
        });
    }
});

app.post("/capture/:paymentId", (req, res) => {
    try {
        return request(
        {
        method: "POST",
        url: `https://${process.env.RAZOR_PAY_KEY_ID}:${process.env.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
        form: {
            amount: 10 * 100,
            currency: "INR",
        },
        },
        async function (err, response, body) {
        if (err) {
        return res.status(500).json({
            message: "Something Went Wrong",
            }); 
        }
        console.log("Status:", response.statusCode);
        console.log("Headers:", JSON.stringify(response.headers));
        console.log("Response:", body);
        return res.status(200).json(body);
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
        message: "Something Went Wrong",
        });
    }
});