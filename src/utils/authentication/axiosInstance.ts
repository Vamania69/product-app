"use client";

import axios from "axios";
import { BASE_URL } from "../constants";

const ISSERVER = typeof window === "undefined";
let Token = null;

if (!ISSERVER) {
  // Access localStorage
  Token = localStorage.getItem("Token");
}
console.log(Token);
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use(
  async (config: any) => {
    console.log("sending request");
    config.headers = { Authorization: `Bearer ${Token}` };

    return config;
  },
  (error) => {
    console.log(error);
    // console.log(error)
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    switch (response.data.code) {
      case 200:
        console.log("Data load Sucessfull");
        break;
      case 401:
        console.log("Unaurthorized Access");
        break;
      case 400:
        alert("Bad request to server");

        break;
      case 409:
        console.log("To many request to server");

        break;

      default:
        console.log("Error 404: Page not found");
        break;
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;

// wrapper function

// to get the user cart products
export const get = async (url: string) => {
  const response = await instance.get(url);
  return response;
};

// to update the user cart with the added product
// data is the product id
export const post = async (url: string, data: any) => {
  const response = await instance.post(url, data);
  return response;
};

// warpper function to register user
