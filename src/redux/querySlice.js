import { createSlice } from "@reduxjs/toolkit";

export const querySlice = createSlice({
  name: "querySlice",
  initialState: {
    value: {fullName: "John Doe", gender: "Male", location: "Argentina"}}, 
  reducers: {
    setNewQueriedUser: (state, action)=>{
      console.log("action was hit", action.payload)
      state.value = action.payload
    }, 
    deleteQueriedUser:(state)=>{
      state.value = {}
    }
  },
})

export const {setNewQueriedUser, deleteQueriedUser} = querySlice.actions

export const selectQueriedUser = (state)=>{
  console.log(state)
  return state.value}

export default querySlice.reducer

// use redux-persist?