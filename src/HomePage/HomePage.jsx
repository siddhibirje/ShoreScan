import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft, FaMapMarkerAlt, FaChartLine, FaHandsHelping, FaBars, FaWater, FaTrash, FaRulerHorizontal, FaUsers, FaHeart } from 'react-icons/fa';
import { BiWater } from 'react-icons/bi';
import ErosionMap from '../ErosionMap/ErosionMap';
import 'leaflet/dist/leaflet.css';

const statistics = [
  { id: 1, value: '35%', label: 'Coastal Erosion Rate', icon: <FaWater className="text-4xl text-teal-300 mb-4" /> },
  { id: 2, value: '9,400', label: 'Tons of Plastic Waste', icon: <FaTrash className="text-4xl text-teal-300 mb-4" /> },
  { id: 3, value: '149km', label: 'Affected Shoreline', icon: <FaRulerHorizontal className="text-4xl text-teal-300 mb-4" /> },
  { id: 4, value: '1M+', label: 'People Impacted', icon: <FaUsers className="text-4xl text-teal-300 mb-4" /> }
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
    link: '/report'
  }
];

// Add this at the top level of your component file
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const aboutSectionRef = useRef(null);
  const getInvolvedSectionRef = useRef(null);
  const topRef = useRef(null);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGetInvolved = () => {
    getInvolvedSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const navigateToErosionMap = () => {
    navigate('/ErosionMap');
    window.scrollTo(0, 0);
  };

  const handleGetInvolvedClick = () => {
    getInvolvedSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCardClick = (link) => {
    navigate(link);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" ref={topRef}>
      {/* Navigation */}
      <motion.nav 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed w-full top-0 z-50 transition-all duration-500 py-0.5 nav-glass`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <h1 className="text-3xl font-bold tracking-wide">
              <span className="text-white">ShoreScan</span>
            </h1>
          </motion.div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white text-2xl">
            <FaBars />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { title: 'Home', action: scrollToTop },
              { title: 'About Us', action: scrollToAbout },
              { title: 'Call To Action', action: handleGetInvolvedClick }
            ].map((item) => (
              <motion.button
                key={item.title}
                onClick={item.action}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-base font-semibold tracking-wide text-white group-hover:text-accent-blue transition-all duration-300">
                  {item.title}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full hover-glow" />
              </motion.button>
            ))}
            
            <div className="w-px h-8 bg-gray-700/50" /> {/* Divider */}
            
            <Link to="/login">
              <motion.button
                className="btn-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              >
                Login
              </motion.button>
              </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section Carousel */}
      <section className="relative min-h-screen">
        <div className="pt-20 pb-16 h-screen">
          <div className="relative h-[calc(100vh-10rem)] mx-auto max-w-6xl px-4">
            <div className="absolute top-1/2 left-4 right-4 flex justify-between z-20 transform -translate-y-1/2">
              <motion.button 
                onClick={prevSlide} 
                className="glass-card p-3 rounded-full hover:border-accent-blue"
                whileHover={{ scale: 1.1 }}
              >
                <FaArrowLeft className="text-accent-blue" />
              </motion.button>
              <motion.button 
                onClick={nextSlide} 
                className="glass-card p-3 rounded-full hover:border-accent-blue"
                whileHover={{ scale: 1.1 }}
              >
                <FaArrowRight className="text-accent-blue" />
              </motion.button>
          </div>

            <div className="relative h-full overflow-hidden rounded-2xl">
              <div 
                className="flex h-full transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Slide 1: Mission Statement */}
            <div className="min-w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080?text=Mumbai+Shoreline')] bg-cover bg-center rounded-2xl"></div>
                  <div className="absolute inset-0 bg-primary-dark/50 backdrop-blur-sm rounded-2xl"></div>
              <motion.div 
                    className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto py-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: currentSlide === 0 ? 1 : 0, y: currentSlide === 0 ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                    <motion.div
                      className="floating"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <motion.h1 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.2
                        }}
                      >
                        <motion.span 
                          className="gradient-text glow-text inline-block"
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.3 }
                          }}
                        >
                          Where technology meets
                        </motion.span>
                        <br />
                        <motion.span 
                          className="gradient-text-alt glow-text inline-block"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.3 }
                          }}
                        >
                          environmental stewardship
                        </motion.span>
                      </motion.h1>
                    </motion.div>
                    
                    <motion.h2 
                      className="text-lg sm:text-xl md:text-2xl text-text-secondary leading-relaxed glow-text-subtle mx-auto px-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      whileHover={{
                        scale: 1.01,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                      >
                        Creating sustainable solutions for Mumbai's threatened shoreline
                      </motion.span>
                    </motion.h2>
              </motion.div>
            </div>

            {/* Slide 2: Erosion Map Preview */}
                <div className="min-w-full h-full flex items-center justify-center relative">
                  <div className="glass-card p-8 w-full max-w-4xl mx-4 rounded-2xl flex flex-col h-[90%]">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient text-center leading-tight">Mumbai's Coastal Erosion Map</h2>
                    <div className="flex-1 w-full rounded-xl overflow-hidden mb-6 relative h-[400px]">
                      <ErosionMap height="100%" />
                </div>
                    <div className="text-center space-y-4 mt-auto">
                <motion.button 
                        onClick={navigateToErosionMap}
                        className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show Full Erosion Map
                </motion.button>
                      <p className="text-sm text-text-secondary px-4">Explore our interactive map showing Mumbai's coastal erosion patterns</p>
                    </div>
              </div>
            </div>

            {/* Slide 3: Data Exploration */}
                <div className="min-w-full h-full flex items-center justify-center relative">
                  <div className="glass-card p-8 w-full max-w-4xl mx-4 rounded-2xl flex flex-col h-[90%]">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient text-center leading-tight">Coastal Erosion Analysis</h2>
                <motion.div 
                      className="flex-1 mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: currentSlide === 2 ? 1 : 0, scale: currentSlide === 2 ? 1 : 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                      {/* Data visualization */}
                      <div className="h-full flex items-end justify-center space-x-4 mx-auto">
                        {[65, 80, 45, 90, 60].map((height, index) => (
                          <motion.div
                            key={index}
                            className="w-12 sm:w-16 rounded-t-lg glow-effect"
                            style={{ 
                              height: `${height}%`,
                              background: `linear-gradient(180deg, var(--accent-blue) 0%, var(--primary-light) 100%)`
                            }}
                            whileHover={{ scale: 1.1 }}
                          />
                        ))}
                  </div>
                </motion.div>
                    <div className="text-center space-y-4 mt-auto">
                <motion.button 
                        onClick={() => navigate('/ErosionGraph')}
                        className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Data
                </motion.button>
                      <p className="text-sm text-text-secondary px-4">Dive deeper into our data-driven analysis of coastal changes over time</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>

            {/* Dot indicators */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
            {[...Array(totalSlides)].map((_, index) => (
                <motion.button
                key={index} 
                onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    currentSlide === index 
                      ? 'bg-accent-blue glow-effect' 
                      : 'bg-white/30 hover:bg-white/50'
                  } transition-all duration-300`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutSectionRef} className="pt-24 pb-16 bg-gradient-to-b from-primary-dark to-primary-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <motion.h2 
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Our Mission
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* SDG 11 Card */}
            <motion.div
              className="card glass hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative p-6 overflow-hidden rounded-2xl h-full backdrop-blur-lg bg-white/5">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#FF9E1B]/20 to-transparent"
                  whileHover={{ opacity: [0.2, 0.4, 0.2], transition: { duration: 2, repeat: Infinity } }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-20 h-20 bg-[#FF9E1B] rounded-xl p-4 shadow-lg flex items-center justify-center hover:shadow-[#FF9E1B]/50"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      <img 
                        src="sdg11.png" 
                        alt="SDG 11" 
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-3xl font-bold mb-1 text-[#FF9E1B] glow-text"
                        whileHover={{ scale: 1.05 }}
                      >
                        SDG 11
                      </motion.h3>
                      <p className="text-lg text-white/90">Sustainable Cities<br />and Communities</p>
                    </div>
                  </div>
                </div>
              </div>
          </motion.div>
          
            {/* SDG 14 Card */}
          <motion.div 
              className="card glass hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative p-6 overflow-hidden rounded-2xl h-full backdrop-blur-lg bg-white/5">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#0A97D9]/20 to-transparent"
                  whileHover={{ opacity: [0.2, 0.4, 0.2], transition: { duration: 2, repeat: Infinity } }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-20 h-20 bg-[#0A97D9] rounded-xl p-4 shadow-lg flex items-center justify-center hover:shadow-[#0A97D9]/50"
                      whileHover={{ scale: 1.05, rotate: -5 }}
                    >
                      <img 
                        src="sdg14.png" 
                        alt="SDG 14" 
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-3xl font-bold mb-1 text-[#0A97D9] glow-text"
                        whileHover={{ scale: 1.05 }}
                      >
                        SDG 14
                      </motion.h3>
                      <p className="text-lg text-white/90">Life Below Water</p>
                    </div>
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
        
        <motion.div 
            className="card glass hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/5">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-2xl"
                whileHover={{ opacity: [0.1, 0.2, 0.1], transition: { duration: 2, repeat: Infinity } }}
              />
              <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
                <motion.p 
                  className="text-base text-white/90 leading-relaxed"
                  whileHover={{ scale: 1.01 }}
                >
                  Our website is designed to analyze and visualize coastal erosion and plastic waste accumulation along Mumbai's shoreline. It will be interactive, data-driven, and easy to navigate, allowing users to explore important environmental trends through maps, graphs, and reports.
                </motion.p>
                <motion.p 
                  className="text-base text-white/90 leading-relaxed"
                  whileHover={{ scale: 1.01 }}
                >
                  It also includes a separate section for community engagement project where in a Beach program will be adopted connecting our project to NGO's schools or enthusiasts encouraging corporate social responsibility.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-16 bg-gradient-to-b from-primary-darker via-primary-dark to-primary-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-teal-400/5 to-teal-300/10"
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.02, 1],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <motion.h2 
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-white to-teal-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 15px rgba(45, 212, 191, 0.5)"
              }}
            >
              Mumbai's Coastal Challenges
            </motion.h2>
            <motion.p
              className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-white to-teal-200 mt-2 max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.01 }}
        >
              Environmental impact statistics for Mumbai's coastline
            </motion.p>
        </motion.div>
        
          <div className="relative">
            {/* Connecting Lines */}
            <motion.div 
              className="absolute inset-0 z-0 hidden lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
              <div className="absolute top-1/2 left-1/4 w-px h-12 bg-gradient-to-b from-teal-500/30 to-transparent transform -translate-x-1/2" />
              <div className="absolute top-1/2 left-1/2 w-px h-12 bg-gradient-to-b from-teal-500/30 to-transparent transform -translate-x-1/2" />
              <div className="absolute top-1/2 left-3/4 w-px h-12 bg-gradient-to-b from-teal-500/30 to-transparent transform -translate-x-1/2" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {statistics.map((stat, index) => (
                <motion.div 
                  key={stat.id}
                  className="card glass hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 border border-teal-500/20"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.2
                    }
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative p-4 rounded-2xl backdrop-blur-lg">
                    <motion.div 
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/20 via-teal-400/10 to-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                      whileHover={{ 
                        opacity: [0.2, 0.3, 0.2],
                        scale: [1, 1.02, 1],
                        transition: { duration: 2, repeat: Infinity }
                      }}
                    />
                    <div className="relative z-10">
                      <motion.div
                        className="stats stats-vertical shadow bg-transparent border-none w-full"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                      >
                        <div className="stat p-1 place-items-center">
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                            whileHover={{ 
                              scale: 1.1,
                              rotate: [0, 5, -5, 0],
                              transition: { duration: 0.5 }
                            }}
                            className="rounded-full p-3 bg-teal-500/10 backdrop-blur-sm border border-teal-500/20"
                          >
                            {stat.icon}
                          </motion.div>
                          <motion.div 
                            className="stat-value text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-teal-100 my-2"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                            whileHover={{ 
                              scale: 1.05,
                              textShadow: "0 0 8px rgba(45, 212, 191, 0.5)"
                            }}
                          >
                            {stat.value}
                          </motion.div>
                          <motion.div 
                            className="stat-desc text-base font-medium text-teal-100"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.9 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                            whileHover={{ 
                              opacity: 1,
                              scale: 1.02
                            }}
                          >
                            {stat.label}
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-2xl ring-1 ring-teal-500/20"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                      whileHover={{
                        boxShadow: "0 0 20px 2px rgba(20, 184, 166, 0.2)"
                      }}
                    />
                  </div>
            </motion.div>
          ))}
            </div>
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.p
              className="text-base max-w-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-white to-teal-200 font-medium"
              whileHover={{ 
                scale: 1.01,
                textShadow: "0 0 8px rgba(45, 212, 191, 0.3)"
              }}
            >
              Urgent action needed to protect Mumbai's coastal communities
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={getInvolvedSectionRef} className="py-16 pt-24 bg-gradient-to-b from-primary-dark to-primary-darker">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gradient mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Call To Action
            </motion.h2>
            <motion.p
              className="text-lg text-teal-100/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Be a part of the solution
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {projectCards.map((card, index) => (
              <Link 
                key={card.id}
                to={card.link} 
                onClick={handleLinkClick}
                className="block"
              >
                <motion.div
                  className="glass-card p-6 h-full flex flex-col justify-between backdrop-blur-sm border border-teal-500/20"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 0 20px 2px rgba(20, 184, 166, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/20 via-teal-400/10 to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ 
                      opacity: [0.2, 0.3, 0.2],
                      scale: [1, 1.02, 1],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-3xl text-accent-blue mb-4"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {card.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-bold mb-2 text-gradient"
                      whileHover={{
                        textShadow: "0 0 8px rgba(45, 212, 191, 0.5)"
                      }}
                    >
                      {card.title}
                    </motion.h3>
                    <p className="text-text-secondary mb-4 text-sm">{card.description}</p>
                  </div>
                  <motion.span 
                    className="text-accent-blue font-medium flex items-center gap-2 group text-sm"
                    whileHover={{ x: 5 }}
              >
                Learn More
                    <motion.span
                      className="inline-block"
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </motion.span>
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.p
              className="text-lg text-teal-100/80"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 8px rgba(45, 212, 191, 0.3)"
              }}
            >
              Together, we can protect Mumbai's coastline
            </motion.p>
            </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 nav-glass">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
              <h1 className="text-2xl font-bold hover:text-accent-blue transition-colors cursor-pointer text-white">ShoreScan</h1>
          </div>
          
          <div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: 'white' }}>Quick Links</h4>
            <ul className="space-y-2">
                <li>
                  <Link to="/" style={{ color: 'white' }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" style={{ color: 'white' }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/GetInvolved" style={{ color: 'white' }}>
                    Get Involved
                  </Link>
                </li>
            </ul>
          </div>
          
          <div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: 'white' }}>Contact Us</h4>
              <p className="mb-2" style={{ color: 'white' }}><strong>Phone:</strong> +91 1234567890</p>
              <p className="mb-2" style={{ color: 'white' }}><strong>Email:</strong> info@coastalproject.org</p>
              <p style={{ color: 'white' }}><strong>Address:</strong> Marine Drive, Mumbai, Maharashtra, India</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700/30 mt-8 pt-6 text-center">
            <p style={{ color: 'white' }}>© {new Date().getFullYear()} Mumbai Coastal Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;