import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { TCanvas } from './three/TCanvas';
import { AboutMe } from './ui/AboutMe';
import IntroOverlay from './IntroOverlay';


export const App: VFC = () => {
  return (
    <div className={styles.container}>
      <IntroOverlay />
      <div className={styles.hero}>
        <TCanvas />
      </div>
      <AboutMe />
    </div>
  );
};

const styles = {
  container: css`
    width: 100%;
    overflow-x: hidden;
  `,
  hero: css`
    width: 100%;
    height: 100vh;
    position: relative;
  `,
};
