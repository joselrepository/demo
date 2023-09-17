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
      <div className="product space-y-4 flex flex-col rounded-md border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="relative p-4 z-0 w-full h-[300px] rounded-md object-contain transform hover:scale-105 transition-transform duration-300 ease-in-out "
          src={product.image}
          alt=""
        />
        <h2 className="h-[50px] font-bold text-gray-600 p-4">
          {truncateText(product.title, 50)}
        </h2>
        <p className="h-[150px] font-semibold text-justify  text-gray-600 p-4">
          {truncateText(product.description, 200)}
        </p>
        <div className="flex justify-between items-center p-4">
          <p className="text-xl font-semibold">${product.price}</p>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div className="rounded-md">
          {!isInCart ? (
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full rounded-md px-4 py-2 text-center font-semibold bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex justify-center items-center gap-4 p-4">
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
      </div>
    </li>
  );
}

export default ProductCard;
