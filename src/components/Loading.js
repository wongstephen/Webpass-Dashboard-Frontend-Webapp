import React from "react";

const Loading = () => {
  return (
    <div className="grid w-full gap-4 mt-2 border-dashed auto-cols-fr border-1 border-x-orange-400">
      <PlaceHolder />
    </div>
  );
};

const PlaceHolder = () => {
  return (
    <div className="min-h-[20rem] bg-white rounded-md flex items-center justify-center">
      <img src="assets/throbber.gif" alt="loading" />
    </div>
  );
};

export default Loading;
