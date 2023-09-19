import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ProductImgCarousel({ productImages }) {
  
  return (
    <div>
      <Carousel>
        {productImages? productImages.map((image, index) => {
          return (
            <div key={index}>
              <img src={image.productImageUrl} />
            </div>
          );
        }):null}
      </Carousel>
    </div>
  );
}
