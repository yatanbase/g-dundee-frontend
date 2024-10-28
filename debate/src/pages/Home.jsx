import React from 'react';
import { Link } from 'react-router-dom';
import Img from './VoxView.png';
import CEOImage from './gg.JPG';
import Data3d from './data-visualization.jpg'
const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img style={styles.logo} src={Img} alt="VoxView Logo" />
        <p style={styles.subtitle}>Your Gateway to Subtitle Analysis & Visualization</p>
      </header>

      <main style={styles.main}>
        {/* Welcome Section with Animated Background */}
        <section style={styles.intro}>
          <h2 style={styles.welcomeText}>Welcome to VoxView!</h2>
          <p style={styles.description}>
            VoxView is a cutting-edge platform for analyzing subtitle data with advanced visualizations. Dive into data insights, trends, and visual interpretations, tailored to assist in making impactful, data-driven decisions.
          </p>
          {/* Background animation layer */}
          <div style={styles.backgroundAnimation}></div>
        </section>

        {/* 3D Animation Section */}
        <section style={styles.animationSection}>
          <h2 style={styles.animationTitle}>Explore Our 3D Data Visualizations</h2>
          <div style={styles.animationPlaceholder}>
            <img src={Data3d} alt="" style={{width:'100%',height:'auto'r}} />
            {/* Embed 3D animation component here */}
           
          </div>
        </section>

        {/* Cards Section with Different Chart Types */}
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
              <p style={styles.cardDescription}>Explore a variety of data charts: Bar, Pie, Trending, Wave, and Candlestick.</p>
            </div>
          </Link>
        </section>

        {/* CEO Section with Special Description */}
        <section style={styles.ceoSection}>
          <h2 style={styles.ceoTitle}>Meet Our CEO</h2>
          <img src={CEOImage} alt="Gaurav Sharma" style={styles.ceoImage} />
          <p style={styles.ceoDescription}>
            Gaurav Sharma, the founder of VoxView, is a specialist in Computer Science and Artificial Intelligence. He honed his expertise at the University of Dundee in Scotland, excelling in AI, NLP, and data visualization. As a MERN stack developer and full-stack developer, he brings a wealth of experience and passion for technology and data-driven solutions. Gaurav's dedication to innovation has transformed VoxView into a hub for modern data analysis and visualization.
          </p>
          <p style={styles.ceoHobbies}>
            Outside of tech, Gaurav's interests are wide-ranging: he's an athlete, poet, gym enthusiast, and avid traveler, often found on the cricket field, volleyball court, or table tennis table. His commitment to fitness and creativity inspires his approach to life and work.
          </p>
        </section>

        {/* Call to Action with Chart Types */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Start Your Exploration of Advanced Visualizations!</h2>
          <p style={styles.ctaDescription}>
            Discover different types of charts designed to bring your data to life:
            Bar, Pie, Trending, Wave, and Candlestick charts. Transform complex data into clear, actionable insights through VoxView’s powerful, intuitive visualizations.
          </p>
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
    fontFamily: "'Montserrat', sans-serif",
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#1a1a1a',
    padding: '60px 20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  },
  logo: {
    height: '200px',
    width: 'auto',
  },
  subtitle: {
    fontSize: '1.8rem',
    margin: '10px 0',
    color: '#bbdefb',
  },
  main: {
    flex: 1,
    padding: '20px',
    position: 'relative',
    zIndex: 1,
  },
  intro: {
    marginBottom: '40px',
    position: 'relative',
    color: '#00e676',
  },
  welcomeText: {
    fontSize: '3rem',
    margin: '0',
  },
  description: {
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontSize: '1.2rem',
    color: '#ccc',
  },
  backgroundAnimation: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'radial-gradient(circle, rgba(0, 230, 118, 0.15), transparent)',
    animation: 'pulse 10s infinite alternate',
  },
  animationSection: {
    margin: '40px 0',
    padding: '20px',
    backgroundColor: '#1a1a1a',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  animationTitle: {
    fontSize: '2rem',
    color: '#00e676',
  },
  animationPlaceholder: {
    height: '300px',
    backgroundColor: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '1.5rem',
  },
  animationText: {
    fontSize: '1.5rem',
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
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '30px',
    width: '300px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  cardTitle: {
    fontSize: '1.6rem',
    marginBottom: '10px',
    color: '#00e676',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#666',
  },
  ceoSection: {
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#1a1a1a',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    color: '#fff',
  },
  ceoTitle: {
    fontSize: '2rem',
    margin: '0',
    color: '#00e676',
  },
  ceoImage: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    margin: '20px 0',
  },
  ceoDescription: {
    fontSize: '1rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  ceoHobbies: {
    fontSize: '1rem',
    color: '#bbb',
  },
  ctaSection: {
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#1a1a1a',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    margin: '0',
    color: '#00e676',
  },
  ctaDescription: {
    fontSize: '1.2rem',
    color: '#ccc',
    marginTop: '10px',
    maxWidth: '800px',
    margin: '0 auto',
  },
}

export default Home;