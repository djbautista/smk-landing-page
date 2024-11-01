'use client';

import { useRef } from 'react';

import clsx from 'clsx';
import { useScroll } from 'framer-motion';

import styles from './Text.module.scss';
import { Word } from './Word';

interface AnimatedTextProps extends React.HTMLAttributes<HTMLQuoteElement> {
  target?: React.RefObject<HTMLElement>;
}

const AnimatedText = ({
  children,
  className,
  target,
  ...props
}: AnimatedTextProps) => {
  if (!children || typeof children !== 'string') {
    throw new Error('AnimatedText component must have a string as children');
  }

  const textRef = useRef<HTMLQuoteElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = children.split(' ');

  return (
    <blockquote
      {...props}
      ref={textRef}
      className={clsx(styles.text, className)}
    >
      {words.map((word, index) => {
        const [start, end] = [index / words.length, (index + 1) / words.length];

        return (
          <Word
            key={`word_${index}`}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </blockquote>
  );
};

export { AnimatedText };
