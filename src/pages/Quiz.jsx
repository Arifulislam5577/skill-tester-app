import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const { name, id, questions } = useLoaderData();

  console.log(useLoaderData());

  return (
    <section>
      <div className="py-10 bg-gray-100 text-center">
        <h1 className="text-2xl uppercase  font-bold text-orange-500 tracking-wider">
          {name}
        </h1>
        <p className="text-gray-400 mt-3">Correct Answer : 0</p>
        <p className="text-gray-400">Incorrect Answer : 0</p>
      </div>
      <div className="lg:w-1/2 w-full mx-auto my-5">
        {questions?.map((qt) => (
          <div key={qt.id} className="question border p-5 mb-5">
            <h2>{qt.question}</h2>
            <ul className="flex flex-col gap-3 mt-4">
              {qt.options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quiz;
