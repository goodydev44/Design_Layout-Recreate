import React from "react";

type Props = {
    id: number,
    name: string,
    description: string,
    image: string
}

const Comment: React.FC<Props> = (props) => {
  return (
    <div className="text-center">
      <img
        className="inline h-[70px] w-[70px] rounded-full my-5"
        src={props.image}
      />
      <h4 className="title-style1">{props.name}</h4>
      <p className="prg-style1">{props.description}</p>
    </div>
  );
};

export default Comment;
