import React from 'react'
import { useSelector } from 'react-redux'
import {selectQueriedUser} from '../redux/querySlice'

const Results = () => {
  let currentQueriedUser = useSelector(selectQueriedUser)

  return (
    <div><h2>{currentQueriedUser.fullName? currentQueriedUser.fullName : "No full name found"}</h2>
    <h2>{currentQueriedUser.gender ? currentQueriedUser.gender : "No gender found"}</h2>
    <h2>{currentQueriedUser.location? currentQueriedUser.location : "No location found"}</h2></div>
  )
}

export default Results