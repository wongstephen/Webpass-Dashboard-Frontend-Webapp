import "./App.css";

import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import { useFetch } from "./hooks/useFetch";
import SummaryCardSkeleton from "./components/SummaryCardSkeleton";
import BarChartPropByState from "./components/BarChartPropByState";

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
    <div className="w-full App">
      <Header />
      <main className="relative max-w-5xl px-4 mx-auto mx:px-0 -top-20">
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

        {/* Warning */}
        <div
          className="flex flex-col items-center w-full gap-4 p-4 mx-auto border-4 border-black rounded-lg sm:gap-12 sm:flex-row lg:hidden mt-14 shadow-neub"
          name="alert"
          data-testid="alert-component"
        >
          <div className="p-2 text-white rounded-full bg-brudatlRed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <p>
            The following charts are best viewed on a computer screen or on
            mobile with landscape mode.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto mt-16 border-4 border-black rounded-md shadow-neub">
          <div className="flex flex-col items-center justify-center w-full h-24 border-b-4 border-black bg-brutalBlue rounded-t-md font-Roboto">
            <p className="font-bold text-center md:text-4xl ">
              Properties Distribution by State
            </p>
            <p className="text-xs md:text-md">
              Total properties per state as of {date}
            </p>
          </div>
          {!loading && <BarChartPropByState data={getCountPerState} />}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
