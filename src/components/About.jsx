import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pd=8 pl-4 mb-7">
            <p className="text-4xl font-bold inline border-b-4  border-pink-600 ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 sm:grid grid-cols-2 gap-8">
          <div className="mb-4 sm:text-right text-4xl   font-bold">
            <p>Hi. I'm Flavius, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              I'm passionate about all things in Web Development. I work hard, I
              care about writing clean code and I genuinely love to learn. I'm
              currently looking for the right opportunity to work in an
              environment that will help me to progress into a front-end role.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
