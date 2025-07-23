import Activism from "../assets/Activism.png";
import Covey from "../assets/Covey.jpg";
import Classification from "../assets/Classification.png";
import Predictor from "../assets/Predictor.png";

export const ProjectList = [
  {
    name: "Social Activism Platform - Rebutify",
    image: Activism,
    about: "I am leading the backend development in creating Rebutify, an open-source website for activists to collaboratively optimize responses to arguments against social movements, starting with veganism.",
    skills: "Python, Linux, Django, Typescript",
		socialActivismLink: "https://www.rebutify.org",
    devPostLink: null,
    gitHubLink: "https://github.com/TeddyHattenbach/Social-Activism-Platform",
  },
  {
    name: "Covey.Town Virtual Meeting Space",
    image: Covey,
    about: "I implemented a rock-paper-scissors game in Typescript with asynchronous communication and designed the frontend in React with a leaderboard displaying top 10 players.",
    skills: "Typescript, HTML, React.js, Socket.io",
    socialActivismLink: null,
    devPostLink: null,
    gitHubLink:
      "https://github.com/TeddyHattenbach/Covey.Town-rock-paper-scissors",
  },
  {
    name: "Intracerebral Brain Hemorrhage Classification",
    image: Classification,
    about: "I worked with four people to train a Convolutional Neural Network model for the image classification of brain hemorrhages and evaluate the performance of 7 CNN optimizers. We attained a testing accuracy score of 98%.",
    skills: "Python, TensorFlow, Keras, PIL, Jupyter Notebook",
    socialActivismLink: null,
    devPostLink: null,
    gitHubLink:
      "https://github.com/TeddyHattenbach/-Intracerebral-Brain-Hemorrhage-Classification",
  },
  {
    name: "ET Stock Predictor",
    image: Predictor,
    about: "I placed 3rd best out of 70 teams in HackBU 2021 by collaborating with three people on software that enabled users to enter stock values to predict an energy transfer stock market price.",
    skills: "Python, HTML, Keras, Flask, \nJupyter Notebook, Machine Learning",
    socialActivismLink: null,
    devPostLink: "https://devpost.com/software/et-stock-prediction",
    gitHubLink: "https://github.com/TeddyHattenbach/ET-Stock-Prediction",
  },
];
