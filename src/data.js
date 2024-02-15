import tour1 from "./assets/images/tour-1.jpeg";
import tour2 from "./assets/images/tour-2.jpeg";
import tour3 from "./assets/images/tour-3.jpeg";
import tour4 from "./assets/images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 1, href: "#about", text: "About" },
  { id: 1, href: "#services", text: "Services" },
  { id: 1, href: "#tours", text: "Tours" },
];

export const socialLinks = [
  { id: 1, href: "https://facebook.com", icon: "fab fa-facebook" },
  { id: 1, href: "https://twitter.com", icon: "fab fa-twitter" },
  { id: 1, href: "https://squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: "6 days",
    price: "$2100",
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: "11 days",
    price: "$1400",
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: "8 days",
    price: "$5000",
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    duration: "20 days",
    price: "$3300",
  },
];