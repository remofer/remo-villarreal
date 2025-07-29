import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          @media (max-width: 500px) {
            .footer-navList {
              flex-direction: column;
              gap: 1rem;
            }
          }
        `}
      </style>

      <footer style={styles.footer}>
        <div style={styles.wrapper}>
          <div style={styles.name}>Remo Villarreal</div>
        </div>
        <div style={styles.fullDivider} />
        <div style={styles.wrapper}>
          <ul className="footer-navList" style={styles.navList}>
            <li><a href="#home" style={styles.link}>Home</a></li>
            <li><a href="#about-me" style={styles.link}>About</a></li>
            <li><a href="#contact" style={styles.link}>Contact</a></li>
            <li><a href="#code-in-action" style={styles.link}>Code in Action</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#f5f5f5',
    paddingTop: '2rem',
    borderRadius: '12px',
    paddingBottom: '3rem',
  },
  wrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '2.25rem',
    marginBottom: '1rem',
  },
  fullDivider: {
    height: '1px',
    margin: '0 2rem',
    padding: '0 2rem',
    backgroundColor: 'black',
    marginBottom: '1.5rem',
  },
  navList: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
  },
};

export default Footer;
