import React from "react";

const SummaryCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-4 bg-white border-2 border-black rounded-md w-72 h-44 shadow-neub ">
      <div className="w-full p-4 font-bold text-center bg-gray-200 border-b-2 border-black rounded-t-md animate-pulse">
        <h2 className="invisible text-lg">Placeholder</h2>
      </div>
      <div className="bg-gray-200 animate-pulse">
        <p className="invisible text-6xl font-extrabold">1,234</p>
      </div>
      <div className="bg-gray-200 animate-pulse">
        <p className="invisible text-xs font-light text-gray-500">
          Placeholders
        </p>
      </div>
    </div>
  );
};

export default SummaryCardSkeleton;
