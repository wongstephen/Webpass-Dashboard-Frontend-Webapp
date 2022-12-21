import "./App.css";

import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import { useFetch } from "./hooks/useFetch";
import SummaryCardSkeleton from "./components/SummaryCardSkeleton";
import BarChartPropByState from "./components/BarChartPropByState";
import MobileAlert from "./components/MobileAlert";
import BarChartPropByStateSkeleton from "./components/BarChartPropByStateSkeleton";
import Table from "./components/Table";

function App() {
  const date = "12/20/22";

  const { data, loading, err } = useFetch(
    "https://lobster-app-sscw2.ondigitalocean.app/"
  );

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
                numbers={Object.keys(getCountPerState()).length}
                title={"States Deployed"}
                date={date}
              />
              <SummaryCard
                numbers={getCitiesNum()}
                title={"Cities Deployed"}
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
            <BarChartPropByState data={getCountPerState} date={date} />
            <Table apiData={data} />
          </>
        )}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
