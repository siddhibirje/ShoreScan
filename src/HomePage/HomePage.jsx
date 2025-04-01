import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft, FaMapMarkerAlt, FaChartLine, FaHandsHelping } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './HomePage.css';


// Sample data for key statistics
const statistics = [
  { id: 1, value: '27%', label: 'Coastal Erosion Rate' },
  { id: 2, value: '1,500', label: 'Tons of Plastic Waste' },
  { id: 3, value: '130km', label: 'Affected Shoreline' },
  { id: 4, value: '8M+', label: 'People Impacted' }
];

// Sample data for project cards
const projectCards = [
  {
    id: 1,
    title: 'Get Involved',
    description: 'Join our community initiatives to protect Mumbai\'s shoreline.',
    icon: <FaHandsHelping />,
    link: '/GetInvolved'
  },
  {
    id: 2,
    title: 'Community Engagement Program',
    description: 'Connect with NGOs, schools, and enthusiasts for beach cleanup events.',
    icon: <FaMapMarkerAlt />,
    link: '/CommunityEngage'
  },
  {
    id: 3,
    title: 'Report Coastal Issues',
    description: 'Help us monitor and address coastal problems by submitting reports.',
    icon: <FaChartLine />,
    link: '/report-issues'
  }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <h1>ShoreScan</h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section Carousel */}
      <section className="hero-section">
        <div className="carousel-container">
          <div className="carousel-controls">
            <button onClick={prevSlide} className="carousel-control">
              <FaArrowLeft />
            </button>
            <button onClick={nextSlide} className="carousel-control">
              <FaArrowRight />
            </button>
          </div>

          <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {/* Slide 1: Mission Statement with 360 Panorama */}
            <div className="carousel-slide panorama-slide">
              <div className="panorama-background"></div>
              <motion.div 
                className="mission-statement"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: currentSlide === 0 ? 1 : 0, y: currentSlide === 0 ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <h1>Where technology meets environmental stewardship</h1>
                <h2>Creating sustainable solutions for Mumbai's threatened shoreline.</h2>
                <motion.button 
                  className="learn-more-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>

            {/* Slide 2: Interactive Map */}
            <div className="carousel-slide map-slide">
              <h2>Mumbai's Coastal Health</h2>
              <div className="map-container">
                <MapContainer center={[19.076, 72.8777]} zoom={11} scrollWheelZoom={false}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[19.076, 72.8777]}>
                    <Popup>
                      Marine Drive, Mumbai
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <p>Explore our interactive heat map showing Mumbai's vulnerable coastal areas</p>
            </div>

            {/* Slide 3: Data Exploration */}
            <div className="carousel-slide data-slide">
              <h2>Coastal Erosion Analysis</h2>
              <div className="data-visualization">
                <motion.div 
                  className="data-chart"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: currentSlide === 2 ? 1 : 0, scale: currentSlide === 2 ? 1 : 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Placeholder for data visualization */}
                  <div className="chart-placeholder">
                    <div className="chart-bar" style={{ height: '65%' }}></div>
                    <div className="chart-bar" style={{ height: '80%' }}></div>
                    <div className="chart-bar" style={{ height: '45%' }}></div>
                    <div className="chart-bar" style={{ height: '90%' }}></div>
                    <div className="chart-bar" style={{ height: '60%' }}></div>
                  </div>
                </motion.div>
                <p>Dive deeper into our data-driven analysis of coastal changes over time</p>
                <motion.button 
                  className="explore-data-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Data
                </motion.button>
              </div>
            </div>
          </div>

          <div className="carousel-indicators">
            {[...Array(totalSlides)].map((_, index) => (
              <span 
                key={index} 
                className={`indicator ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Our Mission</h2>
        </motion.div>
        
        <div className="sdg-goals">
          <motion.div 
            className="sdg-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>SDG 11</h3>
            <p>Sustainable Cities and Communities</p>
          </motion.div>
          
          <motion.div 
            className="sdg-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>SDG 14</h3>
            <p>Life Below Water</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Our website is designed to analyze and visualize coastal erosion and plastic waste 
            accumulation along Mumbai's shoreline. It will be interactive, data-driven, and easy 
            to navigate, allowing users to explore important environmental trends through maps, 
            graphs, and reports.
          </p>
          <p>
            It also includes a separate section for community engagement project where in a 
            Beach program will be adopted connecting our project to NGO's schools or enthusiasts 
            encouraging corporate social responsibility.
          </p>
        </motion.div>
      </section>

      {/* Key Statistics Section */}
      <section className="statistics-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Mumbai's Coastal Challenges</h2>
        </motion.div>
        
        <div className="statistics-container">
          {statistics.map((stat, index) => (
            <motion.div 
              key={stat.id}
              className="statistic-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Cards Section */}
      <section className="projects-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Get Involved</h2>
        </motion.div>
        
        <div className="project-cards-container">
          {projectCards.map((card, index) => (
            <motion.div 
              key={card.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link to={card.link} className="card-button">Learn More</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>ShoreScan</h1>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/GetInvolved">GetInvolved</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><strong>Phone:</strong> +91 1234567890</p>
            <p><strong>Email:</strong> info@coastalproject.org</p>
            <p><strong>Address:</strong> Marine Drive, Mumbai, Maharashtra, India</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mumbai Coastal Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;