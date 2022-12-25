import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieYTDAquisitions = ({ data: apiData }) => {
  //Count YTD properties
  const getYTDbyState = () => {
    const YTDData = apiData.filter((el) => {
      const elDate = new Date(el.created_at).getFullYear();
      const thisYear = new Date().getFullYear();
      return elDate === thisYear;
    });
    const stateObj = {};
    for (let x of YTDData) {
      if (stateObj[x.city_state.split(", ")[1]]) {
        stateObj[x.city_state.split(", ")[1]]++;
      } else {
        stateObj[x.city_state.split(", ")[1]] = 1;
      }
    }
    return stateObj;
  };

  getYTDbyState();

  const data = {
    labels: Object.keys(getYTDbyState()),
    datasets: [
      {
        label: "# of Properties",
        data: Object.values(getYTDbyState()),
        backgroundColor: [
          "#38dbff",
          "#ffb443",
          "#ff5d5d",
          "#fff503",
          "#00ff75",
          "#dd7dff",
          "#38dbff50",
          "#ffb44350",
          "#ff5d5d50",
          "#fff50350",
          "#00ff7550",
          "#dd7dff50",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderColor: "black",
        borderWidth: 4,
      },
    ],
  };
  const options = {
    layout: {
      padding: 20,
    },
  };
  return (
    <div className="w-full h-full bg-white border-4 border-black rounded-md shadow-neub">
      <div className="flex items-center justify-center h-24 border-b-4 border-black bg-brutalGreen">
        <p className="font-bold text-center md:text-4xl ">
          Newest 10 Properties
        </p>
      </div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieYTDAquisitions;
