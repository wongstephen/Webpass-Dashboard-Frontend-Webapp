import "./App.css";

import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import { useFetch } from "./hooks/useFetch";
import SummaryCardSkeleton from "./components/SummaryCardSkeleton";
import BarChartPropByState from "./components/BarChartPropByState";
import MobileAlert from "./components/MobileAlert";
import BarChartPropByStateSkeleton from "./components/BarChartPropByStateSkeleton";
import WpTable from "./components/WpTable";
import LineCountPerYear from "./components/LineCountPerYear";
import TopNewProp from "./components/TopNewProp";

function App() {
  const date = "12/20/22";

  const { data, loading, err } = useFetch(process.env.REACT_APP_API);

  const getCountPerState = () => {
    let propertyPerState = {};
    data.forEach((property) => {
      const state = property.city_state.split(", ")[1];
      if (propertyPerState[state]) {
        propertyPerState[state]++;
      } else {
        propertyPerState[state] = 1;
      }
    });
    return propertyPerState;
  };

  const getCitiesNum = () => {
    let cities = data.map((property) => {
      return property.city_state;
    });
    return [...new Set(cities)].length;
  };

  const getPropPerYear = () => {
    const years = data.map((property) => {
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
      <main className="relative max-w-5xl px-4 mx-auto mx:px-0 -top-40">
        {/* Cards */}
        <div className="flex flex-wrap justify-center w-full gap-4 md:px-0 lg:justify-between :">
          {loading ? (
            <>
              {new Array(3).fill("").map((card, idx) => {
                return <SummaryCardSkeleton key={idx} />;
              })}
            </>
          ) : (
            <>
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
                numbers={Object.keys(getCountPerState()).length}
                title={"# States Footprint"}
                date={date}
              />
              <SummaryCard
                numbers={getCitiesNum()}
                title={"# Cities Footprint"}
                date={date}
              />
            </>
          )}
        </div>

        <MobileAlert />

        {loading ? (
          <BarChartPropByStateSkeleton />
        ) : (
          <>
            <div className="flex w-full gap-4 mt-12">
              <div className="flex-1 bg-blue-500">
                <TopNewProp data={data} />
              </div>
              {/* <div className="w-1/2 bg-blue-500">sdf</div> */}
            </div>
            <BarChartPropByState data={getCountPerState} date={date} />
            <LineCountPerYear apiData={data} />
            <WpTable apiData={data} state={getCountPerState} />
          </>
        )}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
