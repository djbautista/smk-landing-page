'use client';

import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Block3 as Block3Props } from '@/model/Blocks';

import styles from './Block3.module.scss';

const Block3: React.FC<Block3Props> = ({ quote, name, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!textRef.current) return;
    if (!containerRef.current) return;

    const words = textRef.current.querySelectorAll('span');

    gsap.fromTo(
      words,
      { opacity: 0.35 },
      {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: true,
          pin: true,
          markers: true,
        },
      },
    );

    // Clean up on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const wordArray = quote
    .split(' ')
    .map((word, index) => <span key={index}>{word}&nbsp;</span>);

  return (
    <>
      <div ref={containerRef} className={styles.block3}>
        <div ref={textRef} className={styles.textBlock}>
          {wordArray}
        </div>
        <p>{name}</p>
        <p>{title}</p>
      </div>
      <div className={styles.background} />
    </>
  );
};

export { Block3 };
