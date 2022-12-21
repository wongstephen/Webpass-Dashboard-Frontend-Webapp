import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import React from "react";

const BarChart = ({ chartData }) => {
  return (
    <Bar
      data={chartData}
      options={{
        responsive: true,

        // maintainAspectRation: false,
      }}
    />
  );
};

export default BarChart;
