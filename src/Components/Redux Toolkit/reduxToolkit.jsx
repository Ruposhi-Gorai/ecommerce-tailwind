import { configureStore } from '@reduxjs/toolkit'
import  loginSlice  from './loginSlice'  //remove the curly brackets
import  cartSlice from './cartSlice' //remove the curly brackets

export const reduxToolkit = configureStore({
  reducer: {
    login: loginSlice,
    cart: cartSlice

  },
})