import Card from "../../components/Card";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { ifError } from "assert";

export default function ProductsByCategoryId() {
  const router = useRouter();
  // category State and category ID
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { categoryId } = router.query;

  // loading state
  const [isLoading, setIsLoading] = useState(false);

  // fetch method
  useEffect(() => {
    // async call to fetch products related to the category by category ID
    const getProductsById = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/products?categoryId=${categoryId}`
        );
        setCategoryProducts(response.data.data);

      } catch (error) {
        console.log(error);
      } finally {
        // always runs
        setIsLoading(false);
      }
    };
    getProductsById();
  }, [router.isReady, categoryId]);

  return (
    <>
      {!!isLoading ? (
        <h1 className="text-center ">The product are loading</h1>
      ) : (
        <div className="flex flex-wrap p-8 ">
          {!!categoryProducts &&
            categoryProducts.map((product) => {
              return <Card key={product.productId} productDetails={product} />;
            })}
        </div>
      )}
    </>
  );
}
