import React from 'react'
import Logo from './Logo'
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaRegCopyright
} from 'react-icons/fa'

const Footer: React.FC = () => {
  const copyright = <FaRegCopyright className='inline' />
  return (
    <footer>
      <div className='flex mobile:flex-col md:flex-row justify-evenly bg-customOrange px-5 py-10'>
        <h2 className='text-white text-3xl font-bold mobile:mb-5 md:mb-0 xs:text-center md:text-justify'>
          Simplify how your team works today
        </h2>
        <button className='bt-style2 xs:min-w-60 xs:max-w-60 md:min-w-0 xs:mx-auto md:mx-0'>Get Started</button>
      </div>

      <div
        className='flex contain-style1 py-10 bg-[#1d1d25] text-white
                mobile:flex-col md2:flex-row gap-8 mobile:justify-center md2:justify-evenly'
      >
        <div className='manageLogo mobile:ml-20 md2:ml-0'>
          <Logo />
          <h3 className='manage text-3xl font-bold'>manage</h3>
        </div>

        <nav className='flex text-sm gap-x-12 gap-y-2 justify-center'>
          <ul className='flex flex-col gap-y-1.5'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Pricing</li>
            <li className='cursor-pointer'>Product</li>
            <li className='cursor-pointer'>About</li>
          </ul>
          <ul className='flex flex-col gap-y-1.5'>
            <li className='cursor-pointer'>Careers</li>
            <li className='cursor-pointer'>Community</li>
            <li className='cursor-pointer'>Privacy Policy</li>
          </ul>
        </nav>

        <div>
          <div className='flex gap-3 justify-center'>
            <input className='input-style1' type="text" placeholder='Update in your inbox' />
            <button className='bt-style1'>Go</button>
          </div>
          <p className='text-sm mt-14 text-center'>Copyright {copyright} 2022, All Rights reserved</p>
        </div>
      </div>
      <div className='contain-style1 flex bg-[#1d1d25] pt-3 pb-[27px] mobile:justify-center
              sm:justify-start mobile:gap-[30px] sm:gap-10 sm:pl-20'>
        <FaFacebookSquare className='icon-style' />
        <FaYoutube className='icon-style' />
        <FaTwitter className='icon-style' />
        <FaPinterest className='icon-style' />
        <FaInstagram className='icon-style' />
      </div>
    </footer>
  )
}

export default Footer