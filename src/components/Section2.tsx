import React from 'react';
import Data from '../assets/Data.json';
import Differences from './Differences';

const Section2: React.FC = () => {
  const differences = Data.listing1.map((d) => {
    const id: number | string = d.id < 10 ? `0${d.id}` : d.id;
    return (
      <Differences
        key={d.id}
        id={id}
        title={d.title}
        description={d.description}
      />
    );
  });

  return (
    <section className="contain-style1 mt-20 flex flex-col md:flex-row justify-center items-center gap-12">
      <div className="max-w-md text-center md:text-left animate-fadeInUp transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-4xl font-semibold mb-4 text-gray-800">What's different about Manage?</h2>
        <p className="prg-style1 text-gray-600 mb-6">
          Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
        </p>
      </div>
      <div className="flex flex-col gap-6 animate-fadeIn delay-100">
        {differences}
      </div>
    </section>
  );
};

export default Section2;
