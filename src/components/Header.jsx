import React from "react";

const Header = () => {
  return (
    <div className="container  flex md:flex-row flex-col items-center py-10">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-slate-900">
          Let's test
          <br className="hidden lg:inline-block" />
          our variables skills
        </h1>
        <p className="mb-8 leading-relaxed text-gray-600">
          You can assess your performance here. Around 530 people participate in
          the skilltest and the highest score was 38. Here are a few statistics
          about the distribution.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-slate-900 border-0 py-2 px-6 focus:outline-none hover:bg-slate-800 rounded text-lg">
            Start Now
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="hero.svg"
        />
      </div>
    </div>
  );
};

export default Header;
