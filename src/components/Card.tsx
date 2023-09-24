
// import Image from 'next/image'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ICardProps } from "../interfaces/ICardProps";
export default function Card({productDetails}: ICardProps) {
  // destructuring the productDetails object
  const {
    productName,
    productId,
    originalPrice,
    discountedPrice,
    description,
    productImages,
  } = productDetails;
  return (
    <div
      id={`${productId}`}
      className="flex mx-4 md:block text-white rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700  md:min-w-[235px]  md:max-w-[235px]"
    >
      <div className=" bg-white flex justify-center items-center rounded-l-lg md:rounded-none md:rounded-t-lg min-w-[100px] md:min-h-[200px] ">
        <Image
          width={150}
          height={200}
          className="p-1 md:p-8 rounded-t-lg  max-h-[150px] max-w-[100px] md:max-h-[200px] md:max-w-[200px]"
          src={`${productImages[0]?.productImageUrl}`}
          alt="product image"
        />
      </div>
      <div className="px-2 md:px-8 p-2 md:py-6 md:pb-8 bg-gradient-to-b  from-card-primary to-[#3c21771a] rounded-r-lg md:rounded-none md:rounded-b-lg sm:none  max-h-[195px]">
        <div>
          <h4 className="font-semibold">{productName?.slice(0, 20)}</h4>
          <p className="  tracking-tight ">{description?.slice(0, 20)}</p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-base font-semibold items-start line-through"></div>
          <div className="text-lg md:text-3xl font-bold ">
            {discountedPrice}
            <span className="text-sm line-through font-normal">{originalPrice} </span>
          </div>
          <Link
            href={`/products/${productId}`}
            style={{ textDecoration: "none" }}
          >
            <button className="text-white bg-gradient-to-br mt-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              View Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
