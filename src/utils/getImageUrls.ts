import { iImageProps } from "../interfaces/IProductImageProps";
export const getImageUrl = ({ productImages }: iImageProps) => {
  const ImagesUrl = productImages?.map((image, i) => {
    return image?.productImageUrl;
  });
  return ImagesUrl;
};
