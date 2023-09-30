import React from "react";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import {
  Avatar,
  AvatarBadge,
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
export default function Navbar() {
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
          <li className="p-4 hover:bg-dark-secondary">
            Cart <FaCartPlus className="inline" />
            <span className="text-xs p-2  rounded-[100%] bg-white text-btn-primary">
              4
            </span>{" "}
          </li>
        </Link>
      <Link href={"/userAuth/login"} > <div className="loginButton justify-items-end-end inline-block items-center p-4  hover:bg-dark-secondary">
          Login 
        </div></Link>
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
