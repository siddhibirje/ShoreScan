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
    <div className="min-h-screen bg-gradient-to-b from-primary-darker via-primary-dark to-primary-darker">
      {/* Hero Section */}
      <div className="hero min-h-[60vh] bg-base-200 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-teal-900/90"></div>
        <motion.div 
          className="hero-content text-center text-neutral-content relative z-10 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl">
            <motion.h1 
              className="flex flex-col items-center gap-4 relative group"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              {/* Top row of icons */}
              <motion.div 
                className="flex items-center gap-4 mb-2"
                variants={{
                  hidden: { y: -20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }
                  }
                }}
              >
                <MdGroups className="text-3xl text-teal-300 group-hover:scale-110 transition-transform duration-300" />
                <FaLeaf className="text-3xl text-teal-400 animate-bounce" />
                <FaWater className="text-3xl text-blue-300 group-hover:rotate-12 transition-transform duration-300" />
              </motion.div>
              
              {/* Title text with glow effect */}
              <motion.div 
                className="flex flex-col items-center text-6xl font-bold"
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
                }}
              >
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-white to-blue-300 
                    relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-teal-500/20 after:via-white/20 after:to-blue-500/20 
                    after:blur-lg after:-z-10 after:animate-pulse mb-2"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }
                    }
                  }}
                >
                  Community
                </motion.span>
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-white to-blue-300 
                    relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-teal-500/20 after:via-white/20 after:to-blue-500/20 
                    after:blur-lg after:-z-10 after:animate-pulse flex items-center gap-3"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        delay: 0.1
                      }
                    }
                  }}
                >
                  Engagement Programs
                </motion.span>
              </motion.div>

              {/* Bottom row of icons */}
              <motion.div 
                className="flex items-center gap-4 mt-2"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }
                  }
                }}
              >
                <FaTree className="text-3xl text-teal-400 animate-bounce" />
                <MdMovie className="text-3xl text-blue-300 group-hover:scale-110 transition-transform duration-300" />
                <FaMapMarkerAlt className="text-3xl text-teal-300 group-hover:rotate-12 transition-transform duration-300" />
              </motion.div>
            </motion.h1>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* How It Works Section - Centered */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-white to-blue-300
              relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-teal-500/20 after:via-white/20 after:to-blue-500/20 
              after:blur-lg after:-z-10 after:animate-pulse"
          >
            How It Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto px-4">
            {[
              {
                icon: <FaMapMarkerAlt className="text-5xl text-teal-300 group-hover:scale-110 transition-transform duration-300" />,
                title: "Pick a beach section",
                description: "Choose your beach area"
              },
              {
                icon: <FaTrash className="text-5xl text-teal-300 group-hover:scale-110 transition-transform duration-300" />,
                title: "Conduct regular cleanups",
                description: "Lead cleanup activities"
              },
              {
                icon: <FaChartLine className="text-5xl text-teal-300 group-hover:scale-110 transition-transform duration-300" />,
                title: "Track your impact",
                description: "Monitor your progress"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="card glass bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group
                  border border-white/10 hover:border-teal-300/30 shadow-lg hover:shadow-teal-300/20 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="card-body items-center justify-center text-center p-6">
                  <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-teal-900/30 mb-4
                    group-hover:bg-teal-900/40 transition-colors duration-300">
                    <div className="flex items-center justify-center w-full h-full">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/80 max-w-[200px]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="btn btn-md glass border-none bg-gradient-to-r from-teal-500/50 to-teal-700/50 
                hover:from-teal-400/60 hover:to-teal-600/60 text-white font-semibold px-8
                shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]
                backdrop-blur-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Movement
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Adopt-a-Beach Section */}
        <motion.div 
          className="card lg:card-side glass shadow-xl mb-16 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <figure className="lg:w-1/2">
            <motion.img 
              src="/images/beach-cleanup.jpg" 
              alt="Beach cleanup" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </figure>
          <div className="card-body lg:w-1/2 bg-base-100/10 backdrop-blur-md">
            <motion.h2 
              className="card-title text-3xl font-bold text-teal-300 mb-4"
              variants={itemVariantsRight}
            >
              Adopt-a-Beach: Protect, Preserve, and Take Pride!
            </motion.h2>
            <motion.p variants={itemVariantsRight} className="text-white/90 mb-6">
              Join our Adopt-a-Beach program and become a guardian of Mumbai's coastline. 
              Take ownership of a beach section and lead regular cleanup efforts to protect our marine ecosystem.
            </motion.p>
            
            <div className="space-y-4 mb-6">
              {[
                "Environmental impact: Reduce plastic pollution in our oceans",
                "Recognition: Get your name or organization featured as a beach guardian",
                "Community building: Connect with like-minded environmentalists"
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  variants={itemVariantsRight}
                >
                  <div className="badge badge-success badge-lg">✓</div>
                  <span className="text-white/80">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Beach Movie Nights Section */}
        <motion.div 
          className="card lg:card-side glass shadow-xl mb-16 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="card-body lg:w-1/2 bg-base-100/10 backdrop-blur-md order-2 lg:order-1">
            <motion.h2 
              className="card-title text-3xl font-bold text-teal-300 mb-4"
              variants={itemVariantsLeft}
            >
              Beach Movie Nights: Clean, Relax, and Enjoy!
            </motion.h2>
            <motion.p variants={itemVariantsLeft} className="text-white/90 mb-6">
              Join us for our Beach Movie Nights where we combine environmental action with entertainment.
              Help clean the beach, then relax and enjoy a movie under the stars.
            </motion.p>

            <div className="space-y-4 mb-6">
              {[
                "Clean the beach together before the movie starts",
                "Watch inspiring films by the shore under the stars",
                "Build friendships with eco-conscious community members"
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  variants={itemVariantsLeft}
                >
                  <div className="badge badge-success badge-lg">✓</div>
                  <span className="text-white/80">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariantsLeft}>
              <h3 className="text-xl font-semibold text-teal-300 mb-4">Upcoming Movie Nights</h3>
              <div className="space-y-4">
                {[
                  { date: "April 15, 2025", movie: "Blue Planet II", location: "Juhu Beach" },
                  { date: "May 10, 2025", movie: "Seaspiracy", location: "Versova Beach" },
                  { date: "June 5, 2025", movie: "Wall-E", location: "Girgaum Chowpatty" }
                ].map((event, index) => (
                  <div key={index} className="card bg-base-100/20 hover:bg-base-100/30 transition-all duration-300">
                    <div className="card-body p-4">
                      <div className="flex items-center gap-4">
                        <div className="text-teal-300 text-2xl">
                          <MdCalendarToday />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{event.date}</p>
                          <p className="text-white/80">{`"${event.movie}" at ${event.location}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="card-actions justify-end mt-6">
              <motion.button 
                className="btn btn-primary btn-lg glass"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check Upcoming Events
              </motion.button>
            </div>
          </div>
          <figure className="lg:w-1/2 order-1 lg:order-2">
            <motion.img 
              src="/images/beach-movie.jpg" 
              alt="Beach movie night" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </figure>
        </motion.div>

        {/* Plant & Protect Section */}
        <motion.div 
          className="card lg:card-side glass shadow-xl mb-16 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <figure className="lg:w-1/2">
            <motion.img 
              src="/images/tree-planting.jpg" 
              alt="Tree planting" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </figure>
          <div className="card-body lg:w-1/2 bg-base-100/10 backdrop-blur-md">
            <motion.h2 
              className="card-title text-3xl font-bold text-teal-300 mb-4"
              variants={itemVariantsRight}
            >
              Plant & Protect: Coastal Greenery Initiative
            </motion.h2>
            <motion.p variants={itemVariantsRight} className="text-white/90 mb-6">
              Our Coastal Greenery Initiative focuses on planting native trees and plants along Mumbai's coastline
              to prevent erosion, create habitats for wildlife, and combat climate change.
            </motion.p>

            <div className="space-y-4 mb-6">
              {[
                "Prevents soil erosion and protects coastal infrastructure",
                "Supports marine biodiversity and creates wildlife habitats",
                "Climate action (SDG 13): Trees absorb CO₂ and reduce carbon footprint"
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  variants={itemVariantsRight}
                >
                  <div className="badge badge-success badge-lg">✓</div>
                  <span className="text-white/80">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariantsRight}>
              <h3 className="text-xl font-semibold text-teal-300 mb-4">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: <FaLeaf />, text: "Learn about native species" },
                  { icon: <FaTree />, text: "Join planting events" },
                  { icon: <FaWater />, text: "Help maintain plants" }
                ].map((step, index) => (
                  <div key={index} className="card bg-base-100/20 hover:bg-base-100/30 transition-all duration-300">
                    <div className="card-body items-center text-center p-4">
                      <div className="text-teal-300 text-2xl mb-2">{step.icon}</div>
                      <p className="text-white/80">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="card-actions justify-end mt-6">
              <motion.button 
                className="btn btn-primary btn-lg glass"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Involved
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div 
          className="card glass shadow-xl bg-gradient-to-r from-blue-900 to-teal-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <div className="card-body text-center py-12">
            <h2 className="text-4xl font-bold text-white mb-8">
              Be part of the solution! Join hands in protecting Mumbai's coastline.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                className="btn btn-primary btn-lg glass"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
              <motion.button 
                className="btn btn-outline btn-lg glass text-white border-white hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Partner
              </motion.button>
              <motion.button 
                className="btn btn-outline btn-lg glass text-white border-white hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Donate
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityEngage;