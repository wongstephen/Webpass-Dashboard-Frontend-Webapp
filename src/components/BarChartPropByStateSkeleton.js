import React from "react";
import BarChart from "./BarChart";

const BarChartPropByStateSkeleton = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-16 border-4 border-black rounded-md shadow-neub">
      <div className="flex flex-col items-center justify-center w-full h-24 border-b-4 border-black bg-slate-400 animate-pulse font-Roboto">
        <p className="invisible font-bold text-center md:text-4xl">Title</p>
        <p className="invisible text-xs md:text-md">Subtitle</p>
      </div>
      <div className="w-full h-56 bg-slate-200 animate-pulse"></div>
    </div>
  );
};

export default BarChartPropByStateSkeleton;
