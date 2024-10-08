"use client"
import { useEffect, useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { Box, ButtonBase, Typography } from '@mui/material'
import ArrowLeft from '@/public/images/slider/arrow-left.png'
import ArrowRight from '@/public/images/slider/arrow-right.png'
import { AUTOPLAY_TIMER, CARDS_LENGHT, NEXT_DIRECTION, POGRESS_TIMER, PREV_DIRECTION, cards, from, getCurrentSlide, to, trans } from './helpers'

import styles from './styles.module.scss'

const DraggableCarousel = () => {
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [next, setNext] = useState(CARDS_LENGHT) // Track the current card index
    const [prev, setPrev] = useState(CARDS_LENGHT) // Track the current card index
    const [progress, setProgress] = useState(0);
    const [props, api] = useSprings(cards.length, i => ({
        ...to(i),
        from: from(),
    })) // Create springs for each card

    const { currentSlide, formatedNumber, formatedCardsNumber } = getCurrentSlide(next)

    const switchSlides = (x: number, el: number) => {
        gone.clear()
        api.start(i => {
            if (i !== el) return

            return {
                x: x,
                rot: -10 + Math.random() * 10,
                scale: 1,
                delay: undefined,
                config: { tension: 300, friction: 50 },
            }
        })
    }

    const buttonsDirection = (value: string) => {
        switch (value) {
            case NEXT_DIRECTION:
                switchSlides(200 + window.innerWidth, next)
                setNext(prev => prev - 1)
                setPrev(next)
                break;
            case PREV_DIRECTION:
                switchSlides(0, prev)
                setNext(prev)
                setPrev(prev => prev + 1)
                break;
        }
    }

    const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
        const trigger = vx > 0.2
        if (!active && trigger) gone.add(index)

        api.start(i => {
            if (index !== i) return
            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0
            const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0)
            const scale = active ? 1.1 : 1

            return {
                x,
                rot,
                scale,
                delay: undefined,
                config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
            }

        })

        if (index === 0 || active) {
            setNext(index)
            setPrev(index + 1)
        }

        if (gone.has(index)) {
            setNext(index - 1)
            setPrev(index)
        }

        if (!active && gone.size === cards.length || gone.has(0)) {
            setTimeout(() => {
                gone.clear()
                api.start(i => to(i))
            }, 600)
        }
    })

    useEffect(() => {
        gone.clear()
        api.start(i => to(i))
    }, [])

    useEffect(() => {
        setProgress(0)
        if (next < 0) {
            gone.clear()
            api.start(i => to(i))
            setNext(CARDS_LENGHT)
            setPrev(CARDS_LENGHT)
        }

        if (prev >= cards.length) {
            setPrev(CARDS_LENGHT)
        }

        const autoPlay = setTimeout(() => buttonsDirection(NEXT_DIRECTION), AUTOPLAY_TIMER)

        return () => {
            clearTimeout(autoPlay)
        }

    }, [next])

    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => {
                setProgress(progress + 1);
            }, POGRESS_TIMER);
            return () => clearTimeout(timer);
        }
    }, [progress, next]);

    return (
        <div className={styles.container}>
            <Box className={styles.infoWrapper}>
                <div className={styles.background} style={{ background: currentSlide.color }}></div>
                <Typography variant='h4' style={{ position: 'relative' }}>
                    <Typography variant='body2' style={{ position: 'relative' }}>
                        {currentSlide.subtitle}
                    </Typography>
                    {currentSlide.title}
                </Typography>
                <div className={styles.controls}>
                    <ButtonBase className={styles.button} disabled={next === CARDS_LENGHT} onClick={() => buttonsDirection(PREV_DIRECTION)}>
                        <img src={ArrowLeft.src} alt="Arrow Left" />
                    </ButtonBase >
                    <div className={styles.progressWrapper}>
                        <Typography variant='body2'>{formatedNumber}</Typography>
                        <div className={styles.progress}>
                            <span style={{ width: `${progress}%` }}></span>
                        </div>
                        <Typography variant='body2'>{formatedCardsNumber}</Typography>
                    </div>
                    <ButtonBase className={styles.button} onClick={() => buttonsDirection(NEXT_DIRECTION)}>
                        <img src={ArrowRight.src} alt="Arrow Right" />
                    </ButtonBase>
                </div>
            </Box>

            <div className={styles.cards}>
                {props.map(({ x, y, rot, scale }, i) => (
                    <animated.div className={styles.deck} key={i} style={{ x, y }}>
                        <animated.div
                            {...bind(i)}
                            style={{
                                transform: next === i ? 'rotateZ(0deg)' : interpolate([rot, scale], trans),
                                backgroundImage: `url(${cards[i].image})`,
                                transition: '0.3s'
                            }}
                        />
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

export default DraggableCarousel;
