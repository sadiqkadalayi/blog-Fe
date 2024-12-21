import React from "react";
import "./RootlayOut.css";
import { Outlet } from "react-router-dom";
import NavBaarrrrr from "../Components/Nav-Bar/NavBaarrrrr";
import Footer from "../Components/Footer/Footer";
import Slide from "../Components/Slide/Slide";



function RootLayout() {
  return (
    <div className="main-container">
      <nav>
        <div>
          <NavBaarrrrr /> 

        </div>
        <div>
        <Slide/>
      </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
