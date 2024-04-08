import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../store/auth";

const SignupPage = () => {
  const navigate = useNavigate();
  const { storeToken } = useAuthContext();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await fetch(`http://localhost:4000/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const userData = await response.json();

      reset();
      navigate("/login");
      storeToken(userData.token); //STORING USER TOKEN IN LOCAL STORAGE
    } catch (error) {
      console.log("Error at registration page", error);
    }
  };

  return (
    <main className="bg-white signup-page">
      <section className="signup-header w-full h-[40vh] bg-[url('/image/signup-img2.jpg')] bg-no-repeat bg-center bg-cover" />
      <section className="form_section max-w-[500px] mx-auto h-auto shadow-lg p-[30px] mt-[-150px] z-[100] bg-white mb-[50px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="font-bold mb-[40px] text-[25px] relative before:absolute before:w-[100px] before:h-[2px] before:bg-purple-500 before:bottom-0 before:left-0  ">
            Registration Form
          </h2>
          {/* USERNAME INPUT */}
          <div>
            <input
              type="text"
              className="w-full h-[50px] border focus:outline-none px-[10px] text-black text-sm border-purple-500 focus:border-sky-500 mb-5"
              placeholder="Enter your name"
              name="username"
              required
              {...register("username")}
            />
          </div>
          {/* EMAIL INPUT */}
          <div>
            <input
              type="email"
              className="w-full h-[50px] border focus:outline-none px-[10px] text-black text-sm border-purple-500 focus:border-sky-500 mb-5"
              placeholder="Enter your email address"
              name="email"
              required
              {...register("email")}
            />
          </div>
          {/* PHONE NUMBER INPUT */}
          <div>
            <input
              type="tel"
              className="w-full h-[50px] border focus:outline-none px-[10px] text-black text-sm border-purple-500 focus:border-sky-500 mb-5"
              placeholder="Enter your phone number"
              name="phone"
              required
              {...register("phone")}
            />
          </div>
          {/* PASSWORD INPUT */}
          <div>
            <input
              type="password"
              className="w-full h-[50px] border focus:outline-none px-[10px] text-black text-sm border-purple-500 focus:border-sky-500 mb-5"
              placeholder="Enter a new password"
              name="password"
              required
              {...register("password")}
            />
          </div>
          {/* SUBMIT BUTTON */}
          <div>
            <button
              type="submit"
              className="block shadow-lg transition duration-300 hover:bg-sky-500 w-full h-[50px] bg-purple-500 text-white font-semibold text-sm uppercase"
            >
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignupPage;
