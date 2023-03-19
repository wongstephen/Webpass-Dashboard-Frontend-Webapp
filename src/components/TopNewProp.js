import React from "react";
import getTopNewProp from "./functions/getTopNewProp";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardLayout from "./CardLayout";

const TopTenTable = (data) => {
  const topTenArr = getTopNewProp(data);
  return (
    <table className="w-full">
      <thead>
        <tr className="text-xs text-left md:text-base">
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Added</th>
        </tr>
      </thead>
      <tbody>
        {topTenArr &&
          topTenArr.map((el, idx) => {
            const date = new Date(el.created_at);
            return (
              <tr key={idx} className="text-xs">
                <td>{el.address}</td>
                <td>{el.city_state.split(", ")[0]}</td>
                <td>{el.city_state.split(", ")[1]}</td>
                <td>{`${date.getMonth()}/${date.getDate()}/${date
                  .getFullYear()
                  .toString()
                  .substring(2)}`}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

const TopNewProp = (data) => {
  return (
    <CardLayout title="Latest 10 Properties" icon={faPlus}>
      <TopTenTable data={data} />
    </CardLayout>
  );
};

export default TopNewProp;
