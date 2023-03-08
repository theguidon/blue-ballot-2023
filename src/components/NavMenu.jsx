import React from "react";
import { useState } from "react";
import white4x1 from "../assets/images/logos/4x1_white.svg";
import "../fonts.css";

const NavMenu = ({ menu, setMenu }) => {
  const [candidates, setCandidates] = useState(false);

  return (
    <nav
      className={`top-0 left-0 absolute flex transition duration-300 transform select-none ${
        menu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-60 h-screen bg-bb_blue tablet:w-44">
        <div className="flex items-end my-auto h-16 px-8">
          <svg
            viewBox="0 0 64 64"
            width="32"
            height="32"
            fill="none"
            stroke="white"
            strokeWidth="8"
            className="cursor-pointer"
            onClick={() => {
              setMenu(false);
            }}
          >
            <line x1="12" y1="12" x2="52" y2="52" strokeLinecap="round"></line>
            <line x1="52" y1="12" x2="12" y2="52" strokeLinecap="round"></line>
          </svg>
        </div>
        <div className="ml-6 mb-12 mt-6 tablet:w-40">
          <img className="w-48 tablet:w-32" src={white4x1} alt="Blue Ballot" />
        </div>
        <ul
          className="ml-6 text-white uppercase text-2xl tablet:text-base"
          style={({ fontFamily: "Chivo" }, { fontWeight: 600 })}
        >
          <li className="my-3 w-fit cursor-pointer">Home</li>
          <li className="my-3 w-fit cursor-pointer">Editorial</li>
          <li className="my-3 w-fit cursor-pointer">
            <div
              className="flex gap-2 cursor-pointer w-fit"
              onClick={() => {
                setCandidates(!candidates);
              }}
            >
              <span>Candidates</span>
              <svg
                viewBox="0 0 24 24"
                fill="white"
                width="24"
                className={`transform transition duration-300 ${
                  candidates ? "rotate-180" : "rotate-0"
                }`}
              >
                <path d="M12 8.5L5.5 15 6.9 16.4 12 11.3 17.1 16.4 18.5 15z" />
              </svg>
            </div>
          </li>
          <ul
            className={`indent-4 text-gray-400 transition origin-top transform ${
              candidates ? "block" : "hidden"
            }`}
          >
            <li className="my-3 w-fit cursor-pointer">President</li>
            <li className="my-3 w-fit cursor-pointer">Vice President</li>
            <li className="my-3 w-fit cursor-pointer">School Rep.</li>
          </ul>

          <li className="my-3 w-fit cursor-pointer">A year in review</li>
          <li className="my-3 w-fit cursor-pointer">Archives</li>
        </ul>
      </div>
      <div className="w-0 h-full border-b-transparent border-l-bb_blue border-b-[100vh] border-l-[60px]"></div>
    </nav>
  );
};

export default NavMenu;
