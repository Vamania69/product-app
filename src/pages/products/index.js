// import { Link } from "@chakra-ui/react";
import Link from "next/link";
import Card from "../../components/Card";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Products = () => {
  // custom logic to bring the product from the backend
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // async function to the get the products
   const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
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
      {console.log(products)}
      
      {products ? (
        products.slice(0,15).map((productDetails, key = { i }) => {
          console.log(key);
          return (
            <Card productDetails={productDetails} />
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
