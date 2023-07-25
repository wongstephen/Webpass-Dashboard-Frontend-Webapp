import React from "react";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const { isLight, setIsLight } = useTheme();

  function handleTheme() {
    if (isLight) {
      setIsLight(() => false);
    } else {
      setIsLight(() => true);
    }
  }

  return (
    <header className="py-10  px-6 rounded-b-sm shadow-md bg-white dark:bg-[#3A1078] flex justify-between">
      <h1 className="text-4xl font-bold text-mainBlue dark:text-white">
        WEBPASS watch
      </h1>
      <div>
        <input
          type="checkbox"
          className="l"
          onClick={handleTheme}
          value={isLight}
        />
      </div>
    </header>
  );
};

export default Header;
