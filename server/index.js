require("dotenv").config();
const {FULL_CONTACT_BEARER_TOKEN, SERVER_PORT} = process.env
const express = require("express");
const cors = require("cors");

// invoking express
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/user_data", (req, res)=>{res.status(200).send("it worked")})

app.listen(SERVER_PORT, () => console.log(`Server is live on port ${SERVER_PORT}.`));
