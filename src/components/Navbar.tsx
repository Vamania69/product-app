"use client";

import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../globalReduxStore/store";
import useGetUserProducts from "../globalReduxStore/features/cart/getUserCartProducts";
import { userLoggedOut } from "../globalReduxStore/features/userLoginStatus/userLoginSlice";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
export default function Navbar() {
  const userLoggedInStatus = useSelector(
    (state: RootState) => state.userLoggedIn.isUserLoggedIn
  );
  const userCart = useSelector((state: RootState) => state.userCart);

  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // calling the get User cart function to initialize the user cart and store it in the global state
  useGetUserProducts();

  return (
    <nav className="sticky top-0 mb-2 bg-dark z-10  bg-dark-primary border-b-2 border-border-primary  text-white">
      <ul className="list-none hidden sm:flex justify-center   ">
        <Link href={"/"}>
          <li className="p-4 hover:bg-dark-secondary">Home</li>
        </Link>
        <Link href={"/products"}>
          <li className="p-4 hover:bg-dark-secondary">Products</li>
        </Link>
        <Link href={"/cart"}>
          <li className="p-4 flex justify-center items-center hover:bg-dark-secondary">
            Cart <FaCartPlus className="inline" />
            {isClient && !userLoggedInStatus ? (
              <></>
            ) : (
              <p className="text-xs text-center  p-0  pt-1 rounded-[100%] h-6 w-6  bg-white text-btn-primary">
                {userCart.length}
              </p>
            )}
          </li>
        </Link>
        {isClient && !userLoggedInStatus ? (
          // User is not logged in on the client side, show the login button
          <Link href={"/userAuth/login"} className="absolute right-0 m-2 mr-4">
            <Button variant={"ghost"}> Login</Button>
          </Link>
        ) : (
          // User is logged in or we're on the server side, don't show the login button
          <div className="absolute right-0 m-1 mr-4">
            <Menu isLazy>
              <MenuButton>
                <Avatar name="Profile" />
              </MenuButton>
              <MenuList bg={"#1f1a2b"} border={"#1f1a2b"}>
                <Link href={"/userAuth/login"}>
                  <MenuItem bg={"#1f1a2b"}>My Account</MenuItem>
                </Link>
                <MenuItem
                  bg={"#1f1a2b"}
                  border={"none"}
                  borderWidth="1px"
                  borderTopColor={"#b29ae680"}
                  onClick={() => dispatch(userLoggedOut())}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        )}
      </ul>

      {/* Mobile navbar */}

      <div className="justify-end flex items-center sm:hidden m-2 mt-0">
        {/* {isClient && userLoggedInStatus ? (
          <Link href={"/userauth/login"}>
            <Avatar name="Profile" />
          </Link>
        ) : (
          <></>
        )} */}

        <Menu>
          <MenuButton
            as={Button}
            aria-label="Options"
            rightIcon={<HamburgerIcon />}
            // variant="ghost"
          />
          <MenuList bg={"#1f1a2b"} border={"#1f1a2b"} width={"150px"}>
            <Link href={"/products"}>
              <MenuItem
                bg={"#1f1a2b"}
                borderBottom={"1px solid grey"}
                _hover={{ opacity: ".8" }}
              >
                Products
              </MenuItem>
            </Link>
            <Link href={"/cart"}>
              <MenuItem
                bg={"#1f1a2b"}
                borderBottom={"1px solid grey"}
                _hover={{ opacity: ".8" }}
              >
                Cart
              </MenuItem>
            </Link>
            <Link href={"/user/wishlist"}>
              <MenuItem
                bg={"#1f1a2b"}
                borderBottom={"1px solid grey"}
                _hover={{ opacity: ".8" }}
              >
                Wishlist
              </MenuItem>
            </Link>
            <MenuItem
              bg={"#1f1a2b"}
              border={"none"}
              borderWidth="1px"
              borderTopColor={"#b29ae680"}
              _hover={{ opacity: ".8" }}
              onClick={() => dispatch(userLoggedOut())}
            >
              Logout{" "}
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
}
