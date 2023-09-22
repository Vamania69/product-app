import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type ProductImgCarouselProps = {
  productImages: {
    productImageUrl: string;
   
  }[];
};
export default function ProductImgCarousel({productImages}: ProductImgCarouselProps) {

  return (
    <div>
      <Carousel>
        {productImages
          ? productImages.map((image, index) => {
              return (
                <div key={index}>
                  <Image src={image.productImageUrl} alt="carousel images" width={200} height={300} />
                </div>
              );
            })
          : null}
      </Carousel>
    </div>
  );
}
