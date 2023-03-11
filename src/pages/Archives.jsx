import React from "react";
import archivesSample from "../assets/images/archives-sample.png";

export default function Archives() {
  return (
    <>
      <div className="flex flex-row tablet:flex-col w-full justify-center tablet:pt-5 pt-10">
        <div className=" flex pt-3 tablet:hidden">
          <div className="w-[17vw] h-[8px] bg-bb_blue"></div>
          <div className="w-[8vw] h-[8px] bg-bb_yellow"></div>
          <div className="w-[4vw] h-[8px] bg-bb_orange "></div>
        </div>
        <h1 className="font-freightText text-center font-bold text-4xl laptop:text-3xl px-10">
          Blue Ballot Archives
        </h1>
        <div className=" flex pt-3 tablet:pt-2">
          <div className="w-[4vw] tablet:w-[16vw] h-[8px] bg-bb_orange"></div>
          <div className="w-[8vw] tablet:w-[32vw] h-[8px] bg-bb_yellow"></div>
          <div className="w-[17vw] tablet:w-[64vw] h-[8px] bg-bb_blue"></div>
        </div>
      </div>
      <div className="flex flex-row tablet:flex-col items-center justify-center">
        <div>
          <img className="w-[358px] h-[238px] p-0" src={archivesSample} />
          <p className="pl-5 font-franklinGothicBook text-[20px] leading-none">
            Blue Ballot 2022
          </p>
          <p className="pl-5 font-franklinGothicBook">March 4, 2022</p>
        </div>
        <div>
          <img className="w-[358px] h-[238px] p-0" src={archivesSample} />
          <p className="pl-5 font-franklinGothicBook text-[20px] leading-none">
            Blue Ballot 2022
          </p>
          <p className="pl-5 font-franklinGothicBook">March 4, 2022</p>
        </div>
        <div>
          <img className="w-[358px] h-[238px] p-0" src={archivesSample} />
          <p className="pl-5 font-franklinGothicBook text-[20px] leading-none">
            Blue Ballot 2022
          </p>
          <p className="pl-5 font-franklinGothicBook">March 4, 2022</p>
        </div>
        <div>
          <img className="w-[358px] h-[238px] p-0" src={archivesSample} />
          <p className="pl-5 font-franklinGothicBook text-[20px] leading-none">
            Blue Ballot 2022
          </p>
          <p className="pl-5 font-franklinGothicBook">March 4, 2022</p>
        </div>
      </div>
    </>
  );
}
