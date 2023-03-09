import React from "react";
import { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import purewhite4x1 from "../assets/images/logos/4x1_purewhite.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    if (menu) {
      setOverlay(true);
    } else {
      setOverlay(false);
    }
  }, [menu]);

  return (
    <header className="bg-gradient-to-r from-bb_blue via-bb_orange to-bb_yellow flex py-3 top-0 z-50 w-full px-12  tablet:px-4 tablet:py-2">
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
        <Link to="/">
          <img
            className="h-10 mr-8 tablet:h-[30px]"
            src={purewhite4x1}
            alt="Blue Ballot"
          />
        </Link>
      </div>
      <NavMenu menu={menu} setMenu={setMenu} />
        <div
          className={`w-screen h-screen absolute  bg-black transition-opacity ease-in-out duration-500  top-0 left-0 ${menu ? "pointer-events-auto opacity-80" : "pointer-events-none opacity-0"}`}
          onClick={() => {
            setMenu(false);
          }}
        ></div>
    </header>
  );
};

export default Header;
