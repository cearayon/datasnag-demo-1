import React, {useState} from 'react'
import axios from 'axios'
import {setNewQueriedUser} from '../redux/querySlice'
import { useDispatch } from 'react-redux'
import Results from './Results'

const Landing = () => {
  const [userInput, setUserInput] = useState("")

  const dispatch = useDispatch()


  let handleClick = (info)=>{
    let userInfo = {
      "email": info
    }

    axios.post("http://localhost:5000/api/user_data", userInfo).then(res=>{
      console.log(res.data)
      dispatch(setNewQueriedUser(res.data))
    })
  }
  return (
    <div>
      <input onChange={(e)=>{setUserInput(e.target.value)}} placeholder='insert email or phone here'/>
    <button onClick={()=>{handleClick(userInput)}}>SEARCH EMAIL</button>
    <Results/>
    </div>
  )
}

export default Landing