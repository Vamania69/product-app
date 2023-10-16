export type ICartProductProps = {
    productName: string;
    productId: string;
    originalPrice: number;
    discountedPrice: number;
    description: string;
    productImages: {
      productImageUrl: string;
    }[];
  }



  export type ICartState = {
    item: ICartProductProps[],
  };

