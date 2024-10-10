"use client";
import { useEffect, useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { Box } from "@mui/material";
import { ILocale } from "@/src/types";
import { ProgressBar, CarouselInfo } from "@/src/components";
import {
  AUTOPLAY_TIMER,
  CARDS_LENGHT,
  NEXT_DIRECTION,
  PREV_DIRECTION,
  cards,
  from,
  getCurrentSlide,
  to,
  trans,
} from "./helpers";
import * as S from "./styles";

const DraggableCarousel = ({ locale }: ILocale) => {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [next, setNext] = useState(CARDS_LENGHT); // Track the current card index
  const [prev, setPrev] = useState(CARDS_LENGHT); // Track the current card index
  const [progress, setProgress] = useState(0);
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(),
  })); // Create springs for each card

  const { currentSlide, formatedNumber, formatedCardsNumber } =
    getCurrentSlide(next);

  const switchSlides = (x: number, el: number) => {
    gone.clear();
    api.start((i) => {
      if (i !== el) return;

      return {
        x: x,
        rot: -10 + Math.random() * 10,
        scale: 1,
        delay: undefined,
        config: { tension: 300, friction: 50 },
      };
    });
  };

  const buttonsDirection = (value: string) => {
    switch (value) {
      case NEXT_DIRECTION:
        switchSlides(200 + window.innerWidth, next);
        setNext((prev) => prev - 1);
        setPrev(next);
        break;
      case PREV_DIRECTION:
        switchSlides(0, prev);
        setNext(prev);
        setPrev((prev) => prev + 1);
        break;
    }
  };

  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.2;
      if (!active && trigger) gone.add(index);

      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
        const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0);
        const scale = active ? 1.1 : 1;

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });

      if (index === 0 || active) {
        setNext(index);
        setPrev(index + 1);
      }

      if (gone.has(index)) {
        setNext(index - 1);
        setPrev(index);
      }

      if ((!active && gone.size === cards.length) || gone.has(0)) {
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
      }
    }
  );

  useEffect(() => {
    gone.clear();
    api.start((i) => to(i));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setProgress(0);
    if (next < 0) {
      gone.clear();
      api.start((i) => to(i));
      setNext(CARDS_LENGHT);
      setPrev(CARDS_LENGHT);
    }

    if (prev >= cards.length) {
      setPrev(CARDS_LENGHT);
    }

    const autoPlay = setTimeout(
      () => buttonsDirection(NEXT_DIRECTION),
      AUTOPLAY_TIMER
    );

    return () => {
      clearTimeout(autoPlay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next]);

  return (
    <Box sx={{ ...S.Container }}>
      <Box sx={{ ...S.Background(currentSlide.color) }}></Box>
      <Box sx={{ ...S.Carousel }}>
        <CarouselInfo
          currentEl={next}
          direction={(value) => buttonsDirection(value)}
          currentSlide={currentSlide}
          formatedNumber={formatedNumber}
          formatedCardsNumber={formatedCardsNumber}
          locale={locale}
        >
          <ProgressBar
            progress={progress}
            next={next}
            setProgress={setProgress}
          />
        </CarouselInfo>
        <Box sx={{ ...S.Cards }}>
          {props.map(({ x, y, rot, scale }, i) => (
            <animated.div className="deck" key={i} style={{ x, y }}>
              <animated.div
                {...bind(i)}
                style={{
                  transform:
                    next === i
                      ? "rotateZ(0deg)"
                      : interpolate([rot, scale], trans),
                  backgroundImage: `url(${cards[i].image})`,
                  transition: "0.3s",
                }}
              />
            </animated.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DraggableCarousel;
