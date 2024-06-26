import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../store/auth";

const Navbar = () => {
  const { isLogedIn } = useAuthContext();

  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between container mx-auto w-full h-[60px]  text-black">
        <div className="font-bold uppercase logo_section text-[25px]">
          Adnan <span className="text-purple-500"> Tech</span>
        </div>
        <ul className="flex uppercase gap-x-5 nav_link">
          <li className="list-none">
            <Link
              className="font-medium transition duration-300 hover:text-purple-500 focus:text-purple-500"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="list-none">
            <Link
              className="font-medium transition duration-300 hover:text-purple-500 focus:text-purple-500"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="list-none">
            <Link
              className="font-medium transition duration-300 hover:text-purple-500 focus:text-purple-500"
              to="/service"
            >
              Service
            </Link>
          </li>
          <li className="list-none">
            <Link
              className="font-medium duration-300 font-semibotransition hover:text-purple-500 focus:text-purple-500"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          {/* PRIVATE AND PUBLIC ROUTES */}
          {isLogedIn ? (
            <li className="list-none">
              <Link
                className="font-medium duration-300 font-semibotransition hover:text-purple-500 focus:text-purple-500"
                to="/logout"
              >
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li className="list-none">
                <Link
                  className="font-medium transition duration-300 hover:text-purple-500 focus:text-purple-500"
                  to="/Login"
                >
                  Login
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="font-medium transition duration-300 hover:text-purple-500 focus:text-purple-500"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
