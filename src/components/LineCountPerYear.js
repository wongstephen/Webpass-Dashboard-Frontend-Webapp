import React from "react";
import LineChart from "./LineChart";
import getPropPerYear from "./functions/getPropByYear";

const LineCountPerYear = ({ apiData, date }) => {
  const yearsPropertyCount = getPropPerYear(apiData);
  const countPerYearAcculated = Object.values(yearsPropertyCount).map(
    (el, idx) => {
      for (let i = 0; i < idx; i++) {
        el += Object.values(yearsPropertyCount)[i];
      }
      return el;
    }
  );
  const chartData = {
    labels: Object.keys(yearsPropertyCount),
    datasets: [
      {
        label: "No. of Properties",
        data: countPerYearAcculated,
        backgroundColor: ["#ffb443"],
        hoverBackgroundColor: ["#ffb44395"],
        borderColor: "black",
        borderWidth: 4,
        hoverBorderWidth: 4,
        borderRadius: 1,
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
          color: "#black",
          textAlign: "center",
          font: {
            size: 20,
            weight: "bold",
          },
          align: "start",
        },
        position: "bottom",
      },
      y: {
        min: 2500,
        grid: {
          color: "#bbd70020",
          tickColor: "#bbd700",
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
      padding: {
        top: 25,
        left: 25,
        bottom: 25,
        right: 75,
      },
    },
    resizeDelay: 1000,
    plugins: {
      legend: {
        display: false,
      },
      subtitle: {
        display: true,
        text: "Year over year properties gained",
        padding: {
          top: 0,
          bottom: 15,
        },
      },
    },
  };

  return (
    <div className="mt-12 bg-white border-4 border-black rounded-md shadow-neub">
      <div className="flex flex-col items-center justify-center w-full h-24 border-b-4 border-black bg-brutalPurple font-Roboto">
        <p className="font-bold text-center md:text-4xl ">
          Total Properties Served by Year
        </p>
      </div>

      <LineChart chartData={chartData} options={chartOptions} />
    </div>
  );
};

export default LineCountPerYear;
