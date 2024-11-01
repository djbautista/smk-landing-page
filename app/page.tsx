import { ReactLenis } from 'lenis/react';

import getInitialComponents from '@/api/getInitialComponents';
import styles from '@/app/page.module.scss';
import { Block } from '@/components/Block';
import { Component } from '@/model/Component';

export default async function Home() {
  let initialComponents: Component[] = [];

  try {
    const { components } = await getInitialComponents();

    initialComponents = components;
  } catch (error) {
    console.error(error);
  }

  return (
    <ReactLenis root>
      <div className={styles.page}>
        <main className={styles.main}>
          {initialComponents.map((component, index) => (
            <Block key={index} component={component} />
          ))}
        </main>
      </div>
    </ReactLenis>
  );
}
