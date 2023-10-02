import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          Logo
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-blue-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
