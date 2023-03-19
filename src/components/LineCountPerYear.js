import React from "react";
import LineChart from "./LineChart";
import getPropPerYear from "./functions/getPropByYear";
import CardLayout from "./CardLayout";

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
        backgroundColor: ["#006EF3"],
        hoverBackgroundColor: ["#006EF395"],
        borderColor: "black",
        borderWidth: 1,
        hoverBorderWidth: 1,
        borderRadius: 1,
      },
    ],
  };

  let chartOptions = {
    categoryPercentage: 1,
    barPercentage: 0.25,
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
            size: 12,
            // weight: "light",
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
            size: 12,
            // weight: "bold",
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

    resizeDelay: 1000,
    plugins: {
      legend: {
        display: false,
      },
      // subtitle: {
      //   display: true,
      //   text: "Total Properties by Year (Cummulative)",
      //   padding: {
      //     top: 0,
      //     // bottom: 15,
      //   },
      // },
    },
  };

  return (
    <CardLayout title="Total Properties Served by Year">
      <LineChart chartData={chartData} options={chartOptions} />
    </CardLayout>
  );
};

export default LineCountPerYear;
