import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useLoaderData } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Quiz Question Chart",
    },
  },
};

const Statistics = () => {
  const { data: quizes } = useLoaderData();
  const data = {
    labels: [...quizes.map((qt) => qt.name)],
    datasets: [
      {
        label: "Total Question",
        data: quizes.map((qt) => qt.total),
        backgroundColor: "#F95426",
      },
    ],
  };
  return (
    <section className="py-5">
      <div className="container lg:w-3/4 mx-auto w-full">
        <Bar options={options} data={data} />
      </div>
    </section>
  );
};

export default Statistics;
