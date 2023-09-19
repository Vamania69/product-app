import Card from "../../components/Card";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function ProductsByCategoryId() {
  const router = useRouter();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { categoryId } = router.query;



  // fetch method
  useEffect(() => {
    // async call to fetch products related to the category by category ID
    const getProductsById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/products?categoryId=${categoryId}`
        );
        console.log(response.data.data);
        setCategoryProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductsById();
  }, [router.isReady]);

  
  return (
    <div className="flex flex-wrap p-8 ">
      {!!categoryProducts
        ? categoryProducts.map((product) => {
            return <Card key={product.productId} productDetails={product} />;
          })
        : null}
    </div>
  );
}
