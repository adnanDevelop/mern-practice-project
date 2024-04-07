import React from "react";

const HomePage = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative hero-section w-full h-[80vh] z-[10] bg-[url('/image/hero-bg.webp')] bg-no-repeat bg-cover">
        <div className="absolute top-0 left-0 w-full z-[-1] h-full bg-[#00000053] overlay" />
        <div className="z-10  text-white hero-content max-w-[550px] h-auto  absolute top-[50%] left-[4%] translate-x-[-4%] translate-y-[-50%] p-[30px] ">
          <span className="relative inline-block text-xs before:absolute before:w-[50px] before:h-1 before:bg-purple-500 before:left-0 before:bottom-[-4px] ">
            World best digital solutions
          </span>
          <h1 className="text-[35px] font-semibold text-white mt-2">
            <span className="">Welcome</span> to Adnan Tariq
          </h1>
          <p className="mt-3 text-justify">
            Are you ready to take your business to the next level with
            cuting-edge IT solutions? Look no further! At thapa technical, we
            specialize in providing innovative IT services and solutions
            tailored to meet your unique needs
          </p>
          <div className="button mt-[40px] flex gap-x-4 ">
            <button
              type="button"
              className="w-[150px] h-[50px] transition duration hover:scale-105 rounded-lg bg-purple-500 text-white shadow-lg font-semibold text-sm capitalize"
            >
              connect now
            </button>
            <button
              type="button"
              className="w-[150px] h-[50px] transition duration hover:scale-105 rounded-lg bg-transparent border border-white text-white  shadow-lg font-semibold text-sm capitalize"
            >
              learn more
            </button>
          </div>
        </div>
      </section>
      {/* COUNTER SECTION */}
      <section className="flex items-center justify-between my-[120px] max-w-[940px] rounded-lg mx-auto bg-purple-500  p-[30px]">
        <div className="text-center text-white  border-r border-r-white pe-[20px]">
          <h2 className="text-[40px] font-semibold ">10+</h2>
          <p>Registered Companies</p>
        </div>
        <div className="text-center text-white border-r border-r-white pe-[20px]">
          <h2 className="text-[40px] font-semibold ">80+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="text-center text-white border-r border-r-white pe-[20px]">
          <h2 className="text-[40px] font-semibold ">30+</h2>
          <p>Software Developers</p>
        </div>
        <div className="text-center text-white">
          <h2 className="text-[40px] font-semibold ">25/7</h2>
          <p>Service</p>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section className="about section my-[120px] max-w-[940px] mx-auto flex items-center justify-between">
        {/* IMAGE SECTION */}
        <div>
          <img src="/image/about-img.svg" className="max-w-[450px]" alt="" />
        </div>
        {/* CONTENT SECTION */}
        <div className="content_section ps-[60px]">
          <span className="relative inline-block text-xs before:absolute before:w-[50px] before:h-1 before:bg-purple-500 before:left-0 before:bottom-[-4px] ">
            We are here to help you
          </span>
          <h1 className="text-[35px] font-semibold text-black mt-2">
            <span className="">Get</span> started today
          </h1>
          <p className="mt-3 text-justify">
            Ready to take the first step towards a more efficient and secure IT
            infracture? Contact us today for free consultation and let's discuss
            how we can help your thrive in the digital age.
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
        </div>
      </section>
    </main>
  );
};

export default HomePage;
