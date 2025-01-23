import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "../Components/ContactUs/ContactUs";
import RulesAndRegulations from "../Components/RulesAndRegulations/RulesAndRegulations";
import EntryFee from "../Components/EntryFee/EntryFee";
import VisitingHours from "../Components/VisitingHours/VisitingHours";

export default function FooterRoutes() {
  return (
    <Routes>
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/rules-and-regulations" element={<RulesAndRegulations />} />
      <Route path="/entry-fee" element={<EntryFee />} />
      <Route path="/visiting-hours" element={<VisitingHours />} />
    </Routes>
  );
}
