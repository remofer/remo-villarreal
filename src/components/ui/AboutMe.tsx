import React from 'react';
import { css } from '@emotion/css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillsCarousel from './SkillsCarousel';
import CodeInActionSection from './CodeInActionSection';
import ContactSection from './Contact';
import Footer from './Footer';

export const AboutMe: React.VFC = () => {
  const [headingRef, headingInView] = useInView({ triggerOnce: false, threshold: 0.3 });

  const paragraphs = [
    `I'm Remo Villarreal, a frontend developer focused on performance, clean architecture, and meaningful user experiences.`,
    `I specialize in building high-conversion Shopify storefronts and custom web applications using React, TypeScript, and Tailwind CSS. I'm also experienced working with the Shopify ecosystem: Liquid, Polaris, and Storefront APIs.`,
    `I'm self driven, detail oriented, and always exploring new tools and ideas to push my work further, whether independently or in collaboration with a team.`,
  ];

  return (
    <>
      <div id="about-me" className={styles.container}>
        <motion.h2
          ref={headingRef}
          className={styles.heading}
          initial={false}
          animate={
            headingInView
              ? { opacity: 1, filter: 'blur(0px)', y: 0 }
              : { opacity: 0, filter: 'blur(6px)', y: 30 }
          }
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          About Me
        </motion.h2>

        <div className={styles.contentWrapper}>
          <div className={styles.textBlock}>
            {paragraphs.map((text, i) => (
              <AnimatedParagraph key={i} text={text} delay={0.2 * (i + 1)} />
            ))}
          </div>
        </div>

        <SkillsCarousel />
        <CodeInActionSection />
        <ContactSection />
        <Footer/>
      </div>
    </>
  );
};

const AnimatedParagraph: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.p
      ref={ref}
      className={styles.text}
      initial={false}
      animate={
        inView
          ? { opacity: 1, filter: 'blur(0px)', y: 0 }
          : { opacity: 0, filter: 'blur(6px)', y: 30 }
      }
      transition={{ duration: 1.2, ease: 'easeOut', delay }}
    >
      {text}
    </motion.p>
  );
};

const styles = {
  container: css`
    max-width: 1000px;
    margin: 0 auto;
    padding: 4rem 2rem;
    color: black;
    font-family: 'Poppins', sans-serif;
    position: relative;
    z-index: 2;
  `,
  heading: css`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: 700;
    text-align: center;
  `,
  contentWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `,
  textBlock: css`
    max-width: 600px;
  `,
  text: css`
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
    text-align: left;
  `,
};
