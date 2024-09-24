import React from 'react'

const Section1: React.FC = () => {
  return (
    <section className="contain-style1 flex flex-col md:flex-row justify-center items-center gap-12 mt-24">
      <div className="text-center md:text-left max-w-[600px] animate-fadeInUp">
        <h1 className="text-4xl font-bold mb-7 leading-tight">Bring everyone together to build better products</h1>
        <p className="prg-style1 mb-7">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <button className="bt-style1 hover:scale-105 transition-transform duration-300">
          Get Started
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 animate-fadeIn delay-150">
        <img src="./src/assets/Images/Page-Img1.jpg" className="Img-style-1 hover:scale-105 transition-transform duration-300" />
        <img src="./src/assets/Images/Page-Img2.jpg" className="Img-style-1 hover:scale-105 transition-transform duration-300" />
        <div className="relative h-[150px] w-[165px] bg-white p-4 rounded-lg shadow-lg mx-auto">
          <h3 className="absolute top-4 left-4 text-2xl">89.74%</h3>
          <div className="absolute bottom-4 left-4 flex gap-2">
            <div className="bg-customOrange text-white p-2 rounded-sm">+1.5%</div>
            <div className="bg-[#f8f8f8] p-2 rounded-sm">88.24%</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1
