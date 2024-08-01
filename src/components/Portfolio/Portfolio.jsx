import React, { useEffect, useState } from "react";
import style from "./Portfolio.module.css";
import img1 from "../../assets/port1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  const images = [img1, img2, img3, img1, img2, img3];
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (image) => {
    console.log(image);
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <>
      <div className=" w-[90%] m-auto text-center text-[#2c3e50] py-7">
        <h1 className="font-bold text-3xl md:text-4xl">PORTFOLIO COMPONENT</h1>
        <div className="flex justify-center items-center">
          <div className="line h-1 w-20 bg-[#2c3e50] "></div>
          <i className="fa-solid fa-star py-5 mx-4 text-2xl "></i>
          <div className="line h-1 w-20 bg-[#2c3e50] "></div>
        </div>
        <div className="flex flex-wrap justify-center items-center ">
          {images.map((image, index) => {
            return (
              <div
                className=" relative w-full md:w-1/2 lg:w-1/3 group p-4 "
                onClick={() => handleImageClick(image)}
                key={index}
              >
                <img
                  className="w-full rounded-lg"
                  src={image}
                  alt={`Gallery ${index}`}
                />
                <div className="m-4 absolute inset-0 bg-[#1abc9c] opacity-0 rounded-lg flex justify-center items-center group-hover:opacity-85 group-hover:cursor-pointer transition-all duration-500">
                  <i className="fa-solid fa-plus text-white text-7xl"></i>
                </div>
              </div>
            );
          })}

          {selectedImage && (
            <div className={style.overlay} onClick={handleClose}>
              <div
                className={`${style.overlayContent} flex justify-center items-center`}
                onClick={(e) => e.stopPropagation()} //prvents closing the image when the user click on the image (it stop what normaly will happen and prevent it to reach this area)
              >
                <img
                  src={selectedImage}
                  alt="Selected"
                  className={`${style.selectedImage}`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
