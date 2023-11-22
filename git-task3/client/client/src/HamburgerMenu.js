// HamburgerMenu.js

// HamburgerMenu.js

import React from 'react';
import { Link } from 'react-scroll';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <>
          <Link to="StatisticalPieChart" smooth={true} duration={500} onClick={toggleMenu}>
            StatisticalPieChart
          </Link>
          <Link to="TableComponent" smooth={true} duration={500} onClick={toggleMenu}>
            TableComponent
          </Link>
          <Link to="MyForm" smooth={true} duration={500} onClick={toggleMenu}>
            MyForm
          </Link>
          <Link to="CardComponent" smooth={true} duration={500} onClick={toggleMenu}>
            CardComponent
          </Link>
        </>
      )}
    </div>
  );
};

export default HamburgerMenu;
