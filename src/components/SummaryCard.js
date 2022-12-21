import React from "react";

const SummaryCard = ({ title, numbers, date }) => {
  return (
    <div className="flex flex-col items-center justify-start pb-16 bg-white border-4 border-black rounded-md w-72 shadow-neub ">
      <div className="w-full p-4 font-bold text-center border-b-4 border-black rounded-t-md bg-brutalYellow">
        <h2 className="text-lg"> {title}</h2>
      </div>
      <p className="mt-8 font-extrabold text-7xl md:text-8xl">
        {numbers.toLocaleString("en-US")}
      </p>
      <p className="mt-8 text-xs font-light text-gray-500">As of {date}</p>
    </div>
  );
};

export default SummaryCard;
