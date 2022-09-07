import React from 'react'

const Results = () => {

  let tempDisplayedUser = {fullName: "John Doe", gender: "Male", location: "Argentina"}

  return (
    <div><h2>{tempDisplayedUser.fullName}</h2>
    <h2>{tempDisplayedUser.gender ? tempDisplayedUser.gender : "No gender found"}</h2>
    <h2>{tempDisplayedUser.location}</h2></div>
  )
}

export default Results