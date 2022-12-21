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
        borderWidth: 4,
        hoverBorderWidth: 6,
        minBarLength: 10,
      },
    ],
  };

  let chartOptions = {
    categoryPercentage: 1,
    barPercentage: 0.9,
    scales: {
      x: {
        grid: {
          color: "#7385de",
          display: false,
          tickColor: "#7385de",
          borderColor: "#7385de",
        },
        ticks: {
          color: "black",
          font: {
            size: 25,
            weight: "bold",
          },
        },
        position: "bottom",
      },
      y: {
        min: 0,
        max: 800,
        label: "test",
        grid: {
          color: "#7385de20",
          tickColor: "#7385de",
          borderColor: "#7385de",
        },
        ticks: {
          color: "black",
          font: {
            size: 15,
            weight: "bold",
          },
          align: "end",
        },
        position: "left",
      },
    },
    animations: {
      tension: {
        duration: 15000,
      },
    },
    layout: {
      padding: 25,
    },
    resizeDelay: 1000,
    plugins: {
      legend: {
        display: false,
        // strokeStyle: "",
        // position: "right",
      },
      subtitle: {
        display: false,
        text: "Total Properties Serviced by State",
        padding: {
          top: 0,
          bottom: 15,
        },
      },
    },
  };

  return (
    <div className="w-full h-auto max-w-5xl mx-auto mt-16 bg-white border-4 border-black rounded-md shadow-neub">
      <div className="flex flex-col items-center justify-center w-full h-24 border-b-4 border-black bg-brutalBlue font-Roboto">
        <p className="font-bold text-center md:text-4xl ">
          Total Properties Served by State
        </p>
      </div>
      <BarChart chartData={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChartPropByState;
