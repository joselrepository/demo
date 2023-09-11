import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PrivatePage from "../pages/PrivatePage";
import ProtectedPage from "../features/auth/Protected";
import Services from "../pages/Services";
import About from "../pages/About";
import ProductList from "../features/product/ProductList";
import PageNotFound from "./PageNotFound";
import ProductDetails from "../features/product/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}>
        {/* <Route path="products" element={<ProductList />} /> */}
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        {/* <Route
          path="protected"
          element={<ProtectedPage element={<PrivatePage />} />}
        /> */}
        <Route
          path="products"
          element={<ProtectedPage element={<ProductList />} />}
        />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="products/:id" element={<ProductDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
