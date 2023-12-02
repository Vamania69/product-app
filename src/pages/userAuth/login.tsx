"use client";

import React, { useEffect, useState } from "react";
import SignIn from "../../components/SignIn";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../globalReduxStore/store";
import { userLoggedOut } from "../../globalReduxStore/features/userLoginStatus/userLoginSlice";

const Login = () => {
  const dispatch = useDispatch();

  // get the user login status from redux store
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const userLoginStatus = useSelector((state: RootState) => state.userLoggedIn);
  const router = useRouter();

  // dispatch the userLoggedOut action
  const logoutDispatchHandler = () => {
    setUserLoggedIn(false);
    dispatch(userLoggedOut());
  };

  // const logoutHandler = () => {
  //   window.localStorage.removeItem("Token");
  // };

  useEffect(() => {
    // set the userLoggedIn status
    setUserLoggedIn(userLoginStatus.isUserLoggedIn);
  }, [userLoggedIn]);

  // localStorage.setItem("Token", `${login.data.data.accessToken}`);
  return (
    <>
      {userLoggedIn ? (
        <>
          <div>User is Logged in sucessfully </div>
          <button onClick={logoutDispatchHandler}>Logout</button>
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Login;
