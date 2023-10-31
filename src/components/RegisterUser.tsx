"use client";

import React, { useState } from "react";
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
import Link from "next/link";
import { post } from "../utils/authentication/axiosInstance";
export default function RegisterUser() {
  const [registerUserDetails, setRegisterUserDetails] = useState({
    userEmail: "",
    password: "",
    role: "user",
  });

  const RegisterInputHandler = (e) => {
    e.preventDefault();
    setRegisterUserDetails({
      ...registerUserDetails,
      [e.target.name]: e.target.value,
    });
    console.log(registerUserDetails);
  };

  const SubmitHandler = async () => {
    try {
      // using the axios instance wrapper function to register the user
      const response = await post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
        registerUserDetails
      );
      console.log(response.data);
      // reset the input fields
      setRegisterUserDetails({
        ...registerUserDetails,
        userEmail: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Create your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="userEmail"
              value={registerUserDetails.userEmail}
              onChange={RegisterInputHandler}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={registerUserDetails.password}
              onChange={RegisterInputHandler}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link href={"/userAuth/login"}>
                {" "}
                <Text color={"blue.500"}>Already have account? Sign In</Text>
              </Link>
            </Stack>
            <Button
              colorScheme={"blue"}
              variant={"solid"}
              onClick={SubmitHandler}
            >
              Create account
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
  );
}
