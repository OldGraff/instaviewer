import React, { Suspense, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Facts } from './facts';
import cat from './images/business-cat.jpg';
import styles from './styles.scss';

export const AppRoot = (): ReactElement => (
  <BrowserRouter>
    <Suspense fallback={<p>Please wait...</p>}>
      <div className={styles.root}>Hello! I&apos;m react application!</div>
      <img src={cat} width={320} height={300} alt="cool cat" />
      <Facts />
    </Suspense>
  </BrowserRouter>
);
