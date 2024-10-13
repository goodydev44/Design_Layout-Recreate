import React from "react";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";

const Main: React.FC = () => {
  return (
    <main className="mobile:mt-5 xs:mt-14">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </main>
  );
};

export default Main;