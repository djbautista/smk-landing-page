import React from 'react';

import { AnimatedText } from '@/components/AnimatedText';
import { Block3 as Block3Props } from '@/model/Blocks';

import styles from './Block3.module.scss';

const Block3: React.FC<Block3Props> = ({ quote, name, title }) => {
  return (
    <div className={styles.block3}>
      <AnimatedText className={styles.text}>{quote}</AnimatedText>
      <p>{name}</p>
      <p>{title}</p>
    </div>
  );
};

export { Block3 };
