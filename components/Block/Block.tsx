import { Component } from '@/model/Component';

export interface BlockProps {
  component: Component;
}

export default function Block({ component }: BlockProps) {
  const { __component } = component;

  switch (__component) {
    case 'text.block1':
      return <>text.block1</>;
    case 'text.block2':
      return <>text.block2</>;
    case 'text.block3':
      return <>text.block3</>;
    default:
      return null;
  }
}

export { Block };
