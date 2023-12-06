import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import CategoryProductCarousel from "./sharedComponents/CategoryCarouselChakra";
import CategoryCarouselChakra from "./sharedComponents/CategoryCarouselChakra";
export default function Categories() {
  // product categories 
  const [categories, setCategories] = useState([]);

  //fetch the categories 
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`);
        setCategories(response.data.data);
      } catch (error) {
        console.log(error)
      }
    };
    // callback
    fetchCategories();
  }, []);
  return (
    <div className="mt-10">
      <h2>Product Category</h2>
      <div className="flex gap-4 mt-8 flex-wrap pb-10 justify-center">
        {categories?.slice(0, 5).map((category) => {
          return (
            <Link // provideing the link to the category page with the category name and id as query params
              href={{
                pathname: `/category/[category]`,
                query: {
                  category: category?.categoryName,
                  categoryId: category?.categoryId,
                },
              }}
              key={category.categoryId}
            >
              <div className="flex flex-col items-center min-w-[210px] max-w-[220px] min-h-full  bg-white rounded-md p-4">
                <Image
                  src={`/${category?.categoryName}.jpg`}
                  alt={category?.categoryName}
                  width={200}
                  height={200}
                  className="max-h-[200px]"
                />
                <h2 className="text-black justify-end">
                  {category?.categoryName}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
