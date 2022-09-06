require("dotenv").config();
const {SERVER_PORT} = process.env
const express = require("express");
const cors = require("cors");
const dataCntrl = require("./dataController")
const {getUserData} = dataCntrl
const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/user_data", getUserData)

app.listen(SERVER_PORT, () => console.log(`Server is live on port ${SERVER_PORT}.`));
