import React from 'react';

import clsx from 'clsx';
import { motion, MotionValue, useTransform } from 'framer-motion';

import styles from './Word.module.scss';

interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
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
  const opacity = useTransform<number, number>(progress, range, [0, 1]);

  return (
    <span {...props} className={clsx(styles.word, className)}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export { Word };
