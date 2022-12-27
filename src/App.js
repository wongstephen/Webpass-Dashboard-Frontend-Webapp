// Styles
import "./App.css";

// Components
import BarChartPropByState from "./components/BarChartPropByState";
import BarChartPropByStateSkeleton from "./components/BarChartPropByStateSkeleton";
import Header from "./components/Header";
import LineCountPerYear from "./components/LineCountPerYear";
import MobileAlert from "./components/MobileAlert";
import PieYTDAquisitions from "./components/PieYTDAquisitions";
import SummaryCard from "./components/SummaryCard";
import SummaryCardSkeleton from "./components/SummaryCardSkeleton";
import TopNewProp from "./components/TopNewProp";
import WpTable from "./components/WpTable";

// Api
import useAxios from "./hooks/useAxios";
import axios from "./apis/wpApi";

// Calculations
import getCountPerState from "./components/functions/getCountPerState";

const App = () => {
  const date = "12/20/22";

  const [data, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfig: {},
    data: {}, // post quest
  });

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
    <div className="w-full bg-brutalBeige App">
      <Header />
      {loading && <p>loading...</p>}
      {!loading && error && <p>something went wrong...</p>}
      {!loading && !error && (
        <main className="relative max-w-5xl px-4 mx-auto mx:px-0 -top-40">
          <div className="flex flex-wrap justify-center w-full gap-4 md:px-0 lg:justify-between">
            {" "}
            <SummaryCard
              numbers={data.length}
              title={"Total Properties"}
              date={date}
            />
            <SummaryCard
              numbers={
                getPropPerYear()[new Date().getFullYear()] -
                getPropPerYear()[new Date().getFullYear() - 1]
              }
              title={"YOY Properties Aquisition"}
              date={date}
            />
            <SummaryCard
              numbers={getPropPerYear()[new Date().getFullYear()]}
              title={"YTD Properties Aquisition"}
              date={date}
            />
            <SummaryCard
              numbers={Math.round(
                getPropPerYear()[new Date().getFullYear()] / 12
              )}
              title={"YTD Aquisitions Per Month"}
              date={date}
            />
            <SummaryCard
              numbers={Object.keys(getCountPerState(data)).length}
              title={"# States Footprint"}
              date={date}
            />
            <SummaryCard
              numbers={getCitiesNum()}
              title={"# Cities Footprint"}
              date={date}
            />
          </div>
          <MobileAlert />
          <div className="flex flex-wrap w-full gap-4 mt-12">
            <div className="flex-1 w-full">
              <TopNewProp data={data} />
            </div>
            <div className="flex-1 w-full">
              <PieYTDAquisitions data={data} />
            </div>
          </div>
          <BarChartPropByState apiData={data} date={date} />
          <LineCountPerYear apiData={data} />
          <WpTable apiData={data} />
        </main>
      )}
    </div>
  );
};

export default App;
