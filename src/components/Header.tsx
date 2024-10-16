import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="contain-style1 flex mobile:flex-col mobile:justify-center
            md:flex-row md:justify-between gap-2 md:items-center">
      <div className="manageLogo">
        <Logo />
        <h3 className="manage text-3xl font-bold">manage</h3>
      </div>
      <nav>
        <ul className="grid mobile:grid-cols-3 md2:grid-cols-4 md3:grid-cols-5 font-[500]">
          <li className="list-styles1">Pricing</li>
          <li className="list-styles1">Product</li>
          <li className="list-styles1">About</li>
          <li className="list-styles1">Careers</li>
          <li className="list-styles1">Community</li>
        </ul>
      </nav>
      <button className="bt-style1 max-h-10 xs:min-w-60 md:min-w-0 mobile:mx-auto md:mx-0">
        Get Started
      </button>
    </header>
  );
};

export default Header;
