import React from "react";
import BarChart from "./BarChart";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// calculations
import getCountPerState from "./functions/getCountPerState";
import CardLayout from "./CardLayout";
import useTheme from "../hooks/useTheme";

const BarChartPropByState = ({ apiData }) => {
  const { isLight } = useTheme();
  const theme = isLight ? "black" : "white";

  const sorted = Object.keys(getCountPerState(apiData))
    .sort()
    .reduce((acc, key) => {
      acc[key] = getCountPerState(apiData)[key];
      return acc;
    }, {});

  const chartData = {
    labels: Object.keys(sorted),
    datasets: [
      {
        label: "No. of Properties",
        data: Object.values(sorted),
        backgroundColor: ["#006EF3"],
        hoverBackgroundColor: ["#006EF3"],
        borderColor: theme,
        borderWidth: 0,
        hoverBorderWidth: 2,
        minBarLength: 10,
        borderRadius: 0,
      },
    ],
  };

  let chartOptions = {
    categoryPercentage: 1,
    barPercentage: 0.95,
    scales: {
      x: {
        grid: {
          color: "#7385de",
          display: false,
          tickColor: "#7385de",
          borderColor: "#7385de",
        },
        ticks: {
          color: theme,
          font: {
            size: 10,
            weight: "light",
          },
        },
        position: "bottom",
      },
      y: {
        min: 0,
        max: 1500,
        // label: "test",
        grid: {
          color: "#7385de20",
          tickColor: "#7385de",
          borderColor: "#7385de",
        },
        ticks: {
          color: theme,
          font: {
            size: 10,
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
      // padding: 25,
    },
    resizeDelay: 1500,
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
    <CardLayout title="Total Properties by State" icon={faPlus}>
      <BarChart chartData={chartData} options={chartOptions} />
    </CardLayout>
  );
};

export default BarChartPropByState;
