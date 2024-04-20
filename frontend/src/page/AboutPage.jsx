import React from "react";
import { useAuthContext } from "../store/auth";

const AboutPage = () => {
  const { userData } = useAuthContext();
  return (
    <main className="container mb-[40px] flex items-center justify-between mx-auto about_page">
      {/* CONTENT SECTION */}
      <section className="mt-[40px] max-w-[500px] ">
        <span className="relative inline-block text-xs before:absolute before:w-[50px] before:h-1 before:bg-purple-500 before:left-0 before:bottom-[-4px] ">
          Welcome, {userData.username ? userData.username : ""}
        </span>
        <h1 className="text-[35px] font-semibold text-black mt-2">
          <span className="text-purple-500">Why</span> Choose Us?
        </h1>
        <p className="mt-3 text-justify">
          Expertise our team consistents of experience IT professionals who are
          passionate about staying up-to-date with the latest industry trends.
        </p>
        <p className="mt-3 text-justify">
          Customization we understand that every business is unique. That's why
          we create solutions that are tailored to your specific needs and
          goals.
        </p>
        <p className="mt-3 text-justify">
          Customer centric approach. We priortrize your satisfaction and provide
          top-notch support to address your IT concerns.
        </p>
        <p className="mt-3 text-justify">
          We offer competitive pricing without without compromising on the
          quality of our service.
        </p>
        <p className="mt-3 text-justify">
          Count on us to be there when you need us. We are commited to ensuring
          your IT environment is reliable and available 24/7.
        </p>
        <div className="button mt-[40px] flex gap-x-4 ">
          <button
            type="button"
            className="w-[150px] h-[50px] transition duration hover:scale-105 rounded-lg bg-purple-500 text-white shadow-lg font-semibold text-sm capitalize"
          >
            contact us
          </button>
          <button
            type="button"
            className="w-[150px] h-[50px] transition duration hover:scale-105 rounded-lg bg-transparent border border-purple-500 text-purple-500  shadow-lg font-semibold text-sm capitalize"
          >
            learn more
          </button>
        </div>
      </section>
      {/* IMAGE SECTION */}
      <section className="">
        <img src="/image/about-img.svg" className="max-w-[650px]" alt="" />
      </section>
    </main>
  );
};

export default AboutPage;
