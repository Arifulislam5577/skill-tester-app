import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center">
      <h1 className="lg:text-8xl tracking-widest text-2xl font-bold text-red-500 animate-bounce">
        404
      </h1>
      <h1 className="lg:text-4xl text-2xl font-bold text-gray-400 mt-2 uppercase">
        NOT FOUND
      </h1>
      <Link
        to="/"
        className="mt-3 text-gray-600 capitalize text-xs hover:underline"
      >
        back home
      </Link>
    </section>
  );
};

export default NotFound;
