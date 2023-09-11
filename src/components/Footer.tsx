import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="w-4/5 m-auto flex-1 flex flex-col justify-end">
      <div className="md:flex justify-between items-center my-0">
        <div className="space-y-5 py-5 mr-12">
          <h1 className="text-3xl text-center font-bold">E-commerce</h1>
          <div className="flex justify-center space-x-5">
            <AiOutlineInstagram size={"1.5rem"} />
            <AiOutlineWhatsApp size={"1.5rem"} />
            <AiOutlineYoutube size={"1.5rem"} />
          </div>
        </div>
        <div className="flex-1 flex justify-between">
          <div className="flex flex-col justify-between">
            <h1>Comapny</h1>
            <a className="text-sm text-gray-400" href="/">
              About us
            </a>
            <a className="text-sm text-gray-400" href="/">
              Contact Us
            </a>
            <a className="text-sm text-gray-400" href="/">
              Services
            </a>
            <a className="text-sm text-gray-400" href="/">
              Blog
            </a>
          </div>
          <div className="flex flex-col justify-between space-y-3">
            <h1>Comapny</h1>
            <a className="text-sm text-gray-400" href="/">
              About us
            </a>
            <a className="text-sm text-gray-400" href="/">
              Contact Us
            </a>
            <a className="text-sm text-gray-400" href="/">
              Services
            </a>
            <a className="text-sm text-gray-400" href="/">
              Blog
            </a>
          </div>
          <div className="flex flex-col justify-between space-y-3">
            <h1>Comapny</h1>
            <a className="text-sm text-gray-400" href="/">
              About us
            </a>
            <a className="text-sm text-gray-400" href="/">
              Contact Us
            </a>
            <a className="text-sm text-gray-400" href="/">
              Services
            </a>
            <a className="text-sm text-gray-400" href="/">
              Blog
            </a>
          </div>
        </div>
      </div>
      <div className="border-t py-2">
        <p>
          copy &copy;2022 <span className="font-bold">E-commerce</span> All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
