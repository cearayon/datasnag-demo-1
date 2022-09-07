import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
const axios = require('axios')



function App() {
  const [userInput, setUserInput] = useState("")
  const [displayedUser, setDisplayedUser] = useState({fullName: "John Doe", gender: "Male", location: "Argentina"})


  let handleClick = (info)=>{
    let userInfo = {
      "email": info
    }

    axios.post("http://localhost:5000/api/user_data", userInfo).then(res=>{
      console.log(res.data)
      setDisplayedUser(res.data)
    })
  }


  return (
    <div className="App">
      <input onChange={(e)=>{setUserInput(e.target.value)}} placeholder='insert email or phone here'/>
      <button onClick={()=>{handleClick(userInput)}}>SEARCH EMAIL</button>
      <h2>{displayedUser.fullName}</h2>
      <h2>{displayedUser.gender ? displayedUser.gender : "No gender found"}</h2>
      <h2>{displayedUser.location}</h2>
    </div>
  );
}

export default App;
