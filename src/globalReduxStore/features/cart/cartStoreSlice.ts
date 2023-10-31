import { createSlice } from "@reduxjs/toolkit";
import { ICartProductProps } from "../../../interfaces/ICartProductProps";
import type { PayloadAction } from "@reduxjs/toolkit";
import { post } from "../../../utils/authentication/axiosInstance";
import { useToast } from "@chakra-ui/react";
// const initialState: ICartState = {
//   item: [],
// };
type ICartProducts = {
  product: ICartProductProps;
  qty: number;
};

type userState = ICartProducts[];

// this is the initial state of the cart which is empty array 
let initialState: userState = [];


// update function that will update the cart in the database

 const updateCart = async (productId : string)=>{
   // get the product id and send it to the server as a object 
   try {
     const response = await post("/user/cart",{productId})
   } catch (error) {
    console.log("error while updating the cart", error)
   }
   
   //  console.log(response)
 }
 
// user cart slice
export const userCartSlice = createSlice({
  initialState,
  name: "userCart",
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProducts>) => {
      // check if the cart is empty && set the cart initial state
      if (state.length === 0) {
        state.push(action.payload);
      }
      // check weather product exits in the cart or not
      else {
        if (
          state.find( 
            (product) =>
              product.product?.productId === action?.payload?.product?.productId
          )
        ) {
          state.forEach((product) => {
            if (
              product.product?.productId === action?.payload?.product?.productId
            ) {
              product.qty = product.qty + action?.payload?.qty;
              // update the database
               updateCart(product.product?.productId);
            }
          });
        } else {
          state.push(action?.payload);
          // update the database
          updateCart(action?.payload?.product?.productId);
        }
      }
    },
  },
});

export const { addToCart } = userCartSlice.actions;

export default userCartSlice.reducer;
