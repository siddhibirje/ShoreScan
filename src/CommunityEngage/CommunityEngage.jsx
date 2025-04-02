import React from 'react';
import { motion } from 'framer-motion';
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
    <div className="max-w-6xl mx-auto px-8 py-8 font-sans text-gray-800">
    {/* Page Title */}
    <h1 className="text-5xl font-bold text-center text-blue-800 mb-12">Community Engagement Programs</h1>
    
    <motion.div 
      className="my-16 py-8 border-b border-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >

    </motion.div>
    <div className="max-w-6xl mx-auto px-8 py-8 font-sans text-gray-800">
      <motion.div 
        className="my-16 py-8 border-b border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Adopt-a-Beach Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="flex flex-col justify-center" variants={itemVariantsLeft}>
            <h2 className="text-4xl font-bold mb-6 text-blue-800 leading-tight">Adopt-a-Beach: Protect, Preserve, and Take Pride!</h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-600">
              Join our Adopt-a-Beach program and become a guardian of Mumbai's coastline. 
              Take ownership of a beach section and lead regular cleanup efforts to protect our marine ecosystem.
            </p>
            
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <span className="text-green-600 text-xl font-bold mr-3">✓</span>
                <span>Environmental impact: Reduce plastic pollution in our oceans</span>
              </div>
              <div className="flex items-start mb-4">
                <span className="text-green-600 text-xl font-bold mr-3">✓</span>
                <span>Recognition: Get your name or organization featured as a beach guardian</span>
              </div>
              <div className="flex items-start mb-4">
                <span className="text-green-600 text-xl font-bold mr-3">✓</span>
                <span>Community building: Connect with like-minded environmentalists</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">How It Works</h3>
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1 min-w-[150px] text-center bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <FaMapMarkerAlt className="text-3xl text-blue-800" />
                  </div>
                  <p>Pick a beach section to adopt</p>
                </div>
                <div className="flex-1 min-w-[150px] text-center bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <FaTrash className="text-3xl text-blue-800" />
                  </div>
                  <p>Conduct regular cleanups</p>
                </div>
                <div className="flex-1 min-w-[150px] text-center bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <FaChartLine className="text-3xl text-blue-800" />
                  </div>
                  <p>Track your impact and progress</p>
                </div>
              </div>
            </div>
            
            <button className="px-6 py-3 text-base font-semibold bg-blue-800 text-white border-none rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:bg-blue-900 hover:-translate-y-1 hover:shadow-lg">Join the Movement</button>
          </motion.div>
          
          <motion.div className="flex justify-center items-center" variants={itemVariantsRight}>
            <div className="w-full h-full flex justify-center items-center overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/images/beach-cleanup.jpg" 
                alt="Volunteers cleaning a beach" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Beach Movie Nights Section */}
      <motion.div 
        className="my-16 py-8 border-b border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="flex justify-center items-center order-2 lg:order-1" variants={itemVariantsLeft}>
            <div className="w-full h-full flex justify-center items-center overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/images/beach-movie.jpg" 
                alt="Outdoor movie screening by the beach" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
          
          <motion.div className="flex flex-col justify-center order-1 lg:order-2" variants={itemVariantsRight}>
            <h2 className="text-4xl font-bold mb-6 text-blue-800 leading-tight">Beach Movie Nights: Clean, Relax, and Enjoy!</h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-600">
              Join us for our Beach Movie Nights where we combine environmental action with entertainment.
              Help clean the beach, then relax and enjoy a movie under the stars.
            </p>
            
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <span className="text-green-600 text-xl font-bold mr-3">✓</span>
                <span>Clean the beach together before the movie starts</span>
              </div>
              <div className="flex items-start mb-4">
                <span className="text-green-600 text-xl font-bold mr-3">✓</span>
                <span>Watch inspiring films by the shore under the stars</span>
              </div>
              <div className="flex items-start mb-4">
                <span className="text-green-600 text-xl font-bold mr-3">✓</span>
                <span>Build friendships with eco-conscious community members</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Upcoming Movie Nights</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center p-4 border-b border-gray-200">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-4">
                    <MdCalendarToday className="text-xl text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">April 15, 2025</p>
                    <p className="text-gray-600">"Blue Planet II" at Juhu Beach</p>
                  </div>
                </div>
                <div className="flex items-center p-4 border-b border-gray-200">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-4">
                    <MdCalendarToday className="text-xl text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">May 10, 2025</p>
                    <p className="text-gray-600">"Seaspiracy" at Versova Beach</p>
                  </div>
                </div>
                <div className="flex items-center p-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-4">
                    <MdCalendarToday className="text-xl text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">June 5, 2025</p>
                    <p className="text-gray-600">"Wall-E" at Girgaum Chowpatty</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="px-6 py-3 text-base font-semibold bg-blue-800 text-white border-none rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:bg-blue-900 hover:-translate-y-1 hover:shadow-lg">Check Upcoming Events</button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Plant & Protect Section */}
      <motion.div 
        className="my-16 py-8 border-b border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="flex flex-col justify-center" variants={itemVariantsLeft}>
            <h2 className="text-4xl font-bold mb-6 text-blue-800 leading-tight">Plant & Protect: Coastal Greenery Initiative</h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-600">
              Our Coastal Greenery Initiative focuses on planting native trees and plants along Mumbai's coastline
              to prevent erosion, create habitats for wildlife, and combat climate change.
            </p>
            
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <span className="text-green-600 text-xl font-bold mr-3">✓</span>
                <span>Prevents soil erosion and protects coastal infrastructure</span>
              </div>
              <div className="flex items-start mb-4">
                <span className="text-green-600 text-xl font-bold mr-3">✓</span>
                <span>Supports marine biodiversity and creates wildlife habitats</span>
              </div>
              <div className="flex items-start mb-4">
                <span className="text-green-600 text-xl font-bold mr-3">✓</span>
                <span>Climate action (SDG 13): Trees absorb CO₂ and reduce carbon footprint</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">How It Works</h3>
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1 min-w-[150px] text-center bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <FaLeaf className="text-3xl text-blue-800" />
                  </div>
                  <p>Learn about native coastal species</p>
                </div>
                <div className="flex-1 min-w-[150px] text-center bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <FaTree className="text-3xl text-blue-800" />
                  </div>
                  <p>Participate in planting events</p>
                </div>
                <div className="flex-1 min-w-[150px] text-center bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <FaWater className="text-3xl text-blue-800" />
                  </div>
                  <p>Help maintain and water young plants</p>
                </div>
              </div>
            </div>
            
            <button className="px-6 py-3 text-base font-semibold bg-blue-800 text-white border-none rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:bg-blue-900 hover:-translate-y-1 hover:shadow-lg">Get Involved</button>
          </motion.div>
          
          <motion.div className="flex justify-center items-center" variants={fadeInVariants}>
            <div className="w-full h-full flex justify-center items-center overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/images/tree-planting.jpg" 
                alt="Volunteers planting trees near the coast" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Final CTA Section */}
      <motion.div 
        className="bg-gradient-to-r from-blue-800 to-teal-500 rounded-xl py-12 px-8 text-center my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">Be part of the solution! Join hands in protecting Mumbai's coastline.</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 flex-wrap">
            <button className="px-6 py-3 text-base font-semibold bg-white text-blue-800 border-none rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg">Sign Up</button>
            <button className="px-6 py-3 text-base font-semibold bg-transparent text-white border-2 border-white rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg">Become a Partner</button>
            <button className="px-6 py-3 text-base font-semibold bg-transparent text-white border-2 border-white rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg">Donate</button>
          </div>
        </div>
      </motion.div>
    </div>
    </div>
    
  );
};

export default CommunityEngage;