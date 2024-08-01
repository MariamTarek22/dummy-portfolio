import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className="relative bottom-0 right-0 left-0 ">
        <div className="upper bg-[#2c3e50] text-white md:py-14">
          <div className="  w-[85%] mx-auto py-6">
            <div className="flex flex-wrap justify-center  text-center">
              <div className="w-full md:w-1/3 p-3">
                <h2 className="font-semibold text-3xl py-3">LOCATION</h2>
                <p className="py-2"> 2215 John Daniel Drive</p>
                <p className="py-2"> Clark, MO 65243</p>
              </div>
              <div className="w-full md:w-1/3 p-3">
                <h2 className="font-semibold text-3xl py-3">AROUND THE WEB</h2>
                <div className="icons flex  items-center justify-center">
                  <div className="mx-1 w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <i className="fab fa-facebook "></i>{" "}
                  </div>
                  <div className="mx-1 w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <i className="fab fa-twitter "></i>{" "}
                  </div>
                  <div className="mx-1 w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <i className="fab fa-linkedin "></i>{" "}
                  </div>
                  <div className="mx-1 w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <i className="fa-solid fa-globe "></i>{" "}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-3">
                <h2 className="font-semibold text-3xl py-3">
                  ABOUT FREELANCER
                </h2>
                <p className="py-2">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lower bg-[#1a252f] text-white py-6  text-center">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
