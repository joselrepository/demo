import useCart from "./hooks/useCart";

function Cart() {
  const { handleToggle, isOpen, items, totalPrice, handleRemoveItem } =
    useCart();

  return (
    <div
      className={`fixed z-20 top-0 right-0 h-screen bg-black w-[400px] transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform`}
    >
      <div className="flex flex-col h-full justify-between bg-white shadow-xl">
        <div className="flex items-start justify-between px-3 py-3">
          <h2 className="text-lg font-medium text-gray-900 mb-8">
            Shopping cart
          </h2>
          <button
            onClick={() => handleToggle()}
            type="button"
            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Close panel</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="h-[670px] flex-1 -my-6 overflow-auto divide-y over divide-gray-200 px-3 py-3">
          {items.length === 0 ? (
            <h1 className="text-lg font-semibold">No items</h1>
          ) : (
            items.map((item) => (
              <li className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="h-full w-full object-center object-contain"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href="#">{item.title}</a>
                    </h3>
                    <p className="ml-4">{item.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">{item.quantity}</p>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
        <div className="bg-white border-t-2 px-4 py-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total</p>
            <p>${totalPrice}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping &rarr;
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
