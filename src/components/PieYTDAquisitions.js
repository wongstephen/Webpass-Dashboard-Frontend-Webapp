import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import CardLayout from "./CardLayout";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieYTDAquisitions = ({ apiData }) => {
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
        borderColor: "transparent",
        borderWidth: 0,
        radius: "100%",
      },
    ],
  };
  const options = {
    layout: {
      padding: 20,
    },
  };
  return (
    <CardLayout title="YTD Properies Added" icon={faPlus}>
      {getYTDbyState().length !== 0 ? (
        <Pie data={data} options={options} />
      ) : (
        <p className="mt-4 text-center">No YTD yet for this year...</p>
      )}
    </CardLayout>
  );
};

export default PieYTDAquisitions;
