import React from "react";
//font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCircleQuestion,
  faCalendar,
  faCalendarPlus,
  faFlagUsa,
  faCity,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import SummaryCard from "./SummaryCard";
import CardLayout from "./CardLayout";

// Calculations
import getCountPerState from "./functions/getCountPerState";

const Summary = ({ data }) => {
  const getCitiesNum = () => {
    let cities = data?.map((property) => {
      return property.city_state;
    });
    return [...new Set(cities)].length;
  };

  const getPropPerYear = () => {
    const years = data?.map((property) => {
      const year = new Date(property.created_at).getFullYear();
      return year;
    });
    const uniqueYears = [...new Set(years)];
    const countYears = {};

    for (let year of uniqueYears) {
      const countYear = years.filter((el) => {
        return el === year;
      }).length;
      countYears[year] = countYear;
    }
    return countYears;
  };
  return (
    <CardLayout title="Latest 10 Properties" icon={faFileCircleQuestion}>
      <SummaryCard
        numbers={data.length}
        title={"Total Properties"}
        icon={faNetworkWired}
      />
      <SummaryCard
        numbers={
          getPropPerYear()[new Date().getFullYear()] -
          getPropPerYear()[new Date().getFullYear() - 1]
        }
        title={"YOY Properties Aquisition"}
        icon={faCalendar}
      />
      <SummaryCard
        numbers={getPropPerYear()[new Date().getFullYear()]}
        title={"YTD Properties Aquisition"}
        icon={faCalendarPlus}
      />
      <SummaryCard
        numbers={Math.round(getPropPerYear()[new Date().getFullYear()] / 12)}
        title={"YTD Aquisitions Per Month"}
        icon={faCalendarPlus}
      />
      <SummaryCard
        numbers={Object.keys(getCountPerState(data)).length}
        title={"# States Footprint"}
        icon={faFlagUsa}
      />
      <SummaryCard
        numbers={getCitiesNum()}
        title={"# Cities Footprint"}
        icon={faCity}
      />
    </CardLayout>
  );
};

export default Summary;
