import React from 'react'
import Img1 from '../assets/Images/Page-Img1.jpg'
import Img2 from '../assets/Images/Page-Img2.jpg'

const Section1: React.FC = () => {
  return (
    <section className='contain-style1 flex justify-evenly gap-9 mt-24'>
      <div className='p-2.5 max-w-[50%]'>
        <h1 className='text-4xl font-bold mb-7'>
          Bring everyone together to build better products
        </h1>
        <p className='prg-style1 mb-7'>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="bt-style1">
          Get Started
        </button>
      </div>

      <div className='p-2.5 min-w-[50%]'>

        <div className='grid grid-cols-2 gap-4'>
          <img src={Img1}
            className='Img-style-1' />
          <img src={Img2}
            className='Img-style-1' />
          <div className='relative gap-3 h-[150px] w-[165px] bg-[#ffffff] mx-[50%] p-2.5
                          rounded-lg'>
            <h3 className='absolute pt-4 text-2xl w-[140px] px-2 bg-[#f8f8f8]'>89.74%</h3>
            <div className='absolute grid grid-cols-2 mt-9 gap-2 bottom-3 '>
              <div className='pt-6 pb-1 px-2.5 rounded-sm text-sm bg-customOrange text-white'>+1.5%</div>
              <div className='pt-6 pb-1 px-2.5 rounded-sm text-sm bg-[#f8f8f8]'>88.24%</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Section1