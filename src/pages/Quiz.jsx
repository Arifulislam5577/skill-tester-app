import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BiArrowToRight } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import Modal from "../components/Modal";
const Quiz = () => {
  //REAL

  const {
    data: { name, questions },
  } = useLoaderData();

  //FAKE
  // const { name, questions } = useLoaderData();

  const [showModal, setShowModal] = useState(false);
  const [answer, setAnswer] = useState("");
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

  const handleModal = (ans) => {
    setAnswer(ans);
    setShowModal(true);
  };

  return (
    <section>
      {showModal && <Modal setShowModal={setShowModal} ans={answer} />}

      <div className="md:py-10 py-5 bg-gray-100 text-center">
        <h1 className="text-2xl uppercase  font-bold text-orange-500 tracking-wider">
          {name}
        </h1>
        <p className="text-gray-400 mt-3">
          Correct Answer :
          <span className="text-slate-900 font-bold">{correctAnswer}</span>
        </p>
        <p className="text-gray-400">
          Incorrect Answer :
          <span className="text-red-500 font-bold">{InCorrectAnswer}</span>
        </p>
      </div>
      <div className="lg:w-1/2 w-full mx-auto my-5 lg:px-0 px-5">
        {questions?.map((qt, index) => (
          <div key={qt.id} className="question border md:p-5 p-3 mb-5 relative">
            <button
              className="absolute right-3 top-3 "
              onClick={() => handleModal(qt.correctAnswer)}
            >
              <AiOutlineEyeInvisible size="20" />
            </button>

            <h2 className="md:font-bold  text-slate-900 mt-3 md:mt-0 flex gap-2">
              <span> Q:{index + 1}</span>
              <span>{replaceP(qt.question)}</span>
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
