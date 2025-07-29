import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" style={styles.contactSection}>
      <h2 style={styles.heading}>Get in Touch</h2>
      <p style={styles.paragraph}>
        I'm open to freelance work, collaborations, or full-time opportunities.
        Feel free to reach out if you think I can help with your next project.
      </p>
      <p style={styles.paragraph}>
        <a href="mailto:remofer98@gmail.com" style={styles.email}>remofer98@gmail.com</a>
      </p>
      <p style={styles.paragraph}>
        <a
          href="https://www.linkedin.com/in/remo-villarreal/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.linkedIn}
        >
          LinkedIn Profile
        </a>
      </p>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  contactSection: {
    padding: '4rem 2rem',
    textAlign: 'left',
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    fontWeight: 600,
  },
  paragraph: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  email: {
    color: '#0077cc',
    textDecoration: 'none',
    fontWeight: 500,
  },
  linkedIn: {
    color: '#0077cc',
    textDecoration: 'none',
    fontWeight: 500,
  },
};

export default ContactSection;
