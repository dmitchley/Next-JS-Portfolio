import Link from "next/link";
import React, { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);

  return (
    <div
      className={`w-full h-20 z-10  bg-white text-black duration-300 ease-in`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#home">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">
            Dylan Mitchley
          </h1>
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                Home
              </li>
            </Link>
            <Link href={"/About"}>
              <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                About
              </li>
            </Link>
            <Link href={"/Portfolio"}>
              <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                Portfolio
              </li>
            </Link>

            <Link href={"/Contact"}>
              <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                Contact
              </li>
            </Link>
          </ul>

          {!navigation && (
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setNavigation(true)}
            >
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>

      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-white p-10 ease-in duration-500 z-60"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2
                  onClick={() => setNavigation(false)}
                  className="text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer"
                >
                  Dylan Mitchley
                </h2>
              </Link>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-20">
            <ul className="uppercase">
              <Link href={"/"}>
                <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  Home
                </li>
              </Link>
              <Link href={"/Portfolio"}>
                <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  Portfolio
                </li>
              </Link>
              <Link href={"/About"}>
                <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  About
                </li>
              </Link>
              <Link href={"/Contact"}>
                <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  Contact
                </li>
              </Link>
            </ul>

            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
