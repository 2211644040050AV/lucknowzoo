import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "../src/GlobalComponents/Banner/Banner";
import MsgText from "../src/GlobalComponents/MsgText/MsgText";
import NavigationMenu from "../src/GlobalComponents/NavigationMenu/NavigationMenu";
import MainRoutes from "./Routes/MainRoutes";
// import FooterRoutes from "./Routes/FooterRoutes";

function App() {
  return (
    <Router>
      <div className="container-main">
        <div className="child">
          {/* Global Components */}
          <Banner />
          <MsgText />
          <NavigationMenu />

          {/* Main Routes */}
          <MainRoutes />

          {/* Footer Routes */}
          {/* <FooterRoutes /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
