import React from 'react';
import white4x1 from "../assets/images/logos/4x1_white.svg";
import { Link, useLocation } from "react-router-dom";


const Footer = () => {


    return(
        <footer>
            <div className='p-10 bg-bb_blue grid grid-cols-4 tablet:grid-cols-1'>
                <div className='pl-10 col-span-3 max-w-2xl tablet:pl-0'>
                    <Link to="/">
                        <img
                            className="h-[64px] tablet:h-[50px]"
                            src={white4x1}
                            alt="Blue Ballot"
                        />
                    </Link>
                        <p className='pt-8 franklin-gothic-book text-bb_white '> Blue Ballot 2023 is The GUIDON’s special coverage of the Sanggunian General Elections. Designed and developed by Digital Development 2022-2023.</p>
                        
                </div>
                <div className=''>
                    <div className='  bg-bb_blue pt-12 pr-10  text-right text-bb_white uppercase franklin-gothic-demi tablet:text-left tablet:grid  tablet:pr-0 tablet:grid-cols-2'>
                        <Link to='/'>
                            <h3> Home </h3>
                        </Link>
                        <Link to='/editorial'>
                            <h3> Editorial </h3>
                        </Link>
                        <Link to='/candidates'>
                            <h3> Candidates </h3>
                        </Link>
                        <Link to='/a-year-in-review'>
                            <h3> A Year in Review </h3>
                        </Link>
                        <Link to='/archives'>
                            <h3> Archives </h3>
                        </Link> 
                            
                        </div>
                </div>
                
            </div>
            <div className='bg-bb_blue'>
                    <div className='w-[70vw]'>
                        <div className='w-[60vw] float-left'>
                            <div className='w-[40vw] h-[4px] bg-bb_light_blue float-left'>
                            
                            </div>
                            <div className='w-[20vw] h-[4px] bg-bb_yellow float-right'>
                            
                            </div>
                        </div>
                        <div className='w-[10vw] h-[4px] bg-bb_orange float-right'>
                        </div>
                    </div>`
                </div>
        </footer>
    )
}

export default Footer;