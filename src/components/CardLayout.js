import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardLayout = ({ title, icon, children }) => {
  return (
    <section className="h-full gap-4 p-4 bg-white rounded shadow-md">
      <div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-400 aspect-square">
            <FontAwesomeIcon icon={icon} className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-medium">{title}</h2>
        </div>
        <hr className="mt-4" />
      </div>
      <div className="w-full h-full mt-4">{children}</div>
    </section>
  );
};

export default CardLayout;
