import React, { useState } from 'react';
import './GetInvolved.css';

const GetInvolved = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardFlip = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="get-involved-page">
      {/* Hero Section */}
      <section className="gi-hero-section">
        <div className="gi-hero-background">
          <div className="gi-overlay"></div>
        </div>
        <div className="gi-hero-content">
          <h1>Become an ocean hero! Join the Movement to Protect Our Oceans!</h1>
          <div className="gi-cta-buttons">
            <button className="gi-volunteer-btn">Volunteer Now</button>
            <button className="gi-report-btn">Report an Issue</button>
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="gi-help-section">
        <div className="section-header">
          <h2>Make a Difference Your Way!</h2>
        </div>
        <div className="gi-flip-cards-container">
          <div 
            className={`gi-flip-card ${activeCard === 0 ? 'flipped' : ''}`} 
            onClick={() => handleCardFlip(0)}
          >
            <div className="gi-flip-card-inner">
              <div className="gi-flip-card-front">
                <div className="card-icon">🌊</div>
                <h3>Beach Cleanups</h3>
              </div>
              <div className="gi-flip-card-back">
                <p>Join organized cleanups to keep our beaches trash-free.</p>
                <a href="#signup" className="card-button">Learn More</a>
              </div>
            </div>
          </div>
          
          <div 
            className={`gi-flip-card ${activeCard === 1 ? 'flipped' : ''}`} 
            onClick={() => handleCardFlip(1)}
          >
            <div className="gi-flip-card-inner">
              <div className="gi-flip-card-front">
                <div className="card-icon">🏝️</div>
                <h3>Adopt-a-Beach</h3>
              </div>
              <div className="gi-flip-card-back">
                <p>Take responsibility for a section of the beach & maintain it regularly.</p>
                <a href="#signup" className="card-button">Learn More</a>
              </div>
            </div>
          </div>
          
          <div 
            className={`gi-flip-card ${activeCard === 2 ? 'flipped' : ''}`} 
            onClick={() => handleCardFlip(2)}
          >
            <div className="gi-flip-card-inner">
              <div className="gi-flip-card-front">
                <div className="card-icon">🎟️</div>
                <h3>Event Volunteering</h3>
              </div>
              <div className="gi-flip-card-back">
                <p>Assist in organizing sustainability workshops, eco-friendly activities, and beach events.</p>
                <a href="#signup" className="card-button">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="gi-signup-prompt">
          <p>Sign up today and be a part of the change!</p>
          <a href="#signup" className="gi-signup-btn">Sign Up</a>
        </div>
      </section>

      {/* Reporting Tools Guide */}
      <section className="gi-reporting-section">
        <div className="section-header">
          <h2>Reporting Tools Guide</h2>
          <p>Help us keep the beaches safe and clean by reporting issues like pollution, illegal dumping, or wildlife hazards.</p>
        </div>
        <div className="gi-reporting-steps">
          <div className="gi-reporting-step">
            <div className="step-number">1</div>
            <div className="step-icon">📸</div>
            <h3>Snap a Picture</h3>
            <p>Take a clear photo of the issue.</p>
          </div>
          <div className="gi-reporting-step">
            <div className="step-number">2</div>
            <div className="step-icon">📍</div>
            <h3>Provide Location</h3>
            <p>Share the exact beach name or GPS coordinates.</p>
          </div>
          <div className="gi-reporting-step">
            <div className="step-number">3</div>
            <div className="step-icon">📩</div>
            <h3>Submit a Report</h3>
            <p>Use our online form to send the details.</p>
          </div>
        </div>
        <div className="gi-reporting-cta">
          <p>Every report helps authorities take action faster</p>
          <button className="gi-report-now-btn">Report Now</button>
        </div>
      </section>

      {/* Partnerships & CSR Collaborations */}
      <section className="gi-partnerships-section">
        <div className="gi-partnerships-content">
          <h2>Partner with Us for a Greener Future!</h2>
          <p className="gi-partnerships-intro">
            Are you a business, NGO, or community organization looking to make an impact? 
            Partner with us for CSR initiatives, sponsorships, and sustainability campaigns.
          </p>
          <div className="gi-partnership-options">
            <div className="gi-partnership-option">
              <div className="option-icon">🏢</div>
              <h3>Corporate Volunteering</h3>
              <p>Engage employees in beach cleanups and environmental programs.</p>
            </div>
            <div className="gi-partnership-option">
              <div className="option-icon">💰</div>
              <h3>Sponsorships</h3>
              <p>Support our efforts through funding, equipment donations, or event sponsorships.</p>
            </div>
            <div className="gi-partnership-option">
              <div className="option-icon">🌱</div>
              <h3>Eco-Friendly Initiatives</h3>
              <p>Work together on sustainable projects like recycling programs and waste reduction.</p>
            </div>
          </div>
          <div className="gi-partnerships-cta">
            <p>Let's work together for a cleaner, greener future! Fill out our contact form and let's connect!</p>
            <button className="gi-partner-btn">Become a Partner</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;