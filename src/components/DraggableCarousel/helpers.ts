import RedHart from "@/public/images/slider/red.png";
import Tech from "@/public/images/slider/technology.png";
import Pets from "@/public/images/slider/pets.png";
import Foodbank from "@/public/images/slider/foodbank.png";
import Hygienebank from "@/public/images/slider/hygienebank.png";
import { ICards } from "./types";

export const cards: ICards[] = [
  {
    image: Pets.src,
    color: "#FFE5FD",
    title: "slider.titlePets",
    subtitle: "slider.subTitlePets",
    link: "/about-us",
  },
  {
    image: Hygienebank.src,
    color: "#BDE8FA",
    title: "slider.titleHygiene",
    subtitle: "slider.subTitleHygiene",
    link: "/about-us",
  },
  {
    image: Foodbank.src,
    color: "#F6E8CD",
    title: "slider.titleFood",
    subtitle: "slider.subTitleFood",
    link: "/about-us",
  },
  {
    image: Tech.src,
    color: "#F6E8CD",
    title: "slider.titleTech",
    subtitle: "slider.subTitleTech",
    link: "/about-us",
  },
  {
    image: RedHart.src,
    color: "#BDE8FA",
    title: "slider.titleRed",
    subtitle: "slider.subTitleRed",
    link: "/about-us",
  },
];

export const CARDS_LENGHT = cards.length - 1;
export const NEXT_DIRECTION = "next";
export const PREV_DIRECTION = "prev";
export const AUTOPLAY_TIMER = 5000;
export const POGRESS_TIMER = 40;

// Helpers to manage the spring animation
export const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 10,
  delay: i * 100,
});

export const from = () => ({ x: 0, rot: 0, scale: 1, y: 0 });
export const trans = (r: number, s: number) => `rotateZ(${r}deg) scale(${s})`;

export const getCurrentSlide = (el: number) => {
  const currentSlide = el === -1 ? cards[CARDS_LENGHT] : cards[el];
  const currentNumber = (cards.length - el).toString();
  const formatedNumber =
    currentNumber.length > 1 ? currentNumber : `0${currentNumber}`;
  const formatedCardsNumber =
    cards.length.toString().length > 1 ? cards.length : `0${cards.length}`;

  return { currentSlide, formatedNumber, formatedCardsNumber };
};
