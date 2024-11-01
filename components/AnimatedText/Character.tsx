import React from 'react';

import clsx from 'clsx';
import { motion, MotionValue, useTransform } from 'framer-motion';

import styles from './Character.module.scss';

interface CharacterProps extends React.HTMLAttributes<HTMLSpanElement> {
  progress: MotionValue<number>;
  range: [number, number];
}

const Character = ({
  children,
  className,
  progress,
  range,
  ...props
}: CharacterProps) => {
  const opacity = useTransform<number, number>(progress, range, [0, 1]);

  return (
    <span {...props} className={clsx(styles.character, className)}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export { Character };
