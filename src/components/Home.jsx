import React from 'react';
import HeroImage from "../Assets/heroImage.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-gradient-to-b from from-black via-black
     to-gray-800"
    >

      <div className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row">

        <div className="flex flex-col justify-center h-full">
          <h2 style={{marginTop: '3rem'}} className="text-4xl sm:text-7 font-bold text-white">
               I'm a UI/UX Designer with frontend skills</h2>
               <p className="text-white py-4 max-w-md">
                I am passionate about what I do and with my listening and communication skills, 
                drives me to deliver high-quality work. 
               </p>

               <div>
                <Link 
                 to="portfolio"
                 smooth duration={500}
                 className="group text-black w-fit px-6 py-3 my-2
                flex items-center rounded-md bg-gradient-to-r from-violet-100 to-violet-400
                cursor-pointer">
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight size={25} className="ml-1" />
                  </span>
                </Link>
             </div>
        </div>

        <div>
          <img src={HeroImage}
           alt="my profile" 
           className="rounded-2xl mx-auto w-2/4 md:w-full" />
        </div>
      </div>  
    </div>
  );
};

export default Home;