import React from "react";
import BarChart from "./BarChart";

const BarChartPropByState = ({ data }) => {
  const barChartData = {
    labels: Object.keys(data()),
    datasets: [
      {
        label: "No. of Properties",
        data: Object.values(data()),
        backgroundColor: ["#ffb443"],
        hoverBackgroundColor: ["#ffb44395"],
        borderColor: "black",
        borderWidth: 2,
        hoverBorderWidth: 4,
        borderRadius: 1,
      },
    ],
  };
  const options = {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: true,
      fontSize: 50,
      text: "Title",
    },
  };

  return (
    <div className="p-1 bg-white md:p-8">
      <BarChart chartData={barChartData} options={options} />
    </div>
  );
};

export default BarChartPropByState;
