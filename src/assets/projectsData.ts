import cake from "../assets/img/cake.webp";
import foodFull from "../assets/img/food-full.webp";
import rickPage from "../assets/img/rick-page.webp";
// import street from "../assets/img/street.jpg";
// import thumb from "../assets/img/thumb.png";
// import workingOn from "../assets/img/working-on.jpg";

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
    imgUrl: cake,
    title: "Pastry Shop - ES",
    desc: "I was asked to make a simple site to showcase a couple of cakes",
    liveLink: "https://pro-por.netlify.app",
    codeLink: "https://github.com/Hachikoi-the-creator/new-client",
    techStack: ["JQuery", "SASS", "HTML", "JS"],
    rowReverse: true,
  },
  {
    imgUrl: rickPage,
    title: "Rick & Morty Chara Explorer",
    desc: "Keep track of your favourite chracters from the TV show, Rick & morty, add them to your favourties and be able to know if they are still alive!",
    liveLink: "https://rick-morty-vite-react.vercel.app",
    codeLink: "https://github.com/Hachikoi-the-creator/Rick-Morty-vite-react",
    techStack: ["React", "Redux", "React Router", "Styled Components"],
    rowReverse: false,
  },
  {
    imgUrl: foodFull,
    title: "Food Recipes App",
    desc: "Easily find the steps and ingredients list of the recipe you want to make, you could also add your own recipe if you find it's not there already :D",
    liveLink: "https://food-project-chi.vercel.app",
    codeLink: "https://github.com/Hachikoi-the-creator/food-project",
    techStack: [
      "React",
      "Redux",
      "React Router",
      "Styled Components",
      "PostgrSQL",
      "Sequelize",
    ],
    rowReverse: true,
  },
];
