import React from 'react';
import { css, keyframes } from '@emotion/css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React', logo: 'react.png' },
  { name: 'JavaScript', logo: 'javascript.png' },
  { name: 'TailwindCSS', logo: 'tailwindcss.png' },
  { name: 'Shopify', logo: 'shopify.png' },
  { name: 'Remix', logo: 'remix.png' },
  { name: 'GraphQL', logo: 'graphql.webp' },
  { name: 'Git', logo: 'git.png' },
  { name: 'GitHub', logo: 'github.webp' },
];

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SkillsCarousel: React.FC = () => {
  const repeatedSkills = [...skills, ...skills];

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselInner}>
        {repeatedSkills.map((skill, index) => (
          <AnimatedSkill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const AnimatedSkill: React.FC<{ skill: { name: string; logo: string } }> = ({ skill }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      className={styles.skillItem}
      initial={{ opacity: 0, filter: 'blur(6px)', y: 30 }}
      animate={inView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(6px)', y: 30 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <img
        src={process.env.PUBLIC_URL + '/assets/logos/' + skill.logo}
        alt={skill.name}
        className={styles.skillLogo}
        onError={() => console.warn(`Image not found: ${skill.logo}`)}
      />
      <span className={styles.skillName}>{skill.name}</span>
    </motion.div>
  );
};

const styles = {
  carouselWrapper: css`
    overflow: hidden; /* ocultamos el scroll visible */
    padding: 1.5rem 1rem;
    margin-top: 2rem;
  `,
  carouselInner: css`
    display: flex;
    gap: 1.5rem;
    min-width: max-content;
    animation: ${scroll} 20s linear infinite;
  `,
  skillItem: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 110px;
  `,
  skillLogo: css`
    height: 64px;
    width: 64px;
    object-fit: contain;
    filter: grayscale(100%);
    transition: filter 0.3s ease, transform 0.3s ease;  /* agregamos transition para transform */
    &:hover {
      filter: grayscale(0%);
      transform: scale(1.1);  /* zoom suave */
    }
  `,
  skillName: css`
    margin-top: 0.4rem;
    font-size: 0.9rem;
    color: white;
    text-align: center;
  `,
};

export default SkillsCarousel;
