export const getQuizById = async (id) => {
  const res = await fetch(`testDB/quizs.json`);
  const quizes = await res.json();
  const quiz = await quizes.find((q) => q.id.toString() === id);
  return quiz;
};
