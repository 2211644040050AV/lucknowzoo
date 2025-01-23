import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
// import AboutUs from "../Components/AboutUs/AboutUs";
// import History from "../Components/History/History";
// import Animals from "../Components/Animals/Animals";
// import Reptiles from "../Components/Reptiles/Reptiles";
// import PhotoGallery from "../Components/PhotoGallery/PhotoGallery";
// import ContactUs from "../Components/ContactUs/ContactUs";
// import RulesAndRegulations from "../Components/RulesAndRegulations/RulesAndRegulations";
// import EntryFee from "../Components/EntryFee/EntryFee";
// import VisitingHours from "../Components/VisitingHours/VisitingHours";
// import BalTrain from "../Components/BalTrain/BalTrain";

export default function MainRoutes() {
  return (
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
  );
}
