import React from "react";

type Props = {
  id: number | string,
  title: string,
  description: string
}

const Differences: React.FC<Props> = (props) => {
  return (
    <div className='flex mb-5'>
      <div className='num-style1'>{props.id}</div>
      <div>
        <h3 className='title-style1'>{props.title}</h3>
        <p className='prg-style1'>{props.description}</p>
      </div>
    </div>
  );
};

export default Differences;
