import React from "react";

const Blog = () => {
  const questions = [
    {
      id: 1,
      title: "What is the purpose of react router dom?",
      descrition:
        "React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.",
    },
    {
      id: 2,
      title: "How does context api work?",
      descrition:
        "Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to prop drilling or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.",
    },
    {
      id: 3,
      title: "What is useRef hook?",
      descrition:
        "The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. ",
    },
  ];
  return (
    <section className="blog py-5">
      <div className="container lg:w-1/2 mx-auto">
        {questions.map((qt) => (
          <div key={qt.id} className="mb-5 ">
            <h2 className="p-3 bg-gray-100 font-bold text-slate-900">
              <span className="text-orange-500 text-2xl">Q:</span> {qt.title}
            </h2>
            <p className="my-2 first-letter:text-2xl first-letter:text-orange-500">
              {qt.descrition}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
