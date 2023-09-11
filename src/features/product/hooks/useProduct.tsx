import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { Product, fetchProducts, setFilter } from "../ProductSlice";
import { addToCart } from "../../cart/CartSlice";

function useProduct() {
  const { products, status, error, filter } = useAppSelector(
    (state) => state.product
  );
  const dispatch = useAppDispatch();
  const handleSetFilter = (filter: string) => {
    dispatch(setFilter(filter));
  };
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return { products, status, error, filter, handleSetFilter, handleAddToCart };
}

export default useProduct;
