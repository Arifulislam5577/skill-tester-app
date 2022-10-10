import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Quizs from "../components/Quizs";

const Home = () => {
  const { data } = useLoaderData();

  return (
    <section className="py-5">
      <Header />
      <Quizs data={data} />
    </section>
  );
};

export default Home;
