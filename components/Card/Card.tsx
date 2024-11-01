import styles from './Card.module.scss';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children, ...props }: CardProps) => {
  return (
    <div {...props} className={styles.card}>
      {children}
    </div>
  );
};

export { Card };
