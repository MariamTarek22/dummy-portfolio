import React from "react";
import style from "./Layout.module.css";
import NavBar from "./../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";

export default function Layout() {
  return (
    <>
      <div className="layout">
        <NavBar />
        <main className="content">
            <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
