import homeBanner from "./assets/images/home-banner.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const logotext = "Arthur";
const meta = {
  title: "Arthur Bertozzi",
  description:
    "I’m Arthur Bertozzi a software engineer based in Campinas/Brazil",
};

const introdata = {
  title: "I’m Arthur Bertozzi",
  animated: {
    first: "I love coding",
    second: "I code clean solutions",
    third: "I help you to solve your problems",
  },
  description:
    "I'm a software engineer / fullstack developer based in Campinas/Brazil",
  your_img_url: homeBanner,
};

const dataabout = {
  title: "a little bit about my self",
  aboutme:
    "A fullstack developer with skills in developing clean solutions. Some of my favorite tools are Python, React.js, Node.js, Google Cloud Platform, Shopify and Twilio.",
};
const worktimeline = [
  {
    jobtitle: "Software Developer",
    where: "Insiderstore",
    date: "2021-now",
  },
  {
    jobtitle: "Software Developer",
    where: "Greystone",
    date: "2020-2021",
  },
  {
    jobtitle: "Project Analyst",
    where: "Greystone",
    date: "2018-2020",
  },
];

const services = [
  {
    title: "Software Development",
    description:
      "Create software development solutions that are scalable, reliable, and secure.",
  },
  {
    title: "Automations - Local & Web",
    description: "Automate your business processes to save time and money.",
  },
];

const contactConfig = {
  YOUR_EMAIL: "arthur_ba@hotmail.com",
  // decidir se deixar telefone ou nao
  // YOUR_FONE: "+55 11 981087184",
  description: "Feel free to contact me for any work or suggestions",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_5lggnyp",
  YOUR_TEMPLATE_ID: "template_my9hj1q",
  YOUR_USER_ID: "BKg4LRKC9pY8l7PIl",
};

const socialprofiles = [
  {
    linkedin: {
      url: "https://www.linkedin.com/in/arthur-bertozzi/",
      icon: FaLinkedin,
    },
    github: { url: "https://github.com/ArthurBertozzi", icon: FaGithub },
  },
];

export {
  meta,
  dataabout,
  worktimeline,
  services,
  introdata,
  contactConfig,
  socialprofiles,
  logotext,
};
