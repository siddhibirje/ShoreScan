import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft, FaMapMarkerAlt, FaChartLine, FaHandsHelping } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const statistics = [
  { id: 1, value: '35%', label: 'Coastal Erosion Rate' },
  { id: 2, value: '9,400', label: 'Tons of Plastic Waste' },
  { id: 3, value: '149km', label: 'Affected Shoreline' },
  { id: 4, value: '1M+', label: 'People Impacted' }
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

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const aboutSectionRef = useRef(null);
  const topRef = useRef(null);
  const navigate = useNavigate();

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

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const navigateToErosionMap = () => {
    navigate('/ErosionMap');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white" ref={topRef}>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold">
          <h1>ShoreScan</h1>
        </div>
        <div className="flex items-center space-x-6">
          <button onClick={scrollToTop} className="hover:text-blue-200 transition-colors">Home</button>
          <button onClick={scrollToAbout} className="hover:text-blue-200 transition-colors">About Us</button>
          <div className="flex space-x-3 ml-6">
            <Link to="/login" className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700 transition-colors">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section Carousel */}
      <section className="relative h-screen overflow-hidden">
        <div className="h-full relative">
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 z-10 transform -translate-y-1/2">
            <button onClick={prevSlide} className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/40 transition-colors">
              <FaArrowLeft />
            </button>
            <button onClick={nextSlide} className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/40 transition-colors">
              <FaArrowRight />
            </button>
          </div>

          <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {/* Slide 1: Mission Statement with 360 Panorama */}
            <div className="min-w-full h-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080?text=Mumbai+Shoreline')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-black/50"></div>
              <motion.div 
                className="relative z-10 text-white text-center px-6 max-w-3xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: currentSlide === 0 ? 1 : 0, y: currentSlide === 0 ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Where technology meets environmental stewardship</h1>
                <h2 className="text-xl md:text-2xl mb-8">Creating sustainable solutions for Mumbai's threatened shoreline.</h2>
              </motion.div>
            </div>

           {/* Slide 2: Erosion Map Preview */}
<div className="min-w-full h-full flex flex-col items-center justify-center bg-gray-100 p-6">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Mumbai's Coastal Erosion Map</h2>
  <div className="w-full max-w-4xl flex flex-col items-center">
    <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg mb-6 relative">
      {<MapContainer center={[19.076, 72.8777]} zoom={11} scrollWheelZoom={false} className="h-full w-full">
      <TileLayer
        url="https://earthengine.googleapis.com/v1/projects/ee-siddhibirje007/maps/44c2aafd6037b679bc1dc01d58a2fc69-48801abab84ae33a673bd2317697c7a9/tiles/{z}/{x}/{y}"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[19.076, 72.8777]}>
        <Popup>
          Marine Drive, Mumbai
        </Popup>
      </Marker>
    </MapContainer>}
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080?text=Erosion+Map+Preview')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
    
    {/* Button below the map instead of overlaid */}
    <motion.button 
      onClick={() => {
        navigate('/ErosionMap');
        window.scrollTo(0, 0);
      }}
      className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-lg mb-4"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Show Full Erosion Map
    </motion.button>
    
    <p className="text-lg text-gray-600">Explore our interactive map showing Mumbai's coastal erosion patterns</p>
  </div>
</div>

            {/* Slide 3: Data Exploration */}
            <div className="min-w-full h-full flex flex-col items-center justify-center bg-blue-50 p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Coastal Erosion Analysis</h2>
              <div className="w-full max-w-2xl text-center">
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: currentSlide === 2 ? 1 : 0, scale: currentSlide === 2 ? 1 : 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Placeholder for data visualization */}
                  <div className="h-64 flex items-end justify-center space-x-4 mx-auto">
                    <div className="w-16 bg-blue-400 rounded-t-md" style={{ height: '65%' }}></div>
                    <div className="w-16 bg-blue-500 rounded-t-md" style={{ height: '80%' }}></div>
                    <div className="w-16 bg-blue-600 rounded-t-md" style={{ height: '45%' }}></div>
                    <div className="w-16 bg-blue-700 rounded-t-md" style={{ height: '90%' }}></div>
                    <div className="w-16 bg-blue-800 rounded-t-md" style={{ height: '60%' }}></div>
                  </div>
                </motion.div>
                <p className="text-lg text-gray-600 mb-6">Dive deeper into our data-driven analysis of coastal changes over time</p>
                <motion.button 
                  onClick={() => {
                    navigate('/ErosionGraph');
                    window.scrollTo(0, 0);
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Data
                </motion.button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
              <span 
                key={index} 
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${currentSlide === index ? 'bg-blue-600' : 'bg-white/50'}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutSectionRef} className="py-16 px-6 bg-white">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800">About Our Mission</h2>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto mb-10">
          <motion.div 
            className="bg-green-50 p-6 rounded-lg shadow-md flex-1 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-green-700 mb-2">SDG 11</h3>
            <p className="text-gray-700">Sustainable Cities and Communities</p>
          </motion.div>
          
          <motion.div 
            className="bg-blue-50 p-6 rounded-lg shadow-md flex-1 text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">SDG 14</h3>
            <p className="text-gray-700">Life Below Water</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 mb-4">
            Our website is designed to analyze and visualize coastal erosion and plastic waste 
            accumulation along Mumbai's shoreline. It will be interactive, data-driven, and easy 
            to navigate, allowing users to explore important environmental trends through maps, 
            graphs, and reports.
          </p>
          <p className="text-gray-700">
            It also includes a separate section for community engagement project where in a 
            Beach program will be adopted connecting our project to NGO's schools or enthusiasts 
            encouraging corporate social responsibility.
          </p>
        </motion.div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-16 px-6 bg-gray-100">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Mumbai's Coastal Challenges</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {statistics.map((stat, index) => (
            <motion.div 
              key={stat.id}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
              <p className="text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Cards Section */}
      <section className="py-16 px-6 bg-white">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Get Involved</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectCards.map((card, index) => (
            <motion.div 
              key={card.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="text-4xl text-blue-600 mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-700 mb-6">{card.description}</p>
              <Link 
                to={card.link} 
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                onClick={handleLinkClick}
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-6 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-4">ShoreScan</h1>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-300 transition-colors">About Us</Link></li>
              <li><Link to="/GetInvolved" className="hover:text-blue-300 transition-colors">GetInvolved</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="mb-2"><strong>Phone:</strong> +91 1234567890</p>
            <p className="mb-2"><strong>Email:</strong> info@coastalproject.org</p>
            <p><strong>Address:</strong> Marine Drive, Mumbai, Maharashtra, India</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto border-t border-gray-700 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} Mumbai Coastal Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;