import React from "react";
import Navbar from "./components/Navbar.js";
import Section from "./components/Section.js";
import Footer from "./components/Footer.js";
import Project from "./components/Project.js";
import Background from "./components/Background.js";

function App() {
  return (
    <div>
      <Navbar />
      <Background />
      <Project />
      <Section />
      <Footer/>
    </div>
  );
}

export default App;