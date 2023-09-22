// import { Link } from "@chakra-ui/react";
// import Link from "next/link";
import Card from "../../components/Card";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/constants";

const Products = () => {
  // custom logic to bring the product from the backend
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // async function to the get the products
   const getProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products`);
        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
    <div className="flex flex-wrap gap-4 justify-center mt-8 ">
      {products ? (
        products.slice(0,15).map((productDetails,i) => {
          return (
            <Card productDetails={productDetails} key={i}/>
          );
        })
      ) : (
        <h1>loading</h1>
      )}
      </div>
    </>
  );
};

export default Products;
