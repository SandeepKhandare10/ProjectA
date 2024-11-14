import React from 'react';

function Navbar({name}) {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    navLinks: {
      display: 'flex',
      gap: '15px',
      listStyleType: 'none',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '18px',
      cursor: 'pointer',
    },
    navLinkHover: {
      color: '#ddd',
    },
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>{name}</div>
      <ul style={styles.navLinks}>
        <li>
          <a href="#home" style={styles.navLink}>Home</a>
        </li>
        <li>
          <a href="#about" style={styles.navLink}>About</a>
        </li>
        <li>
          <a href="#services" style={styles.navLink} >Services</a>
        </li>
        <li>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
