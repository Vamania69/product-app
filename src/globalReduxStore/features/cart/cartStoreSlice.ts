import { createSlice } from "@reduxjs/toolkit";
import {
  ICartProductProps,
  ICartState,
} from "../../../interfaces/ICartProductProps";
import type { PayloadAction } from "@reduxjs/toolkit";
import { get } from "../../../utils/authentication/axiosInstance";

const initialState: ICartState = {
  item: [],
};

export const getUserCart =async () => {
  try {
    const response = await get("/user/cart");
    console.log(response);
   
  } catch (error) {
    console.log(error);
    console.error(error.message);
  } 
};


export const userCartSlice = createSlice({
  initialState: initialState,
  name: "userCart",
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProductProps>) => {
      console.log("action", action.payload);
      state.item.push(action.payload);
    },
  },
});

export const { addToCart } = userCartSlice.actions;

export default userCartSlice.reducer;
