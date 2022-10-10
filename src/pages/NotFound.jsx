import React from "react";

const NotFound = () => {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center">
      <h1 className="lg:text-6xl text-2xl font-bold text-red-500">404</h1>
      <h1 className="lg:text-4xl text-2xl font-bold text-gray-400 mt-2 uppercase">
        NOT FOUND
      </h1>
    </section>
  );
};

export default NotFound;
