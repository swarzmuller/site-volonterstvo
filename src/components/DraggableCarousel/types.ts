import { ILocale } from "@/src/types";

export interface ICards {
    image: string;
    color: string;
    title: string;
    subtitle: string;
    link: string;
}

export interface CarouselInfoProps {
    currentEl: number,
    children: React.ReactNode,
    direction: (value: string) => void;
    currentSlide: ICards;
    formatedNumber: number | string;
    formatedCardsNumber: number | string;
    locale: ILocale['locale']
}

export interface ProgressBarProps {
    progress: number;
    next: number
    setProgress: (progress: number) => void;
}