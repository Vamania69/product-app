"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../globalReduxStore/store";
import { userLoggedIn } from "../globalReduxStore/features/userLoginStatus/userLoginSlice";
import IsLoadingComponent from "./sharedComponents/IsLoadingComponent";
export default function SignIn() {

  const router = useRouter();
  const dispatch = useDispatch();

  // get the user login state from redux store
  const userLoggedInDetails = useSelector(
    (state: RootState) => state.userLoggedIn
  );

  // form input state
  const [loginDetails, setLoginDetails] = useState({
    userEmail: "",
    password: "",
  });

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    userLoggedInDetails.isUserLoggedIn
  );
  const [isLoading, setIsLoading] = useState(false);

  // form input handler
  const loginInputHandler = (e) => {
    e.preventDefault();
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  // login submit handler
  const submitHandler = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, loginDetails);
      console.log("user logged in sucessfull");
      setLoginDetails({ ...loginDetails, userEmail: "", password: "" });
      if (response.status === 200) {
        // sending the access token to userlogin as payload
        dispatch(userLoggedIn(response.data.data.accessToken));
        router.push("/products");
      }
    } catch (error) {
      // to reEnter the password
      setLoginDetails({ ...loginDetails, password: "" });
      console.log(error);

    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <>
    {
      isLoading && (
        <IsLoadingComponent isLoading={isLoading} />
      )
    }
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                name="userEmail"
                type="email"
                value={loginDetails?.userEmail}
                onChange={loginInputHandler}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                value={loginDetails?.password}
                onChange={loginInputHandler}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.500"}>Forgot password?</Text>
              </Stack>
              <Link href="/userAuth/register">
                {" "}
                <Text color={"blue.500"}>Didn't have account ! Create one</Text>
              </Link>
              <Button
                colorScheme={"blue"}
                variant={"solid"}
                onClick={submitHandler}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          />
        </Flex>
      </Stack>
    </>
  );
}
