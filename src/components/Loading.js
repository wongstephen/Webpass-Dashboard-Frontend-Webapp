import React from "react";

// Components
import SummaryCardSkeleton from "./SummaryCardSkeleton";
import BarChartPropByStateSkeleton from "./BarChartPropByStateSkeleton";

const Loading = () => {
  return (
    <div className="relative max-w-5xl px-4 mx-auto mx:px-0 -top-40">
      <div className="flex flex-wrap justify-center w-full gap-4 md:px-0 lg:justify-between">
        <SummaryCardSkeleton />
        <SummaryCardSkeleton />
        <SummaryCardSkeleton />
      </div>
      <BarChartPropByStateSkeleton />
      <BarChartPropByStateSkeleton />
    </div>
  );
};

export default Loading;
