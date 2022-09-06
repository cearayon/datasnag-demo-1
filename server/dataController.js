require("dotenv").config();
const axios = require("axios");

const {FULL_CONTACT_BEARER_TOKEN} = process.env

console.log(FULL_CONTACT_BEARER_TOKEN)

module.exports = {
  getUserData: (req, res)=>{
    console.log("it worked"); 
    let tempBodyObj = {"email": "andrew@gmail.com"}

    axios.post("https://api.fullcontact.com/v3/person.enrich", tempBodyObj)
       .then(response => res.status(200).send(response.data))
       .catch(err => console.log(err));
    }
}