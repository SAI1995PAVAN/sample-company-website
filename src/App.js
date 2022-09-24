import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Pricing from "./Components/Pricing/Pricing";
import Ceo from "./Components/Ceo/Ceo";
import Description from "./Components/Description/Description";
import Faq from "./Faq/Faq";
import Contact from "./Components/Contact/Contact";
import PageFooter from "./Components/PageFooter/PageFooter";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="description" element={<Description />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="ceo" element={<Ceo />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pagefooter" element={<PageFooter />} />
      </Routes>
    </div>
  );
}

export default App;
// 21:26
