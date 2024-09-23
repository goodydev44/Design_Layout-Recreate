import React from 'react'
import Data from '../assets/Data.json'
import Differences from './Differences'

const Section2: React.FC = () => {

  const differences = Data.listing1.map((d) => {
    const id: number | string = d.id < 10 ? `0${d.id}` : d.id
    return (
      <Differences 
        key={d.id}
        id={id}
        title={d.title}
        description={d.description}
      />
    )
  })

  return (
    <section className='contain-style1 mt-20 flex gap-12'>
      <div className='min-w-[40%]'>
        <h2 className='text-3xl font-bold mb-7'>
          What's different about Manage?
        </h2>
        <p className='prg-style1'>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className='max-w-[50%]'>
        {differences}
      </div>
    </section>
  )
}

export default Section2