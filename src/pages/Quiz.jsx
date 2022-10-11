import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BiArrowToRight } from "react-icons/bi";
import { toast } from "react-toastify";
const Quiz = () => {
  const {
    data: { name, questions },
  } = useLoaderData();

  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [InCorrectAnswer, setInCorrectAnswer] = useState(0);

  const handleCorrectAnswer = () => {
    setCorrectAnswer((prev) => prev + 1);
    toast.success("Correct Answer");
  };
  const handleInCorrectAnswer = () => {
    setInCorrectAnswer((prev) => prev + 1);
    toast.error("InCorrect answer");
  };

  const replaceP = (str) => {
    let string = str.replace("<p>", "");
    return string.replace("</p>", "");
  };

  return (
    <section>
      <div className="py-10 bg-gray-100 text-center">
        <h1 className="text-2xl uppercase  font-bold text-orange-500 tracking-wider">
          {name}
        </h1>
        <p className="text-gray-400 mt-3">
          Correct Answer :{" "}
          <span className="text-slate-900 font-bold">{correctAnswer}</span>
        </p>
        <p className="text-gray-400">
          Incorrect Answer :{" "}
          <span className="text-red-500 font-bold">{InCorrectAnswer}</span>
        </p>
      </div>
      <div className="lg:w-1/2 w-full mx-auto my-5">
        {questions?.map((qt) => (
          <div key={qt.id} className="question border p-5 mb-5">
            <h2 className="font-bold  text-slate-900">
              {replaceP(qt.question)}
            </h2>
            <ul className="flex flex-col gap-3 mt-4">
              {qt.options.map((option) => (
                <li
                  className="cursor-pointer text-sm duration-300 transition-all hover:text-orange-500 flex items-center gap-2"
                  key={option}
                  onClick={() =>
                    qt.correctAnswer === option
                      ? handleCorrectAnswer()
                      : handleInCorrectAnswer()
                  }
                >
                  <BiArrowToRight />
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quiz;
