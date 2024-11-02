'use client';

import { useRef } from 'react';

import clsx from 'clsx';

import styles from './AnimatedText.module.scss';

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

  return (
    <blockquote
      {...props}
      ref={textRef}
      className={clsx(styles.text, className)}
    >
      {children}
    </blockquote>
  );
};

export { AnimatedText };
