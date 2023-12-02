"use client"

import { configureStore } from "@reduxjs/toolkit"
import {userCartSlice} from "./features/cart/cartStoreSlice"
import userLoginSlice from "./features/userLoginStatus/userLoginSlice"
export const store= configureStore({
    reducer:{
        userCart: userCartSlice.reducer,
        userLoggedIn: userLoginSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

