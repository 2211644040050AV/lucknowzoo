import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "../src/GlobalComponents/Banner/Banner";
import MsgText from "../src/GlobalComponents/MsgText/MsgText";
import NavigationMenu from "../src/GlobalComponents/NavigationMenu/NavigationMenu";
import Home from "./Components/Home/Home";
// import AboutUs from './Components/AboutUs/AboutUs';
// import History from './Components/History/History';
// import Animals from './Components/Animals/Animals';
// import Reptiles from './Components/Reptiles/Reptiles';
// import PhotoGallery from './Components/PhotoGallery/PhotoGallery';
// import ContactUs from './Components/ContactUs/ContactUs';
// import RulesAndRegulations from './Components/RulesAndRegulations/RulesAndRegulations';
// import EntryFee from './Components/EntryFee/EntryFee';
// import VisitingHours from './Components/VisitingHours/VisitingHours';
// import BalTrain from './Components/BalTrain/BalTrain';

function App() {
  return (
    <Router>
      <div className="container-main">
        <div className="child">
          <Banner /> 
          <MsgText />
          <NavigationMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about-us" element={<AboutUs />} />
        <Route path="/history" element={<History />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/reptiles" element={<Reptiles />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/rules-and-regulations" element={<RulesAndRegulations />} />
        <Route path="/entry-fee" element={<EntryFee />} />
        <Route path="/visiting-hours" element={<VisitingHours />} />
        <Route path="/bal-train" element={<BalTrain />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
