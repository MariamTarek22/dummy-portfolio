import React, { useEffect, useState } from "react";
import style from "./Contact.module.css";

export default function Contact() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  useEffect(() => {
    document.title = 'Contact';
  }, []);

  return (
    <>
      <div className=" w-[90%] m-auto text-center text-[#2c3e50] py-7">
        <h1 className="font-bold text-3xl md:text-4xl">CONTACT COMPONENT</h1>
        <div className="flex justify-center items-center">
          <div className="line h-1 w-20 bg-[#2c3e50] "></div>
          <i className="fa-solid fa-star py-5 mx-4 text-2xl "></i>
          <div className="line h-1 w-20 bg-[#2c3e50] "></div>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          <div className="w-1/3">
            <form action="">
              <div className="relative my-10">
                <input
                  type="text"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full px-4 py-2 text-lg text-gray-900 bg-transparent   "
                  placeholder="User Name"
                />
                <label
                  className={`absolute top-0 left-0 px-4 py-2 text-lg text-transparent transition-transform duration-300 transform ${
                    Name ? "translate-y-0 text-xs" : "translate-y-8"
                  }`}
                >
                  User Name
                </label>
              </div>
              <div className="relative my-10">
                <input
                  type="number"
                  value={Age}
                  onChange={(e) => setAge(e.target.value)}
                  className="block w-full px-4 py-2 text-lg text-gray-900 bg-transparent   "
                  placeholder="User Age"
                />
                <label
                  className={`absolute top-0 left-0 px-4 py-2 text-lg text-transparent transition-transform duration-300 transform ${
                    Age ? "translate-y-0 text-xs" : "translate-y-8"
                  }`}
                >
                  User Age
                </label>
              </div>
              <div className="relative my-10">
                <input
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-2 text-lg text-gray-900 bg-transparent   "
                  placeholder="User Email"
                />
                <label
                  className={`absolute top-0 left-0 px-4 py-2 text-lg text-transparent transition-transform duration-300 transform ${
                    Email ? "translate-y-0 text-xs" : "translate-y-8"
                  }`}
                >
                  User Email
                </label>
              </div>
              <div className="relative my-10">
                <input
                  type="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-2 text-lg text-gray-900 bg-transparent   "
                  placeholder="User Password"
                />
                <label
                  className={`absolute top-0 left-0 px-4 py-2 text-lg text-transparent transition-transform duration-300 transform ${
                    Password ? "translate-y-0 text-xs" : "translate-y-8"
                  }`}
                >
                  User Password
                </label>
              </div>
              <div>
                {" "}
                <button
                  className="bg-[rgb(26,188,156)] text-white px-6 py-3 rounded-lg flex justify-start"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
