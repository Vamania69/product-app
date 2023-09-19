import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Categories() {
  // product categories 
  const [categories, setCategories] = useState([]);

  //fetch the categories 
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(`http://localhost:8000/api/categories`);
      console.log(response);
      setCategories(response.data.data);
    };
    // callback
    fetchCategories();
  }, []);
  return (
    <div className="mt-10">
      <h2>Product Category</h2>
      <div className="flex gap-4 mt-8 flex-wrap pb-10">
        {categories.slice(0, 5).map((category) => {
          return (
            <Link
              href={{
                pathname: `/category/[category]`,
                query: {
                  category: category.categoryName,
                  categoryId: category.categoryId
                },
              }}
              key={category.categoryId}
            >
              <div className="flex flex-col items-center min-w-[210px] max-w-[220px] min-h-full  bg-white rounded-md p-4">
                <img
                  src={`/${category.categoryName}.jpg`}
                  alt=""
                  className="max-h-[200px]"
                />
                <h2 className="text-black justify-end">
                  {category.categoryName}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
