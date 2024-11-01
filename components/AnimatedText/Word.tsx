import React from 'react';

import clsx from 'clsx';
import { MotionValue } from 'framer-motion';

import { Character } from './Character';
import styles from './Word.module.scss';

interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = ({
  children,
  className,
  progress,
  range,
  ...props
}: WordProps) => {
  const characters = children.split('');
  const [wordStart, wordEnd] = range;
  const amount = wordEnd - wordStart;
  const step = amount / characters.length;
  return (
    <span {...props} className={clsx(styles.word, className)}>
      {characters.map((character, index) => {
        const start = wordStart + step * index;
        const end = wordStart + step * (index + 1);
        return (
          <Character key={index} progress={progress} range={[start, end]}>
            {character}
          </Character>
        );
      })}
    </span>
  );
};

export { Word };
