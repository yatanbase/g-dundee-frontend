import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>VoxView</h1>
        <p style={styles.subtitle}>Your Gateway to Subtitle Analysis & Visualization</p>
      </header>

      <main style={styles.main}>
        <section style={styles.intro}>
          <h2 style={styles.welcomeText}>Welcome to VoxView!</h2>
          <p style={styles.description}>
            Explore an innovative platform for analyzing and visualizing subtitle data. Dive deep into insights and make data-driven decisions.
          </p>
        </section>

        <section style={styles.cards}>
          <Link to="/subtitle-analysis" style={styles.link}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Subtitle Analysis</h3>
              <p style={styles.cardDescription}>Gain actionable insights from your subtitle data.</p>
            </div>
          </Link>
          <Link to="/stats" style={styles.link}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Data Visualization</h3>
              <p style={styles.cardDescription}>Visualize complex data through intuitive charts and graphs.</p>
            </div>
          </Link>
        </section>

        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Start Your Exploration!</h2>
          <Link to="/get-started" style={styles.ctaButton}>
            Get Started
          </Link>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 VoxView. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: "'Montserrat', sans-serif", // Modern font for clean look
    textAlign: 'center',
    backgroundColor: '#000', // Black background for modern feel
    color: '#fff', // White text for high contrast
  },
  header: {
    backgroundColor: '#1a1a1a', // Dark gray for header
    padding: '60px 20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: '4.5rem', // Larger title for prominence
    margin: '0',
    letterSpacing: '2px',
    color: '#00e676', // Bright green for title
  },
  subtitle: {
    fontSize: '1.8rem', // Slightly larger for subtitle
    margin: '10px 0',
    color: '#bbdefb', // Light blue for subtitle
  },
  main: {
    flex: 1,
    padding: '20px',
  },
  intro: {
    marginBottom: '40px',
  },
  welcomeText: {
    fontSize: '2.8rem', // Medium size for welcome text
    margin: '0',
    color: '#00e676',
  },
  description: {
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontSize: '1.1rem', // Smaller size for description
    color: '#ccc', // Light gray for description
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    padding: '20px',
  },
  link: {
    textDecoration: 'none',
  },
  card: {
    backgroundColor: '#ffffff', // White for card background
    borderRadius: '10px',
    padding: '30px',
    width: '300px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
    },
  },
  cardTitle: {
    fontSize: '1.6rem', // Slightly larger for card title
    marginBottom: '10px',
    color: '#00e676',
  },
  cardDescription: {
    fontSize: '1rem', // Smaller size for card description
    color: '#666',
  },
  ctaSection: {
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#1a1a1a', // Dark gray for CTA
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  ctaTitle: {
    fontSize: '2rem',
    margin: '0',
    color: '#00e676',
  },
  ctaButton: {
    display: 'inline-block',
    marginTop: '15px',
    padding: '15px 30px',
    fontSize: '1.2rem',
    backgroundColor: '#00e676', // Bright green for button
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s, transform 0.2s',
    '&:hover': {
      backgroundColor: '#00c853', // Darker green on hover
      transform: 'scale(1.05)',
    },
  },
  footer: {
    backgroundColor: '#1a1a1a', // Dark gray for footer
    color: 'white',
    padding: '20px',
    position: 'relative',
    bottom: '0',
    width: '100%',
  },
};

// Add keyframes for animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}`, styleSheet.cssRules.length);

export default Home;
