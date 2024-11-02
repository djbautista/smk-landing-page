import getInitialComponents from '@/api/getInitialComponents';
import { Block } from '@/components/Block';
import { Component } from '@/model/Component';

import styles from './page.module.scss';

export default async function Home() {
  let initialComponents: Component[] = [];

  try {
    const { components } = await getInitialComponents();

    initialComponents = components;
  } catch (error) {
    console.error(error);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {initialComponents.map((component, index) => (
          <Block key={index} component={component} />
        ))}
      </main>
    </div>
  );
}
