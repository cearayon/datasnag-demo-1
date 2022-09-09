import { configureStore } from "@reduxjs/toolkit"; 
import queryReducer from "./querySlice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, queryReducer)

// creating this store value, passing in persistedReducer allows store to persist
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)

// export default configureStore({
//   reducer:{
//     currentQuery: queryReducer
//   }
// })