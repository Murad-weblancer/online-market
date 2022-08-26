import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cartSlice'
import filter from './slices/filterSlice'

export default configureStore({
  reducer: {
    filter,
    cart
  }
})