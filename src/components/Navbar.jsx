import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const heading =
    "text-white font-title font-bold leading-10 hover:text-lime-500 ";
  const heading2 =
    "text-white font-title font-light leading-10 sm:mx-0 md:mx-4 hover:text-lime-500";

  let Links = [
    { name: "About Me", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Contact", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="px-10 py-5 md:flex justify-between top-0">
      <h1 className={heading}>LAURENCE</h1>

      {/* Nav links here */}
      <div className="flex justify-end w-full">
        <div className="hidden md:flex items-baseline space-x-4">
          {Links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="text-white transition-all duration-500 hover:text-lime-500"
            >
              {link.name}
            </a>
          ))}
          <button
            className={
              heading2 + " bg-lime-600 px-6 rounded-full hover:text-lime-950 "
            }
          >
            Let's Work
          </button>
        </div>
      </div>

      {/* Hamburger button */}
      <div
        onClick={handleMenu}
        className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
      >
        {open == true ? (
          <XMarkIcon className="text-white" />
        ) : (
          <Bars3BottomRightIcon className="text-white" />
        )}
      </div>

      {/* Mobile Menu */}
      <ul>
        {open ? (
          <div className="md:hidden transition-all duration-500">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {Links.map((link, index) => (
                <li className={heading2}>
                  <a
                    className="text-white transition-all duration-500 hover:text-lime-500"
                    key={index}
                    href={link.link}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </div>
            <button className={heading2 + " bg-lime-600 px-6 rounded-full hover:text-lime-950 "}>
              Let's Work
            </button>
          </div>
        ) : null}
      </ul>
    </div>
  );
}
