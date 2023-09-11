import { Product } from "./ProductSlice";
import { truncateText } from "../../utils/utils";
import useCart from "../cart/hooks/useCart";

function ProductCard({ product }: { product: Product }) {
  const {
    handleAddToCart,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    items,
  } = useCart();

  const isInCart = items.some((item) => item.id === product.id);
  const productInCart = items.find((item) => item.id === product.id) || null;

  return (
    <li key={product.id}>
      <div className="product space-y-4 flex flex-col h-[400px]">
        <img
          className="relative z-0 w-full h-[50%] object-contain transform hover:scale-105 transition-transform duration-300 ease-in-out"
          src={product.image}
          alt=""
        />
        <p className="font-semibold text-gray-600 truncate">
          {truncateText(product.description, 100)}
        </p>
        <h1 className="text-xl font-semibold">${product.price}</h1>
        {!isInCart ? (
          <button
            onClick={() => handleAddToCart(product)}
            className="w-full rounded-md px-4 py-2 text-center font-semibold bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => handleDecreaseQuantity(product.id)}
              className="w-16 px-3 pb-1 rounded-md font-semibold text-2xl text-center bg-red-400 hover:bg-red-500 transition duration-300 ease-in-out"
            >
              -
            </button>
            <p className="text-xl font-semibold">{productInCart?.quantity}</p>
            <button
              onClick={() => handleIncreaseQuantity(product.id)}
              className="w-16 px-3 pb-1 rounded-md font-semibold text-2xl text-center bg-blue-400 hover:bg-blue-500 transition duration-300 ease-in-out"
            >
              +
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

export default ProductCard;
