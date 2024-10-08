import React from "react";
import "./RootlayOut.css";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="main-container bg-danger">
      <nav>
        <div>
          <h2>navbar</h2>
        </div>
      </nav>
      
      <main>
        <Outlet/>
      </main>

      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  );
}

export default RootLayout;
