import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="inline-flex flex-col gap-1.5">
      <div className="logo">
        <div className="dot bg-orange-600"></div>
        <div className="dot bg-orange-600"></div>
      </div>
      <div className="logo">
        <div className="dot bg-orange-600"></div>
        <div className="dot bg-orange-400"></div>
      </div>
    </div>
  );
};

export default Logo;
