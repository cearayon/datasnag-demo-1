require("dotenv").config();
const axios = require("axios");
const {FULL_CONTACT_BEARER_TOKEN} = process.env

module.exports = {
  getUserData: (req, res)=>{
    let userBody = req.body
    const config = {
      headers: { Authorization: `Bearer ${FULL_CONTACT_BEARER_TOKEN}` }
  };
    axios.post("https://api.fullcontact.com/v3/person.enrich", userBody,config)
       .then(response => res.status(200).send(response.data))
       .catch(err => {
        console.log(err)
        res.status(err.response.status).send("problems retrieving profile")});
    }
}