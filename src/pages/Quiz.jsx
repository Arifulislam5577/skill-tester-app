import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const { name, id, questions } = useLoaderData();

  console.log(useLoaderData());
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [InCorrectAnswer, setInCorrectAnswer] = useState(0);

  const handleCorrectAnswer = () => {
    setCorrectAnswer((prev) => prev + 1);
    alert("Correct answer");
  };
  const handleInCorrectAnswer = () => {
    setInCorrectAnswer((prev) => prev + 1);
    alert("InCorrect answer");
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
            <h2>{qt.question}</h2>
            <ul className="flex flex-col gap-3 mt-4">
              {qt.options.map((option) => (
                <li
                  className="cursor-pointer hover:tracking-wider duration-300 transition-all hover:text-orange-500"
                  key={option}
                  onClick={() =>
                    qt.correctAnswer === option
                      ? handleCorrectAnswer()
                      : handleInCorrectAnswer()
                  }
                >
                  {option}
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
