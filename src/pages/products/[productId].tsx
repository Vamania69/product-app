import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ProductImgCarousel from "../../components/ProductImgCarousel";
import { BASE_URL } from "../../utils/constants";
import { ICardProps } from "../../interfaces/ICardProps";

const ProductDescription = () => {
  const router = useRouter();
  // states
  const isRouterReady = router.isReady;
  const productId = router.query.productId;
  const [productDetails, setProductDetails] = useState
  <ICardProps["productDetails"] >();
  const [isLoading, setIsLoading] = useState(false);

  // once the useReducer is ready we make an axios call to get the product details
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/products/?productId=${productId}`
        );
        setProductDetails(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [isRouterReady]);

  return isLoading ? (
    <h1 className="text-center">Loading...</h1>
  ) : (
    <div className="sm:flex p-4">
      {/* Left Image carousel */}
      <div className="sm:min-w-[1/2]">
        {!!productDetails && (
          <>
            {/* passed the array of object images */}
            <ProductImgCarousel productImages={productDetails?.productImages} />
          </>
        )}
      </div>

      {/* Right Product Details */}
      <div className=" p-4">
        <h1 className="text-lg sm:text-3xl font-bold mb-2">
          {productDetails?.productName}
        </h1>
        <p className="text-xs sm:text-base mb-4">
          {productDetails?.description?.slice(0, 250)}..
        </p>
        <div className="mb-4">
          <span className="text-lg sm:text-2xl font-semibold">
            Rs {productDetails?.discountedPrice}.0
          </span>
          <span className="text-lg font-normal line-through">
            {" "}
            {productDetails?.originalPrice}.0
          </span>
        </div>
        <button className="bg-gradient-to-br from-[#473a66] to-dark-secondary text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
