import React from "react";
import getTopNewProp from "./functions/getTopNewProp";

const TopTenTable = (data) => {
  const topTenArr = getTopNewProp(data);
  return (
    <table className="w-full">
      <thead>
        <tr className="text-left">
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Date Added</th>
        </tr>
      </thead>
      <tbody>
        {topTenArr &&
          topTenArr.map((el, idx) => {
            const date = new Date(el.created_at);
            return (
              <tr key={idx}>
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
    <div className="w-full h-full bg-white border-4 border-black rounded-md shadow-neub">
      <div className="flex items-center justify-center h-24 border-b-4 border-black bg-brutalPeach">
        <p className="font-bold text-center md:text-4xl ">
          Newest 10 Properties
        </p>
      </div>
      <div className="p-4">
        <TopTenTable data={data} />
      </div>
    </div>
  );
};

export default TopNewProp;
