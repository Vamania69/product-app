import Card from "../../components/Card";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";

export default function ProductsByCategoryId() {
  const router = useRouter();
  // category State and category ID 
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { categoryId } = router.query;



  // fetch method
  useEffect(() => {
    // async call to fetch products related to the category by category ID
    const getProductsById = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/products?categoryId=${categoryId}`
        );
        console.log(response.data.data);
        setCategoryProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductsById();
  }, [router.isReady, categoryId]);

  
  return (
    <div className="flex flex-wrap p-8 ">
      {!!categoryProducts
      && categoryProducts.map((product) => {
            return <Card key={product.productId} productDetails={product} />;
          })}
    </div>
  );
}
