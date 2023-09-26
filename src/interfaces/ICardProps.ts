export type ICardProps = {
  productDetails: {
    productName: string;
    productId: string;
    originalPrice: number;
    discountedPrice: number;
    description: string;
    productImages: {
      productImageUrl: string;
    }[];
  };
  key: Number;
};
