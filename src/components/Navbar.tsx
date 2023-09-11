import { Link } from "react-router-dom";
import {
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineLogout,
} from "react-icons/ai";
import { useAppDispatch } from "../hooks/hooks";
import { toggleCart } from "../features/cart/CartSlice";
import useUser from "../features/user/hooks/useUser";
import useAuth from "../features/auth/hooks/useAuth";

function Navbar() {
  const { user } = useUser();
  const { signout } = useAuth();
  const dispatch = useAppDispatch();
  return (
    <nav className="w-11/12 xl:w-4/5 m-auto flex justify-between py-5">
      <h1 className="text-2xl font-semibold">
        E-<span className="text-rose-400">Commerce</span>
      </h1>
      <div>
        <ul className="space-x-8 text-base hidden md:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="flex space-x-8">
        <p>{user?.username}</p>
        <button onClick={() => signout()}>
          <AiOutlineLogout size={"1.5rem"} />
        </button>
        <button onClick={() => dispatch(toggleCart())}>
          <AiOutlineShoppingCart size={"1.5rem"} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
