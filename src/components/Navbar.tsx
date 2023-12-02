"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../globalReduxStore/store";
import useGetUserProducts from "../globalReduxStore/features/cart/getUserCartProducts";
export default function Navbar() {
  const userLoggedInStatus = useSelector(
    (state: RootState) => state.userLoggedIn.isUserLoggedIn
  );

  const userCart = useSelector((state: RootState) => state.userCart);

  // calling the get User cart function to initialize the user cart and store it in the global state
  useGetUserProducts();

  return (
    <nav className="sticky top-0 mb-2 bg-dark z-10">
      <ul className="list-none  bg-dark-primary border-b-2 border-border-primary  text-white flex justify-center ">
        <Link href={"/"}>
          <li className="p-4 hover:bg-dark-secondary">Home</li>
        </Link>
        <Link href={"/products"}>
          <li className="p-4 hover:bg-dark-secondary">Products</li>
        </Link>
        <Link href={"/cart"}>
          <li className="p-4 flex justify-center items-center hover:bg-dark-secondary">
            Cart <FaCartPlus className="inline" />
            <p className="text-xs text-center  p-0  pt-1 rounded-[100%] h-6 w-6  bg-white text-btn-primary">
              {userCart.length}
            </p>
            {/* {userLoggedInStatus ? (
             
            ) : (
              <p className="text-xs p-2  rounded-[100%] bg-white text-btn-primary">
                0
              </p>
            )} */}
          </li>
        </Link>
        <Link href={"/userAuth/login"}>
          {" "}
          <div className="loginButton justify-items-end-end inline-block items-center p-4  hover:bg-dark-secondary">
            Login
          </div>
        </Link>
        <Menu>
          <MenuButton as={Button} colorScheme="blue">
            <Avatar name="Profile" />
          </MenuButton>
          <MenuList>
            <MenuItem>My Account</MenuItem>
            <MenuItem>Logout </MenuItem>
          </MenuList>
        </Menu>
      </ul>
    </nav>
  );
}
