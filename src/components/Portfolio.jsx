import React from 'react';
import ishwin from "../Assets/figmanew/ishwin.png";
import cookwise from "../Assets/figmanew/cookwise.png";
import refridge from "../Assets/figmanew/refridge new.png";

const Portfolio = () => {
    const portfolios = [
      
      {
        id: 1,
        src: refridge,
        href: "https://www.figma.com/proto/CphOL4r7q6kTGSg7wh4nQq/Refridge?page-id=0%3A1&type=design&node-id=585-1402&viewport=615%2C395%2C0.08&scaling=scale-down&starting-point-node-id=585%3A1402&show-proto-sidebar=1"
      },
      {
        id: 2,
        src: cookwise,
        href: "https://www.figma.com/proto/qDSnu565dhFdNwx9V497yh/Prototype---Cookwise-(Copy)?page-id=0%3A1&type=design&node-id=117-464&viewport=455%2C308%2C0.02&scaling=scale-down&starting-point-node-id=117%3A464&show-proto-sidebar=1"
      },
      {
        id: 3,
        src: ishwin,
        href: "https://www.figma.com/proto/1R6ezdcwz2sZAvMwZnvXv4/Ishwin-juices?page-id=0%3A1&node-id=1-80&starting-point-node-id=1%3A98&scaling=scale-down"
    }
    ];
  
    return (
      <div 
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, href }) => (
              <a key={id} href={href} target="_blank" rel="noopener noreferrer">
              <div className=" shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                    Case study
                </button>  
                </div>
              </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
export default Portfolio;