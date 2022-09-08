import { configureStore } from "@reduxjs/toolkit"; 
import queryReducer from "./querySlice"

export default configureStore({
  reducer:{
    currentQuery: queryReducer
  }
})