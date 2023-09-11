import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cart from "../features/cart/Cart";
import PhoneImg from "../assets/phone.jpg";

function HomePage() {
  const location = useLocation();
  return (
    <>
      <div className="min-h-screen flex flex-col gap-4">
        <Cart />
        <Navbar />
        <Hero />
        {location.pathname === "/" && <h1>HomePage</h1>}
        <Outlet />
        <Hero2 />
        <Footer />
      </div>
    </>
  );
}

function Hero2() {
  return (
    <div className="relative w-11/12 xl:w-4/5 h-[350px] m-auto bg-stone-200 rounded-xl space-y-12">
      <img
        className="w-full absolute top-0 rounded-xl h-full object-cover"
        src={PhoneImg}
        alt=""
      />
      <div className="w-11/12 xl:w-1/2 m-auto h-full flex flex-col justify-center space-y-3 text-white p-5 absolute">
        <h1 className="text-4xl text-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit magni
          unde dicta optio consequatur enim?
        </p>
        <button className="w-28 bg-rose-400 p-2 rounded-md">See More</button>
      </div>
    </div>
  );
}

export default HomePage;
