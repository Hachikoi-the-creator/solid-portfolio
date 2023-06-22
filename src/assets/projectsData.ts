// Fit U
import fitu300 from "../assets/img/fitu/fitu320.webp";
import fitu600 from "../assets/img/fitu/fitu600.webp";
import fitu1300 from "../assets/img/fitu/fitu1300.webp";

// Cake
import cake300 from "../assets/img/cake/cake300.webp";
import cake600 from "../assets/img/cake/cake600.webp";
import cake1300 from "../assets/img/cake/cake1200.webp";

// Food Full stack
import food300 from "../assets/img/food/food300.png";
import food600 from "../assets/img/food/food600.png";
import food1300 from "../assets/img/food/food1200.png";

// rick & morty search
import rick300 from "../assets/img/rick/rick300.webp";
import rick600 from "../assets/img/rick/rick600.webp";
import rick1300 from "../assets/img/rick/rick1200.webp";

// T to avoid name class with component name
export type ProjectT = {
  imgSrcSet: { 300: string; 600: string; 1300: string };
  title: string;
  desc: string;
  liveLink: string;
  codeLink: string;
  techStack: string[];
  rowReverse: boolean;
};

const projectsData: ProjectT[] = [
  {
    imgSrcSet: { "300": fitu300, "600": fitu600, "1300": fitu1300 },
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
    imgSrcSet: { "300": food300, "600": food600, "1300": food1300 },
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
    imgSrcSet: { "300": rick300, "600": rick600, "1300": rick1300 },
    title: "Rick & Morty Chara Explorefitur",
    desc: "Keep track of your favorite characters from the TV show Rick & Morty. add them to your favorites and know if they are still alive!",
    liveLink: "https://rick-morty-vite-react.vercel.app",
    codeLink: "https://github.com/Hachikoi-the-creator/Rick-Morty-vite-react",
    techStack: ["React", "Redux", "React Router", "Styled Components"],
    rowReverse: false,
  },
  {
    imgSrcSet: { "300": cake300, "600": cake600, "1300": cake1300 },
    title: "Pastry Shop - ES",
    desc: "Here you can take a peak at the kind of work you can expect from this Baker, was a good experience to work with Jquery since I never heard of it, who would have thought I'd make my own version of Jquery later on... The project was a good experience about do's and dont's in freelancing.",
    liveLink: "https://pro-por.netlify.app",
    codeLink: "https://github.com/Hachikoi-the-creator/new-client",
    techStack: ["JQuery", "SASS", "HTML", "JS"],
    rowReverse: true,
  },
];

export default projectsData;
