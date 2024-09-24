import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="contain-style1 flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8 py-4">
      <div className="flex items-center gap-2">
        <Logo />
        <h3 className="text-3xl font-bold text-center animate-fadeIn">manage</h3>
      </div>
      <nav>
        <ul className="flex gap-5 font-[500] text-lg xs:flex-col xs:items-center md:flex-row md:items-center">
          <li className="list-styles1 cursor-pointer hover:text-customOrange transition-all duration-300">Pricing</li>
          <li className="list-styles1 cursor-pointer hover:text-customOrange transition-all duration-300">Product</li>
          <li className="list-styles1 cursor-pointer hover:text-customOrange transition-all duration-300">About</li>
          <li className="list-styles1 cursor-pointer hover:text-customOrange transition-all duration-300">Careers</li>
          <li className="list-styles1 cursor-pointer hover:text-customOrange transition-all duration-300">Community</li>
        </ul>
      </nav>
      <button className="bt-style1 animate-bounce hover:scale-105 transition-transform duration-300">
        Get Started
      </button>
      
    </header>
    
  );
};

export default Header;
