import React, { useState } from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import Main from "./pages/Main.js"
import Projects from "./pages/Projects.js"
import Resume from "./Resume.js";

import '../styles/PortfolioContainer.css'


function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Main');

  const renderPage = () => {
    if (currentPage === 'Main') {
      return <Main />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="portfolio-container">
      <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}


export default PortfolioContainer;