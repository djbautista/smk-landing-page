'use client';

import React from 'react';

import { AnimatedText } from '@/components/AnimatedText';
import { Block3 as Block3Props } from '@/model/Blocks';

import styles from './Block3.module.scss';

const Block3: React.FC<Block3Props> = ({ quote, name, title }) => {
  const blockRef = React.useRef<HTMLDivElement>(null);
  return (
    <div ref={blockRef} className={styles.block3}>
      <AnimatedText target={blockRef}>{quote}</AnimatedText>
      <p>{name}</p>
      <p>{title}</p>
    </div>
  );
};

export { Block3 };
