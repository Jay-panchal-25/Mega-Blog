import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-6 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-xl font-semibold hover:text-gray-400">
            Coffee Blog
          </Link>
        </div>
        <ul className="flex space-x-4 mb-4 md:mb-0">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/all-posts" className="hover:text-gray-400">
              All Post
            </Link>
          </li>
        </ul>
        <p className="text-sm">&copy; 2024 Coffee Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
