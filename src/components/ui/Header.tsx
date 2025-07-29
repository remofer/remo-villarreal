import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navLinks = (
    <>
      <a href="#home" style={styles.link} onClick={(e) => handleScroll(e, 'home')}>Home</a>
      <a href="#about-me" style={styles.link} onClick={(e) => handleScroll(e, 'about-me')}>About</a>
      <a href="#contact" style={styles.link} onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
      <a href="#code-in-action" style={styles.link} onClick={(e) => handleScroll(e, 'code-in-action')}>Code in Action</a>
    </>
  );

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Remo Villarreal</div>

      {!isMobile ? (
        <nav style={styles.navList}>{navLinks}</nav>
      ) : (
        <>
          <button onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburger}>
            ☰
          </button>
          {menuOpen && (
            <div
              ref={menuRef}
              style={{
                ...styles.mobileMenu,
                transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                style={styles.closeButton}
              >
                ✕
              </button>
              <div style={styles.mobileLinks}>{navLinks}</div>
            </div>
          )}
        </>
      )}
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    width: '100%',
    top: 0,
    zIndex: 12,
    color: 'white',
    fontFamily: "'Poppins', sans-serif",
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  navList: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    cursor: 'pointer',
    margin: '1rem 0',
    display: 'block',
  },
  hamburger: {
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    zIndex: 13,
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100vh',
    width: '60%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    zIndex: 13,
  },
  mobileLinks: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  closeButton: {
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    alignSelf: 'flex-end',
  },
};

export default Header;
