"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "@/assets/Alan.png";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 p-2">
      <div className="flex flex-wrap items-center justify-between container mx-auto">
        <div className="flex items-center">
          <Link href="/" onClick={toggleMenu}>
            <div className="flex-shrink-0">
              <div className="rounded-full overflow-hidden mr-4">
                <Image src={logo} alt="logo" width={40} height={40} />
              </div>
            </div>
          </Link>
          <div>
            <h3 className="text-white text-lg md:text-xl lg:text-2xl">
              Alan <span className="text-xs">.dev</span>
            </h3>
          </div>
        </div>

        {/* Botón del menú hamburguesa */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menú de navegación */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:flex-row md:items-center md:w-auto mt-4 w-full`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 pb-2">
            <li className="pb-1">
              <Link href="/experience" onClick={toggleMenu}>
                <span className="text-white">Experience</span>
              </Link>
            </li>
            <li className="pb-1">
              <Link href="/skills" onClick={toggleMenu}>
                <span className="text-white">Skills</span>
              </Link>
            </li>
            {/* <li className="pb-1">
              <Link href="/testimonials" onClick={toggleMenu}>
                <span className="text-white">Testimonials</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
