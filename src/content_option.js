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
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Wordpress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },

  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/550/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "name@domain.com",
  YOUR_FONE: "(555)123-4567",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
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
  dataportfolio,
  worktimeline,
  services,
  introdata,
  contactConfig,
  socialprofiles,
  logotext,
};
