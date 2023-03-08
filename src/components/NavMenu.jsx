import React from "react";
import { useState } from "react";
import white4x1 from "../assets/images/logos/4x1_white.svg";
import "../fonts.css";
import { Link } from "react-router-dom";

const NavMenu = ({ menu, setMenu }) => {
  const [candidates, setCandidates] = useState(false);

  return (
    <>
      <nav
        className={`top-0 left-0 absolute flex transition duration-500 transform select-none ${
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
              <line
                x1="12"
                y1="12"
                x2="52"
                y2="52"
                strokeLinecap="round"
              ></line>
              <line
                x1="52"
                y1="12"
                x2="12"
                y2="52"
                strokeLinecap="round"
              ></line>
            </svg>
          </div>
          <div className="ml-6 mb-12 mt-6 tablet:w-40">
            <img
              className="w-60 tablet:w-32"
              src={white4x1}
              alt="Blue Ballot"
            />
          </div>
          <ul
            className="ml-6 text-white uppercase text-2xl tablet:text-base"
            style={({ fontFamily: "Chivo" }, { fontWeight: 600 })}
          >
            <Link to="/">
              <li className="my-3 w-fit cursor-pointer link-underline">Home</li>
            </Link>
            <Link to="/editorial">
              <li className="my-3 w-fit cursor-pointer link-underline">
                Editorial
              </li>
            </Link>
            <li className="my-3 w-fit cursor-pointer">
              <div
                className="flex gap-2 cursor-pointer w-fit"
                onClick={() => {
                  setCandidates(!candidates);
                }}
              >
                <span className="link-underline">Candidates</span>
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
              <Link to="/candidates/president">
                <li className="my-3 w-fit cursor-pointer link-underline-candidates">
                  President
                </li>
              </Link>
              <Link to="/candidates/vice-president">
                <li className="my-3 w-fit cursor-pointer link-underline-candidates">
                  Vice President
                </li>
              </Link>
              <Link to="/candidates/school-rep">
                <li className="my-3 w-fit cursor-pointer link-underline-candidates">
                  School Rep.
                </li>
              </Link>
            </ul>

            <Link to="/a-year-in-review">
              <li className="my-3 w-fit cursor-pointer link-underline">
                A year in review
              </li>
            </Link>
            <Link to="/archives">
              <li className="my-3 w-fit cursor-pointer link-underline">
                Archives
              </li>
            </Link>
          </ul>
        </div>
        <div className="w-0 h-full border-b-transparent border-l-bb_blue border-b-[100vh] border-l-[60px]"></div>
      </nav>
    </>
  );
};

export default NavMenu;
