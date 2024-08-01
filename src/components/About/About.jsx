import React, { useEffect } from "react";
import style from "./About.module.css";

export default function About() {
  useEffect(() => {
    document.title = 'About';
  }, []);
  return (
    <>
      {" "}
      <div className="bg-[#1abc9c] flex flex-col justify-center items-center content">
        <div className=" w-[75%] m-auto text-white flex flex-col justify-center items-center">
          <h1 className="font-bold text-5xl">ABOUT COMPONENT</h1>
          <div className="flex justify-center items-center">
            <div className="line h-1 w-20 bg-white "></div>
            <i className="fa-solid fa-star py-5 mx-4 text-2xl "></i>
            <div className="line h-1 w-20 bg-white "></div>
          </div>
          <div className=" flex flex-wrap">
            <div className="w-full md:w-1/2 px-2">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
