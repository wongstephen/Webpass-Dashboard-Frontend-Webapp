import React from "react";

const MobileAlert = () => {
  return (
    <div
      className="flex flex-col items-center w-full gap-4 p-4 mx-auto transition-all border-4 border-black rounded-lg sm:gap-12 sm:flex-row lg:hidden mt-14 shadow-neub"
      name="alert"
      data-testid="alert-component"
    >
      <div className="p-2 text-white rounded-full bg-brutalRed">
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
        The following charts are best viewed on a computer screen or on mobile
        with landscape mode.
      </p>
    </div>
  );
};

export default MobileAlert;
