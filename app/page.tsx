import getInitialComponents from '@/api/getInitialComponents';
import styles from '@/app/page.module.scss';

export default async function Home() {
  try {
    const { components: initialComponents } = await getInitialComponents();
    console.log({ initialComponents });
  } catch (error) {
    console.error(error);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
