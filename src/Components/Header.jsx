import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { ToastContainer } from "react-toastify";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const listItem = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/products" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  // const [isLogin, setIsLogin] = useState(0)
  const isLogin = useSelector((data) => {
    return data.login.isLogin;
  });
  const totalCartItems = useSelector((data) => {
    return data.cart.cartItems.length;
  });

  return (
    <>
      <ToastContainer />
      <nav className="bg-white dark:bg-gray-800 antialiased sticky top-0 z-5">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <a href="#" title="" className="">
                  <img
                    className="block w-auto h-8 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                    alt=""
                  />
                  <img
                    className="hidden w-auto h-8 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                    alt=""
                  />
                </a>
              </div>

              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                {listItem.map((v, i) => {
                  return (
                    <li key={i}>
                      <Link
                        to={v.to}
                        title=""
                        className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                      >
                        {v.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex items-center lg:space-x-2">
              <button
                id="myCartDropdownButton1"
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <span className="sr-only">Cart</span>
                <svg
                  className="w-5 h-5 lg:me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
                <span className="hidden sm:flex">
                  My Cart ({totalCartItems})
                </span>
              </button>

              {isLogin ? (
                <button
                  id="userDropdownButton1"
                  data-dropdown-toggle="userDropdown1"
                  type="button"
                  className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
                >
                  <svg
                    className="w-5 h-5 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="2"
                      d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  Logout
                </button>
              ) : (
                <button
                  id="userDropdownButton1"
                  data-dropdown-toggle="userDropdown1"
                  type="button"
                  className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
                >
                  <svg
                    className="w-5 h-5 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="2"
                      d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  Login
                </button>
              )}

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
              >
                <span className="sr-only">Open Menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen ? (
            <div
              id="ecommerce-navbar-menu-1"
              className={`bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 ${
                isMenuOpen ? "block" : "hidden"
              } px-4 mt-4`}
            >
              <ul className="text-gray-900  text-sm font-medium dark:text-white space-y-3">
                {listItem.map((v, i) => {
                  return (
                    <>
                      <li key={i}>
                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          to={v.to}
                          className="hover:text-primary-700 dark:hover:text-primary-500"
                        >
                          {v.name}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
}
