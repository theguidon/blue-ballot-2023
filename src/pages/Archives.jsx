import React from "react";
import archivesSample from "../assets/images/archives-sample.png";
import BlueBallot2017 from "../assets/images/BlueBallot2017.png";
import BlueBallot2020 from "../assets/images/BlueBallot2020.jpeg";
import BlueBallot2021 from "../assets/images/BlueBallot2021.png";
import BlueBallot2022 from "../assets/images/BlueBallot2022.png";

import { Link } from "react-router-dom";
import ArchivesHeader from "../components/ArchivesHeader";
import ArchivesFooter from "../components/ArchivesFooter";
export default function Archives() {
  return (
    <div className="flex flex-col justify-between align-middle h-screen">
      <div>
        <ArchivesHeader />
        <div className="flex flex-row tablet:flex-col w-full justify-center align-middle tablet:pt-5 pt-10">
          <div className="flex pt-3 tablet:hidden flex-grow justify-end">
            <div className="w-[270px] h-[8px] bg-bb_blue "></div>
            <div className="w-[135px] h-[8px] bg-bb_yellow"></div>
            <div className="w-[45px] h-[8px] bg-bb_orange "></div>
          </div>
          <h1 className="font-freightText text-center font-bold text-4xl laptop:text-3xl px-10">
            Blue Ballot Archives
          </h1>
          <div className=" flex pt-3 tablet:hidden flex-grow">
            <div className="w-[45px] h-[8px] bg-bb_orange"></div>
            <div className="w-[135px] h-[8px] bg-bb_yellow"></div>
            <div className="w-[270px] h-[8px] bg-bb_blue"></div>
          </div>
          <div className=" pt-3 tablet:flex hidden">
            <div className="w-[10vw] h-[8px] bg-bb_orange"></div>
            <div className="w-[30vw] h-[8px] bg-bb_yellow"></div>
            <div className="w-[60vw] h-[8px] bg-bb_blue"></div>
          </div>
        </div>
        <div className="flex flex-row tablet:flex-col justify-center align-middle items-center py-10 gap-5 phone:px-10 ">
          <Link
            className="w-[312px]"
            to="https://issuu.com/theguidonweb/docs/_final__blue_ballot_2017"
          >
            <img
              className="shadow-xl h-[312px] w-[312px] object-cover object-top"
              src={BlueBallot2017}
            />
            <p className="font-franklinGothicBook text-[20px] pt-5 leading-none">
              Blue Ballot 2017
            </p>
            <p className=" font-franklinGothicBook">March 4, 2022</p>
          </Link>
          <Link
            className="w-[312px]"
            to="https://issuu.com/theguidonweb/docs/gdn_sanggu_review_1920"
          >
            <img
              className="shadow-xl h-[312px] w-[312px]  object-cover object-left"
              src={BlueBallot2020}
            />
            <p className="font-franklinGothicBook text-[20px] pt-5 leading-none">
              Blue Ballot 2020
            </p>
            <p className="font-franklinGothicBook">March 4, 2022</p>
          </Link>
          <Link
            className="w-[312px]"
            to="https://issuu.com/theguidonweb/docs/blue_ballot_2021"
          >
            <img
              className="shadow-xl  h-[312px] w-[312px] object-cover object-top"
              src={BlueBallot2021}
            />
            <p className="font-franklinGothicBook text-[20px] pt-5 leading-none">
              Blue Ballot 2021
            </p>
            <p className="font-franklinGothicBook">March 4, 2022</p>
          </Link>
          <Link
            className="w-[312px]"
            to="https://issuu.com/theguidonweb/docs/032122-blue_ballot_2022-2"
          >
            <img
              className="shadow-xl h-[312px] w-[312px] object-cover object-top"
              src={BlueBallot2022}
            />
            <p className="font-franklinGothicBook text-[20px] pt-5 leading-none">
              Blue Ballot 2022
            </p>
            <p className="font-franklinGothicBook">March 4, 2022</p>
          </Link>
        </div>
      </div>
      <ArchivesFooter />
    </div>
  );
}
