// Block2.tsx

import React from 'react';
import Image from 'next/image';

import { Card } from '@/components/Card';
import { Block2 as Block2Props } from '@/model/Blocks';

import styles from './Block2.module.scss';

const Block2: React.FC<Block2Props> = ({ title, text, background }) => {
  return (
    <div
      className={styles.block2}
      style={{ backgroundImage: `url(${background.url})` }}
    >
      <Card>
        <h1>{title}</h1>
        <p>{text}</p>
      </Card>
      {background.mime.startsWith('video/') ? (
        <video src={background.url} controls />
      ) : (
        <Image src={background.url} alt={title} />
      )}
    </div>
  );
};

export { Block2 };
