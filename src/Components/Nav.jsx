import React from "react";
import Select from "./Select";

const Nav = () => {
  return (
    <div className="bg-[#323334]">
      <div className="  flex flex-col align-middle md:flex-row ">
        <h1 className="text-6xl my-7 text-white self-center font-bold text-nowrap align-middle md:ml-10">
          F<span className="text-red-600">oo</span>dy Z
          <span className="text-red-600">o</span>ne
        </h1>
        <input
          className="h-20 font w-10/12 mx-auto text-4xl text-white/80 outline-none border border-red-700 bg-[#323334] p-1 rounded-xl md:h-12 md:my-auto md:w-1/3 md:mr-10 md:text-2xl md:border-2"
          placeholder="Search Food..."
          type="text"
        />
      </div>
      <div className="flex justify-evenly mt-4 pb-5 md:justify-center md:gap-12">
        <Select selectName={"All"} />
        <Select selectName={"Breakfast"} />
        <Select selectName={"Lunch"} />
        <Select selectName={"Dinner"} />
      </div>
    </div>
  );
};

export default Nav;
