import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import CatFlix from "../assets/projects/Capture.PNG";
import PanCakes from "../assets/projects/pancakes.PNG";
const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] text-gray-300 w-full md:h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${PanCakes})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center content-div mx-auto shadow-[#040c16]"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold pl-1 text-white tracking-wider">
                In collaboration with a skilled team, I worked on a project to
                clone the PancakeSwap website. Using HTML, Sass, and JavaScript,
                we recreated the functionalities and design of the original
                platform.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://project-pancake-swap.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/NotYerjan/pancake" target="_blank">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${CatFlix})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center content-div mx-auto shadow-[#040c16]"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Catflix is a Movie reviewing website where you can browse
                different movies check their info, ratings, and other peoples
                opinions on them.
              </span>
              <div className="pt-8 text-center">
                <a href="https://project-catflix.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NotYerjan/project-catflix"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
