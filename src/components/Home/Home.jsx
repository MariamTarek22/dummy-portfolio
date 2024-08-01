import React, { useEffect } from "react";
import style from "./Home.module.css";
import avtar from "../../assets/avataaars.svg";

export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <>
      <div className="bg-[#1abc9c] flex flex-col justify-center items-center content py-10">
        <div className="md:w-1/3 w-[80%] text-white flex flex-col justify-center items-center text-center ">
          <img src={avtar} alt="avatar" className=" w-2/3" />
          <p className="font-bold text-4xl py-5">START FRAMEWORK</p>
          <div className="flex justify-center items-center">
            <div className="line h-1 w-20 bg-white "></div>
            <i className="fa-solid fa-star py-5 mx-4 text-2xl "></i>
            <div className="line h-1 w-20 bg-white "></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
