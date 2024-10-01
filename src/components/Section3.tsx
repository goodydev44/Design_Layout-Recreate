import React from "react";
import Data from "../assets/Data.json";
import Comment from "./Comment";
import PageImg1 from '../assets/Images/PageImg-1.jpg';
import PageImg2 from '../assets/Images/PageImg-2.jpg';
import PageImg3 from '../assets/Images/PageImg-3.jpg';


const Section3: React.FC = () => {
  const images = [PageImg1, PageImg2, PageImg3]

  const comments = Data.listing2.map((c) => {
    return (
      <Comment
        key={c.id}
        id={c.id}
        name={c.name}
        description={c.description}
        image={images[c.id - 1]}
      />
    );
  });
  return (
    <section className="contain-style1 my-12 text-center justify-center py-2">
      <h2 className="text-3xl text-center font-bold">
        What Our Users Have To Say
      </h2>
      <div className="flex mobile:flex-col sm:flex-row xs:gap-3 md:gap-10 lg:gap-14 my-10">
        {comments}
      </div>
      <button className="bt-style1 mt-2">Get Started</button>
    </section>
  );
};

export default Section3;
