import cake from "../assets/img/cake.webp";
import foodFull from "../assets/img/food-full.webp";
import rickPage from "../assets/img/rick-page.webp";
import fituApp from "../assets/img/fitu.webp";

export type ProjectT = {
  imgUrl: string;
  title: string;
  desc: string;
  liveLink: string;
  codeLink: string;
  techStack: string[];
  rowReverse: boolean;
};

export default [
  {
    imgUrl: fituApp,
    title: "Fit U",
    desc: "Makes you able to have a personalized training and eating plan or have the opportunity to have your group of trainees and give them daily training and eating plans from the comfort of our house",
    liveLink: "https://final-henry-g6.netlify.app/",
    codeLink: "https://github.com/proyecto-final-2023/PF-G6",
    techStack: [
      "Next",
      "Zustand",
      "Express",
      "Tailwind",
      "Cloudinary",
      "Firebase-auth",
      "PostgreSQL",
      "Sequelize",
      "Typescript",
    ],
    rowReverse: false,
  },
  {
    imgUrl: foodFull,
    title: "Recipe Gallery",
    desc: "You can easily find the steps and ingredient list of the recipe you want to make you could also add your own recipe if it's not there already.",
    liveLink: "https://food-project-chi.vercel.app",
    codeLink: "https://github.com/Hachikoi-the-creator/food-project",
    techStack: [
      "React",
      "Redux",
      "React Router",
      "Styled Components",
      "PostgreSQL",
      "Express",
      "Sequelize",
    ],
    rowReverse: true,
  },
  {
    imgUrl: rickPage,
    title: "Rick & Morty Chara Explorer",
    desc: "Keep track of your favorite characters from the TV show Rick & Morty. add them to your favorites and know if they are still alive!",
    liveLink: "https://rick-morty-vite-react.vercel.app",
    codeLink: "https://github.com/Hachikoi-the-creator/Rick-Morty-vite-react",
    techStack: ["React", "Redux", "React Router", "Styled Components"],
    rowReverse: false,
  },
  {
    imgUrl: cake,
    title: "Pastry Shop - ES",
    desc: "Here you can take a peak at the kind of work you can expect from this Baker, was a good experience to work with Jquery since I never heard of it, who would have thought I'd make my own version of Jquery later on... The project was a good experience about do's and dont's in freelancing.",
    liveLink: "https://pro-por.netlify.app",
    codeLink: "https://github.com/Hachikoi-the-creator/new-client",
    techStack: ["JQuery", "SASS", "HTML", "JS"],
    rowReverse: true,
  },
];
