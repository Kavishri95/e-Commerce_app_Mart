import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../Redux/Slice/CartSlice';

const store = configureStore({
    reducer:{
        cart:CartReducer,
    },
})

export default store;