import React from "react";
import { Link } from "react-router-dom";

const Quizs = ({ data }) => {
  console.log(data);
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.map((quiz) => (
          <div key={quiz.id} className="rounded shadow  ">
            <div className="bg-gray-100">
              <Link to={`/quiz/${quiz.id}`}>
                <img
                  src={quiz.logo}
                  alt={quiz.name}
                  className="  h-44 w-44 mx-auto"
                />
              </Link>
            </div>
            <div className="my-3 text-center">
              <h2 className="font-bold text-xl text-orange-500 text-center">
                {quiz.name}
              </h2>
              <p className="text-gray-500">Total Quiz {quiz.total}</p>
              <Link
                to={`/quiz/${quiz.id}`}
                className="text-sm text-blue-500 mt-5 inline-block bg-slate-900  rounded px-5 py-2"
              >
                Start Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quizs;
