import white4x1 from "../assets/images/logos/4x1_white.svg";
import { Link, useLocation } from "react-router-dom";
import "../fonts.css";

const Footer = () => {
  return (
    <footer className="w-screen">
      <div className="p-10 bg-bb_blue grid grid-cols-4 tablet:grid-cols-1">
        <div className="pl-10 col-span-3 max-w-2xl tablet:pl-0">
          <Link to="/">
            <img
              className="h-[64px] tablet:h-[50px]"
              src={white4x1}
              alt="Blue Ballot"
            />
          </Link>
          <p className="pt-8 chivo-regular text-bb_white ">
            {" "}
            Blue Ballot 2023 is The GUIDON’s special coverage of the Sanggunian
            General Elections. Designed and developed by Digital Development
            2022-2023.
          </p>
        </div>
      </div>
      <div className="bg-bb_blue">
        <div className="w-[70vw]">
          <div className="w-[60vw] float-left">
            <div className="w-[40vw] h-[4px] bg-bb_light_blue float-left"></div>
            <div className="w-[20vw] h-[4px] bg-bb_yellow float-right"></div>
          </div>
          <div className="w-[10vw] h-[4px] bg-bb_orange float-right"></div>
        </div>
        `
      </div>
    </footer>
  );
};

export default Footer;
