import { Info, Report, Phone, AboutUs } from "@/public";

export const menuItems = [
  {
    id: 1,
    menuItem: "Про нас",
    image: AboutUs.src,
    subMenuItems: [
      {
        icon: Info.src,
        linkText: "Про фонд",
        link: "/about-us",
      },
      {
        icon: Report.src,
        linkText: "Звітність",
        link: "/about-us",
      },
    ],
  },
  {
    id: 2,
    menuItem: "Проєкти",
    image: AboutUs.src,
    subMenuItems: [
      {
        icon: Phone.src,
        linkText: "Технологічна лабораторія",
        link: "/about-us",
      },
      {
        icon: Info.src,
        linkText: "Банк їжі для людей",
        link: "/about-us",
      },
      {
        icon: Info.src,
        linkText: "Банк їжі для тваринок",
        link: "/about-us",
      },
      {
        icon: Info.src,
        linkText: "Банк гігієни",
        link: "/about-us",
      },
    ],
  },
  {
    id: 3,
    menuItem: "Долучитись до Нас",
    image: AboutUs.src,
    subMenuItems: [
      {
        icon: Info.src,
        linkText: "Некомерційні організації",
        link: "/about-us",
      },
      {
        icon: Info.src,
        linkText: "Рітейл",
        link: "/about-us",
      },
      {
        icon: Info.src,
        linkText: "Бізнесу",
        link: "/about-us",
      },
      {
        icon: Info.src,
        linkText: "Волонтери",
        link: "/about-us",
      },
    ],
  },
  {
    id: 4,
    menuItem: "Контакти",
    link: "/about-us",
  },
];
