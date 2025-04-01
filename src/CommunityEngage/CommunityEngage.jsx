import React from 'react';
import { motion } from 'framer-motion';
import './CommunityEngage.css';

// Import icons (you'll need to install a package like react-icons)
import { FaMapMarkerAlt, FaTrash, FaChartLine, FaTree, FaWater, FaLeaf } from 'react-icons/fa';
import { MdMovie, MdCalendarToday, MdGroups } from 'react-icons/md';

const CommunityEngage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariantsRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const itemVariantsLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } }
  };

  return (
    <div className="community-engage-container">
      <motion.div 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Adopt-a-Beach Section */}
        <div className="two-column-grid">
          <motion.div className="column" variants={itemVariantsLeft}>
            <h2 className="section-title">Adopt-a-Beach: Protect, Preserve, and Take Pride!</h2>
            <p className="section-description">
              Join our Adopt-a-Beach program and become a guardian of Mumbai's coastline. 
              Take ownership of a beach section and lead regular cleanup efforts to protect our marine ecosystem.
            </p>
            
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="checkmark">✓</span>
                <span>Environmental impact: Reduce plastic pollution in our oceans</span>
              </div>
              <div className="benefit-item">
                <span className="checkmark">✓</span>
                <span>Recognition: Get your name or organization featured as a beach guardian</span>
              </div>
              <div className="benefit-item">
                <span className="checkmark">✓</span>
                <span>Community building: Connect with like-minded environmentalists</span>
              </div>
            </div>
            
            <div className="how-it-works">
              <h3>How It Works</h3>
              <div className="steps-container">
                <div className="step">
                  <div className="icon-container">
                    <FaMapMarkerAlt />
                  </div>
                  <p>Pick a beach section to adopt</p>
                </div>
                <div className="step">
                  <div className="icon-container">
                    <FaTrash />
                  </div>
                  <p>Conduct regular cleanups</p>
                </div>
                <div className="step">
                  <div className="icon-container">
                    <FaChartLine />
                  </div>
                  <p>Track your impact and progress</p>
                </div>
              </div>
            </div>
            
            <button className="cta-button">Join the Movement</button>
          </motion.div>
          
          <motion.div className="column" variants={itemVariantsRight}>
            <div className="image-container">
              <img 
                src="/images/beach-cleanup.jpg" 
                alt="Volunteers cleaning a beach" 
                className="section-image"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Beach Movie Nights Section */}
      <motion.div 
        className="section reverse-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="two-column-grid reverse">
          <motion.div className="column" variants={itemVariantsLeft}>
            <div className="image-container">
              <img 
                src="/images/beach-movie.jpg" 
                alt="Outdoor movie screening by the beach" 
                className="section-image"
              />
            </div>
          </motion.div>
          
          <motion.div className="column" variants={itemVariantsRight}>
            <h2 className="section-title">Beach Movie Nights: Clean, Relax, and Enjoy!</h2>
            <p className="section-description">
              Join us for our Beach Movie Nights where we combine environmental action with entertainment.
              Help clean the beach, then relax and enjoy a movie under the stars.
            </p>
            
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="checkmark">✓</span>
                <span>Clean the beach together before the movie starts</span>
              </div>
              <div className="benefit-item">
                <span className="checkmark">✓</span>
                <span>Watch inspiring films by the shore under the stars</span>
              </div>
              <div className="benefit-item">
                <span className="checkmark">✓</span>
                <span>Build friendships with eco-conscious community members</span>
              </div>
            </div>
            
            <div className="event-schedule">
              <h3>Upcoming Movie Nights</h3>
              <div className="events-list">
                <div className="event-item">
                  <div className="event-icon">
                    <MdCalendarToday />
                  </div>
                  <div className="event-details">
                    <p className="event-date">April 15, 2025</p>
                    <p className="event-title">"Blue Planet II" at Juhu Beach</p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-icon">
                    <MdCalendarToday />
                  </div>
                  <div className="event-details">
                    <p className="event-date">May 10, 2025</p>
                    <p className="event-title">"Seaspiracy" at Versova Beach</p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-icon">
                    <MdCalendarToday />
                  </div>
                  <div className="event-details">
                    <p className="event-date">June 5, 2025</p>
                    <p className="event-title">"Wall-E" at Girgaum Chowpatty</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="cta-button">Check Upcoming Events</button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Plant & Protect Section */}
      <motion.div 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="two-column-grid">
          <motion.div className="column" variants={itemVariantsLeft}>
            <h2 className="section-title">Plant & Protect: Coastal Greenery Initiative</h2>
            <p className="section-description">
              Our Coastal Greenery Initiative focuses on planting native trees and plants along Mumbai's coastline
              to prevent erosion, create habitats for wildlife, and combat climate change.
            </p>
            
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="checkmark">✓</span>
                <span>Prevents soil erosion and protects coastal infrastructure</span>
              </div>
              <div className="benefit-item">
                <span className="checkmark">✓</span>
                <span>Supports marine biodiversity and creates wildlife habitats</span>
              </div>
              <div className="benefit-item">
                <span className="checkmark">✓</span>
                <span>Climate action (SDG 13): Trees absorb CO₂ and reduce carbon footprint</span>
              </div>
            </div>
            
            <div className="how-it-works">
              <h3>How It Works</h3>
              <div className="steps-container">
                <div className="step">
                  <div className="icon-container">
                    <FaLeaf />
                  </div>
                  <p>Learn about native coastal species</p>
                </div>
                <div className="step">
                  <div className="icon-container">
                    <FaTree />
                  </div>
                  <p>Participate in planting events</p>
                </div>
                <div className="step">
                  <div className="icon-container">
                    <FaWater />
                  </div>
                  <p>Help maintain and water young plants</p>
                </div>
              </div>
            </div>
            
            <button className="cta-button">Get Involved</button>
          </motion.div>
          
          <motion.div className="column" variants={fadeInVariants}>
            <div className="image-container">
              <img 
                src="/images/tree-planting.jpg" 
                alt="Volunteers planting trees near the coast" 
                className="section-image"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Final CTA Section */}
      <motion.div 
        className="final-cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <div className="cta-content">
          <h2>Be part of the solution! Join hands in protecting Mumbai's coastline.</h2>
          <div className="cta-buttons">
            <button className="cta-button primary">Sign Up</button>
            <button className="cta-button secondary">Become a Partner</button>
            <button className="cta-button secondary">Donate</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CommunityEngage;