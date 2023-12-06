import { useDispatch, useSelector } from "react-redux";
import { get } from "../../../utils/authentication/axiosInstance";
import { addToCart } from "./cartStoreSlice";
import { RootState } from "../../store";
import { useEffect } from "react"; // Import useEffect from react

export function useGetUserProducts() {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state: RootState) => state.userLoggedIn);

  useEffect(() => {
    if (isUserLoggedIn) {
      console.log(isUserLoggedIn)
      const fetchData = async () => {
        try {
          const data = await getUserCartProducts();
          data?.map((product) => {
            // console.log(product);
            dispatch(addToCart(product));
          });
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [isUserLoggedIn, dispatch]);
}

export const getUserCartProducts = async () => {
  try {
    const response = await get("/user/cart");
    //  mapping the response data according to the state of the cart
    const data = response.data?.data?.map((cartProducts) => {
      //   console.log(cartProducts);
      return { product: cartProducts?.product, qty: cartProducts?.qty };
    });
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};




export default useGetUserProducts;

// const isUserLoggedIn = useSelector((state: RootState) => state.userLoggedIn);

// export const setUserCart = async () => {
//   const dispatch = useDispatch();
//   if (true) {
//     const response = await getUserCartProducts();
//     response?.map((product) => {
//       console.log(product);
//       dispatch(addToCart(product));
//     });
//   }
// };
