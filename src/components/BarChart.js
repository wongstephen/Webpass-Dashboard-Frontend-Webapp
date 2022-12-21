import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import React from "react";

const BarChart = ({ chartData, options }) => {
  return <Bar data={chartData} options={options} />;
};

export default BarChart;
