import React from "react";

const Select = ({ selectName }) => {
  return (
    <div>
      <button className="bg-[#FF4343] px-2 py-1 text-white text-xl rounded-md md:px-4 md:py-2">
        {selectName}
      </button>
    </div>
  );
};

export default Select;
