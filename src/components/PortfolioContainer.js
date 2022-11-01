import React, {useState} from "react";
import Navbar from "./Navbar.js";
import Main from "./pages/Main.js"
import Projects from "./pages/Projects.js"


function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Main');
  
    const renderPage = () => {
      if (currentPage === 'Main') {
        return <Main />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage(currentPage)}
      </div>
    );
  }
  

export default PortfolioContainer;