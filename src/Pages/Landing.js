import React, {useState} from 'react'
import axios from 'axios'

const Landing = () => {
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
    <div>
      <input onChange={(e)=>{setUserInput(e.target.value)}} placeholder='insert email or phone here'/>
    <button onClick={()=>{handleClick(userInput)}}>SEARCH EMAIL</button>
    </div>
  )
}

export default Landing