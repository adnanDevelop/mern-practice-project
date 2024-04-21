import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../store/auth";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const [isUser, setUser] = useState(true);
  const navigate = useNavigate();
  const { userData } = useAuthContext(); // GETTING USER DATA

  if (userData && isUser) {
    setValue("name", userData.username);
    setValue("email", userData.email);
    setValue("message", "Message");
    setUser(false);
  }

  const onSubmit = async (data) => {
    try {
      const sentData = await fetch("http://localhost:4000/contactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      await sentData.json();
      alert(
        `${
          data.username.charAt(0).toUpperCase() + data.username.slice(1)
        } your form is successfully submitted`
      );
      reset();
      navigate("/");
    } catch (error) {
      console.log("Error while submitting data", error);
    }
  };

  return (
    <main className="bg-black  py-[50px]">
      {/* CONTACT PAGE HEADER */}
      <section>
        <h2 className="text-[25px] font-semibold capitalize text-white text-center mb-[15px]">
          Contact Us
        </h2>
        <div className="flex items-center justify-between max-w-[500px] mx-auto mt-[30px]">
          <div className="text-center">
            <div className="text-[20px] w-[50px] h-[50px] rounded-full bg-purple-500 text-white mx-auto flex items-center justify-center">
              <IoLocationSharp />
            </div>
            <h3 className="text-purple-500 mt-[10px]">Address:</h3>
            <p className="text-white text-[15px]  max-w-[250px]">
              Islamabad, Pakistan
            </p>
          </div>
          <div className="text-center">
            <div className="text-[20px] w-[50px] h-[50px] rounded-full bg-purple-500 text-white mx-auto flex items-center justify-center">
              <FaPhone />
            </div>
            <h3 className="text-purple-500 mt-[10px]">Phone:</h3>
            <p className="text-white text-[15px]  max-w-[250px]">
              +92 3230838838
            </p>
          </div>
          <div className="text-center">
            <div className="text-[20px] w-[50px] h-[50px] rounded-full bg-purple-500 text-white mx-auto flex items-center justify-center">
              <FaTelegramPlane />
            </div>
            <h3 className="text-purple-500 mt-[10px]">Email:</h3>
            <p className="text-white text-[15px]  max-w-[250px]">
              info@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-[600px] p-[30px] mx-auto my-[50px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-[22px] text-white capitalize text-center mb-[30px]">
            Get in touch with us
          </h2>
          {/* NAME INPUT */}
          <div>
            <input
              type="text"
              className="w-full h-[50px] bg-[#ffffff1c] focus:bg-[#ffffff1c]  focus:outline-none px-[10px] text-white text-sm border-purple-500 focus:border-sky-500 mb-5"
              placeholder="Name"
              name="username"
              required
              {...register("username")}
            />
          </div>
          {/* EMAIL INPUT */}
          <div>
            <input
              type="text"
              className="w-full h-[50px] bg-[#ffffff1c] focus:bg-[#ffffff1c] focus:outline-none px-[10px] text-white text-sm border-purple-500 focus:border-sky-500 mb-5"
              placeholder="Email"
              name="email"
              required
              {...register("email")}
            />
          </div>
          {/* TEXTAREAs */}
          <div>
            <textarea
              className="w-full h-[150px] resize-none bg-[#ffffff1c] focus:bg-[#ffffff1c]  focus:outline-none p-[15px] text-white text-sm border-purple-500 focus:border-sky-500 mb-5"
              placeholder="Message"
              name="message"
              required
              {...register("message")}
            />
          </div>
          {/* SUBMIT BUTTON */}
          <div>
            <button
              type="submit"
              className="block shadow-lg transition duration-300 focus:scale-105 hover:scale-105  w-full h-[50px] bg-purple-500 text-white font-semibold text-sm uppercase"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
