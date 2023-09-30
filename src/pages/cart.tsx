"use client"

import React, { useState, useEffect } from "react";
import ChakraCardComponent from "../components/ChakraCardComponent";
import SignIn from "../components/SignIn";
import RegisterUser from "../components/RegisterUser";
import { useSelector, useDispatch } from "react-redux";
import axios, { get } from "../utils/authentication/axiosInstance";
import { RootState } from "../globalReduxStore/store";
import Link from "next/link";
import { getUserCart } from "../globalReduxStore/features/cart/cartStoreSlice";
export default function Cart() {

  const [ isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const userLoggedInStatus = useSelector(
    (state: RootState) => state.userLoggedIn.isUserLoggedIn
  );
  const cartProducts = useSelector((state: RootState) => state.userCart.item);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsUserLoggedIn(userLoggedInStatus);
  }, [userLoggedInStatus]);

useEffect(()=>{
  if(isUserLoggedIn){
   getUserCart()
  }
},[isUserLoggedIn])

  // validation the user login or not
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(userLoggedInStatus);


  // useEffect(() => {
  //   const userLoggedInHandler = async () => {
  //     const response = await get("user/wishlist");
  //     console.log(response);
  //   };

  //   userLoggedInHandler();
  // }, []);

  // console.log(cartProducts);

  return (
    <>
      {isUserLoggedIn ? (
        <>
          {" "}
          <div className="flex flex-wrap gap-4 justify-center mt-8 ">
            {cartProducts &&
              cartProducts?.map((productDetails, i) => {
                return (
                  <ChakraCardComponent
                    productDetails={productDetails}
                    key={i}
                  />
                );
              })}

            <h2>The cart is empty :(</h2>
          </div>
        </>
      ) : (
        <>
        <div className="flex flex-col justify-center items-center min-h-[90vh]">
          <h1 className="text-center">You need to log in to access cart</h1>
          <Link href="/auth/login">
            <button className="btn-secondary">click to login</button>
          </Link>
        </div>
        </>
      )}
    </>
  );
}
