import React from "react";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";
import Img from '../assets/Images/bg-tablet-pattern.svg'

const Main: React.FC = () => {
  return (
    <div className="mobile:mt-5 xs:mt-14 bg-no-repeat bg-right-top"
        style={ {backgroundImage: `url(${Img})`} }>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default Main;