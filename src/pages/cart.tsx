"use client";

import React, { useState, useEffect } from "react";
import ChakraCardComponent from "../components/ChakraCardComponent";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../globalReduxStore/store";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
export default function Cart() {

  // global initialState of the user login
  const userLoggedInStatus = useSelector(
    (state: RootState) => state.userLoggedIn.isUserLoggedIn
  );
  //  global initialState of the user cart
  const cartProducts = useSelector((state: RootState) => state.userCart);

  // local state for the cart page
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userCart, setUserCart] = useState(cartProducts);

  useEffect(() => {
    // updating the local state of the user login
    setIsUserLoggedIn(userLoggedInStatus);
  }, [userLoggedInStatus, cartProducts]);
  

  return (
    <>
      {isUserLoggedIn ? (
        <>
          {" "}
          <div className="flex flex-wrap gap-4 justify-center mt-8 h-[90vh] ">
            {userCart.length >0  ? (
              userCart?.map((productDetails, i) => {
                return (
                  <ChakraCardComponent
                    productDetails={productDetails?.product}
                    key={i}
                  />
                );
              })
            ) : (
              <h2 className="min-h-max flex justify-center items-center">The cart is empty :</h2>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center min-h-[90vh]">
            <h1 className="text-center">You need to log in to access cart:(</h1>
            <Link href="/userAuth/login">
              <Button className="btn-secondary">Click to login</Button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
