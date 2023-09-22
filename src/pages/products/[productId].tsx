import { useRouter } from "next/router";
import ProductCarousel from "../../components/ProductImgCarousel";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const ProductDescription = () => {
  const router = useRouter();
  // states
  const isRouterReady = router.isReady;
  const productId = router.query.productId;
  const [productDetails, setProductDetails] = useState({
    productName: "",
    description: "",
    discountedPrice: "",
    originalPrice: "",
    productImages: [
      {
        productImageUrl: ""
      }
    ],
  });

  // once the useReducer is ready we make an axios call to get the product details
  useEffect(() => {
    console.log(router.query.productId);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/products/?productId=${productId}`
        );
        console.log(response.data.data);
        console.log(!!productDetails)
        setProductDetails(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isRouterReady]);
 
  
  return (
    <div className="sm:flex p-4">
      {/* Left Image carousel */}
      <div className="sm:w-1/3">
        {!!productDetails && (
          <ProductCarousel productImages={productDetails.productImages} />
        )}
      </div>

      {/* Right Product Details */}
      <div className=" p-4">
        <h1 className="text-lg sm:text-3xl font-bold mb-2">
          {productDetails.productName}
        </h1>
        <p className="text-xs sm:text-base mb-4">
          {!!productDetails.description
            && productDetails.description.slice(0, 250)
            }
          ..
        </p>
        <div className="mb-4">
          <span className="text-lg sm:text-2xl font-semibold">
            Rs {productDetails.discountedPrice}.0
          </span>
          <span className="text-lg font-normal line-through">
            {" "}
            {productDetails.originalPrice}.0
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
