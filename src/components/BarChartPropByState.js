import React from "react";
import BarChart from "./BarChart";

const BarChartPropByState = ({ data, date }) => {
  const sorted = Object.keys(data())
    .sort()
    .reduce((acc, key) => {
      acc[key] = data()[key];
      return acc;
    }, {});

  const chartData = {
    labels: Object.keys(sorted),
    datasets: [
      {
        label: "No. of Properties",
        data: Object.values(sorted),
        backgroundColor: ["#ffb443"],
        hoverBackgroundColor: ["#ffb44395"],
        borderColor: "black",
        borderWidth: 2,
        hoverBorderWidth: 4,
        borderRadius: 1,
      },
    ],
  };

  return (
    <div className="w-full h-auto max-w-5xl mx-auto mt-16 bg-white border-4 border-black rounded-md shadow-neub">
      <div className="flex flex-col items-center justify-center w-full h-24 border-b-4 border-black bg-brutalBlue font-Roboto">
        <p className="font-bold text-center md:text-4xl ">
          Properties Distribution by State
        </p>
        <p className="text-xs md:text-md">
          Total properties per state as of {date}
        </p>
      </div>
      <BarChart chartData={chartData} />
    </div>
  );
};

export default BarChartPropByState;
