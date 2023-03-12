import React from "react";
import { Link } from "react-router-dom";
import white4x1 from "../assets/images/svgs/logo4x1white.svg";

export default function Hero() {
  return (
    <div className="bg-hero-bg bg-no-repeat bg-cover w-full h-[650px] laptop:h-[550px] ">
      <div className="bg-gradient-to-t from-black laptop:from-bb_yellow_transparent laptop:via-bb_orange_transparent laptop:to-bb_blue_transparent w-full h-[650px] laptop:h-[550px]">
        <div className="flex flex-col justify-center items-center font-franklinGothicDemi text-white">
          <img
            className="h-auto w-[750px] laptop:w-[380px] pt-28 laptop:pt-16"
            src={white4x1}
            alt="Blue Ballot"
          />
          <p className="text-3xl laptop:text-xl pt-3 laptop:pt-1 text-center">
            2023 SANGGUNIAN GENERAL ELECTIONS
          </p>
          <div className="flex laptop:flex-col flex-row gap-6 text-center justify-center pt-20 laptop:pt-12">
            <Link
              className="bg-bb_blue hover:bg-bb_blue_darker  text-xl rounded-xl tracking-wide py-4 px-32"
              to="/candidates/president"
            >
              PRESIDENT
            </Link>
            <Link
              className="bg-bb_orange hover:bg-bb_orange_darker text-xl rounded-xl tracking-wide py-4 px-28"
              to="/candidates/vice-president"
            >
              VICE PRESIDENT
            </Link>
            <Link
              className="bg-bb_yellow hover:bg-bb_yellow_darker text-xl rounded-xl tracking-wide py-4 px-24"
              to="/candidates/vice-president"
            >
              SCHOOL REPRESENTATIVES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
