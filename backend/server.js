const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.json())
app.use(cors())

const mongoUrl = "mongodb+srv://daniel:team23@team23.vvpheur.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
})
.then(() => {
    console.log("Connected to Database");
})
.catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        await User.create({
            username,
            password,
        });
        res.send({ status: "ok" });
    } catch (error) {
        res.send({ status: "error" });
    }
});

app.post("/login-user", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: "User Not Found" });
        }
        res.status(200).json({ status: "success" });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

require("./exerDetails");

const Exer = mongoose.model("ExerInfo");

app.post("/exereg", async (req, res) => {
    const { weight, height } = req.body;
    try {
        await Exer.create({
            weight,
            height,
        });
        res.send({ status: "ok" });
    } catch (error) {
        res.send({ status: "error" });
    }
});


app.listen(5000, () => {
    console.log("Server Started");
});