import React from "react";
import Data from "../assets/Data.json";
import Comments from "./Comments";

const Section3: React.FC = () => {
  const comments = Data.listing2.map((c) => {
    return (
      <Comments
        key={c.id}
        id={c.id}
        name={c.name}
        description={c.description}
      />
    );
  });
  return (
    <section className="contain-style1 my-12 text-center justify-center py-2">
      <h2 className="text-3xl text-center font-bold">
        What Our Users Have To Say
      </h2>
      <div className="flex xs:gap-3 md:gap-10 lg:gap-14 my-10">
        {comments}
      </div>
      <button className="bt-style1 mt-2">Get Started</button>
    </section>
  );
};

export default Section3;
