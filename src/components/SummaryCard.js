import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SummaryCard = ({ title, numbers, icon, date }) => {
  return (
    <div className="flex gap-4 ">
      <div className="flex w-8 h-8 text-white rounded-lg bg-mainBlue dark:bg-[#2F58CD] aspect-square place-self-center place-content-center">
        <FontAwesomeIcon
          icon={icon}
          className="flex place-self-center dark:text-white/50"
        />
      </div>
      <div>
        <h3 className="p-0 m-0 font-medium font-base">{title}</h3>
        <p className="p-0 m-0 text-sm font-medium text-zinc-500 dark:text-zinc-200">
          {" "}
          {numbers.toLocaleString("en-US")}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
