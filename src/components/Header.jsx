import React from "react";
import { useState } from "react";
import NavMenu from "./NavMenu";
import purewhite4x1 from "../assets/images/logos/4x1_purewhite.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-gradient-to-r from-bb_blue via-bb_orange to-bb_yellow flex py-3 top-0 z-50 w-full px-12  tablet:px-4">
      <div
        className="cursor-pointer my-auto"
        onClick={() => {
          setMenu(true);
        }}
      >
        <svg
          viewBox="0 0 100 80"
          width="32"
          height="24"
          fill="white"
          stroke="white"
        >
          <rect width="100" height="10" rx="5"></rect>
          <rect y="30" width="100" height="10" rx="5"></rect>
          <rect y="60" width="100" height="10" rx="5"></rect>
        </svg>
      </div>
      <div className="mx-auto">
        <img className="h-10 mr-8" src={purewhite4x1} alt="Blue Ballot" />
      </div>
      <NavMenu menu={menu} setMenu={setMenu} />
      <div className={`w-screen h-screen bg-black  top-0 left-0 opacity-80 ${menu ? "absolute" : "hidden"}`}></div>
    </header>
  );
};

export default Header;
