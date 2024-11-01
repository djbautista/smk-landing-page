// Block3.tsx

import React from 'react';

import { Block3 as Block3Props } from '@/model/Blocks';

import styles from './Block3.module.scss';

const Block3: React.FC<Block3Props> = ({ quote, name, title }) => {
  return (
    <div className={styles.block3}>
      <blockquote>{quote}</blockquote>
      <p>{name}</p>
      <p>{title}</p>
    </div>
  );
};

export { Block3 };
