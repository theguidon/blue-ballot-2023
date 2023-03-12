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
    <>
      <div className="h-[64px] tablet:h-[46px]"></div>
      <header className="fixed bg-gradient-to-r from-bb_blue via-bb_orange to-bb_yellow flex py-3 top-0 z-50 w-screen px-12 tablet:px-4 tablet:py-2">
        <div
          className="cursor-pointer my-auto"
          onClick={() => {
            setMenu(true);
          }}
        ></div>
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
          className={`w-screen h-screen absolute  bg-black transition-opacity ease-in-out duration-500  top-0 left-0 ${
            menu
              ? "pointer-events-auto opacity-80"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => {
            setMenu(false);
          }}
        ></div>
      </header>
    </>
  );
};

export default Header;
