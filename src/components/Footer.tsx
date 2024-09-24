import React from 'react';
import Logo from './Logo';
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaRegCopyright
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const copyright = <FaRegCopyright className="inline" />;
  
  return (
    <footer className="bg-[#1d1d25]">
      {/* Top section with heading and button */}
      <div className="bg-customOrange text-center py-10 px-5 flex flex-col items-center lg:flex-row lg:justify-between">
        <h2 className="text-white text-3xl font-bold mb-5 lg:mb-0 lg:text-center">
          Simplify how your team works today
        </h2>
        <button className="bt-style2">Get Started</button>
      </div>

      {/* Middle section with logo, navigation, and subscription */}
      <div className="contain-style1 flex flex-col md:flex-row justify-between py-10 text-white xs:gap-8 md:gap-12 lg:gap-20">
        
        {/* Logo section */}
        <div className="flex flex-col items-center md:items-start">
          <Logo />
          <h3 className="text-3xl font-bold mt-4">manage</h3>
        </div>

        {/* Navigation section */}
        <nav className="flex flex-wrap justify-center text-sm gap-5 md:gap-12">
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Product</li>
            <li className="cursor-pointer">About</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Community</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </nav>

        {/* Subscription input */}
        <div className="flex flex-col items-center">
          <div className="flex gap-3">
            <input
              className="input-style1 text-black px-4 py-2 rounded-lg w-[240px] md:w-[280px] focus:outline-none"
              type="text"
              placeholder="Subscribe to updates"
            />
            <button className="bt-style1">Go</button>
          </div>
          <p className="text-sm mt-10 text-center">
            Copyright {copyright} 2022, All Rights Reserved
          </p>
        </div>
      </div>

      {/* Social media icons */}
      <div className="contain-style1 flex justify-center gap-5 pb-8">
        <FaFacebookSquare className="icon-style" />
        <FaYoutube className="icon-style" />
        <FaTwitter className="icon-style" />
        <FaPinterest className="icon-style" />
        <FaInstagram className="icon-style" />
      </div>
    </footer>
  );
};

export default Footer;
