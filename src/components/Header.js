import React from "react";

const Header = () => {
  return (
    <header>
      <div className="top-0 left-0 w-full border-4 border-black h-96 shadow-neub bg-brutalBlue">
        <div className="max-w-5xl mx-auto">
          <h1 className="mt-16 ml-8 text-4xl font-extrabold tracking-widest text-black uppercase md:text-8xl">
            Webpass
          </h1>

          <h2 className="ml-8 -mt-1 tracking-widest text-black uppercase -font-light text-md">
            Dashboard
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
