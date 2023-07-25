// Styles
import "./App.css";

// Components
import BarChartPropByState from "./components/BarChartPropByState";
import Header from "./components/Header";
import LineCountPerYear from "./components/LineCountPerYear";
import PieYTDAquisitions from "./components/PieYTDAquisitions";
import Loading from "./components/Loading";

import TopNewProp from "./components/TopNewProp";
import WpTable from "./components/WpTable";
import Summary from "./components/Summary";

// Api
import useAxios from "./hooks/useAxios";
import axios from "./apis/wpApi";

const App = () => {
  const date = "12/20/22";

  const [data, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfig: {},
    data: {}, // post quest
  });

  return (
    <div className="bg-[#edeef2] dark:bg-[#4E31AA] dark:text-white w-full h-full gap-4 pb-20">
      <div className="px-4 mx-auto max-w-7xl">
        <Header />

        {loading && <Loading />}

        {!loading && error && (
          <p className="p-12 text-center">something went wrong...</p>
        )}

        {!loading && !error && (
          <main className="grid gap-4 mt-4 md:grid-cols-12 md:grid-flow-row">
            <div className="col-span-6">
              <Summary data={data} />
            </div>
            <div className="col-span-6">
              <TopNewProp data={data} />
            </div>
            <div className="col-span-6 md:order-5">
              <PieYTDAquisitions apiData={data} />
            </div>

            <div className="col-span-6">
              <BarChartPropByState apiData={data} date={date} />
            </div>
            <div className="col-span-6">
              <LineCountPerYear apiData={data} />
            </div>
            <div className="col-span-6 md:order-6">
              <WpTable apiData={data} />
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default App;
