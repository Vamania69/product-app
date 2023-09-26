import React, { useEffect, useState } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { iImageProps } from "../interfaces/IProductImageProps";
import { getImageUrl } from "../utils/getImageUrls";

export default function ProductImgCarousel({ productImages }: iImageProps) {
  
  // productImages are the array of images object
  const [imagesUrls, setImagesUrls] = useState([]);
  useEffect(() => {
    // setImagesUrls return the string array of images url 
    setImagesUrls(getImageUrl({ productImages }));
  }, []);
  return (
    <div>
      <Carousel>
        {productImages
          ? imagesUrls.map((image, index) => {
              return (
                <Image
                  src={image}
                  alt="carousel images"
                  width={200}
                  height={300}
                  key={index}
                  className="min-h-[200px]"
                />
              );
            })
          : null}
      </Carousel>
    </div>
  );
}
