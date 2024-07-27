import React from "react";

const Card = ({ foodData }) => {
  console.log(foodData);
  return (
    <div className="w-4/5 md:w-96 h-32 bg-white/5 backdrop-blur-2xl  mt-10 mx-auto flex rounded-2xl ">
      <div className="w-1/3 my-auto">
        <img className="h-28" src={foodData.image} alt="" />
      </div>
      <div className="w-2/3 h-32 overflow-hidden text-white flex flex-col gap-2 justify-center mr-2">
        <p className="text-lg font-bold ">{foodData.name}</p>
        <p className="text-xs text-wrap">{foodData.text}</p>
        <div className="bg-[#FF4343] text-xs self-end p-1 rounded-lg">
          ${foodData.price}
        </div>
      </div>
    </div>
  );
};

export default Card;
