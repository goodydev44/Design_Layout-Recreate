import React from "react";

type Props = {
  id: number,
  name: string,
  description: string,
  image: string
}

const Comment: React.FC<Props> = (props) => {
  return (
    <div className="relative text-center bg-gray-200 bg-opacity-20 mt-14 mobile:p-1.5
          md2:p-3">
      <img
        className="inline h-[70px] w-[70px] rounded-full mb-5 -mt-[35px]"
        src={props.image}
      />
      <div>
        <h4 className="title-style1">{props.name}</h4>
        <p className="prg-style1">{props.description}</p>
      </div>
    </div>
  );
};

export default Comment;
