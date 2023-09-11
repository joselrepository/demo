import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { Product } from "../../product/ProductSlice";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  toggleCart,
} from "../CartSlice";

export default function useCart() {
  const { items, totalPrice, isOpen } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleCart());
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  return {
    items,
    totalPrice,
    isOpen,
    handleAddToCart,
    handleToggle,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveItem,
  };
}
