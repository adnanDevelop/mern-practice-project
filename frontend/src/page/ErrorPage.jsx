import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="flex items-center w-full h-[81vh] justify-normal bg-[#f6f6f6">
      <section className="w-[400px] h-[500px] bg-white flex items-center justify-center flex-col mx-auto">
        <h1 className="text-[120px] font-bold leading-none">
          4<span className="text-purple-500">0</span>4
        </h1>
        <p className="my-[15px]">THE PAGE YOU REQUESTED COULD NOT FOUND</p>
        <div className="flex gap-x-3">
          <Link
            className="w-[160px] h-[50px] flex items-center justify-center transition duration hover:scale-105 rounded-lg bg-purple-500 text-white shadow-lg font-semibold text-sm capitalize"
            to="/"
          >
            Go to Home Page
          </Link>
          <Link
            className="w-[150px] h-[50px] flex items-center justify-center transition duration hover:scale-105 rounded-lg bg-purple-500 text-white shadow-lg font-semibold text-sm capitalize"
            to="/contact"
          >
            Report
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
