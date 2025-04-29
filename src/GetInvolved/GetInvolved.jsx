import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaTrash, FaCalendarAlt, FaUsers, FaWater } from 'react-icons/fa';

const GetInvolved = () => {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  const handleCardFlip = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-b from-primary-darker via-primary-dark to-primary-darker">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[80vh] pt-32 pb-20 flex justify-center items-center text-white overflow-hidden"
        whileHover={{
          backgroundColor: "rgba(13, 40, 81, 0.8)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary-darker/90 to-primary-dark/90 backdrop-blur-sm"
            whileHover={{
              backdropFilter: "blur(8px)",
              transition: { duration: 0.3 }
            }}
          ></motion.div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-teal-400/10 to-teal-300/20"
            animate={{ 
              opacity: [0.2, 0.3, 0.2],
              scale: [1, 1.05, 1],
            }}
            whileHover={{
              opacity: 0.4,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-white to-teal-200 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get Involved - Protect Our Oceans!
          </motion.h1>
          <motion.div 
            className="flex justify-center gap-6 mt-10 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.button 
              className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-4 text-xl font-semibold rounded-xl shadow-xl hover:shadow-teal-500/30 transition-all duration-300"
              onClick={() => navigate('/login')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px 5px rgba(20, 184, 166, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Volunteer Now
            </motion.button>
            <motion.button 
              className="bg-white/10 backdrop-blur-sm border-2 border-teal-500/30 hover:border-teal-500/50 text-white px-10 py-4 text-xl font-semibold rounded-xl shadow-xl hover:shadow-teal-500/30 transition-all duration-300"
              onClick={() => navigate('/report')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px 5px rgba(20, 184, 166, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Report an Issue
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* How You Can Help Section */}
      <motion.section 
        className="py-20 px-4 relative overflow-hidden"
        whileHover={{
          backgroundColor: "rgba(13, 40, 81, 0.8)",
          transition: { duration: 0.3 }
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-5"
          whileHover={{
            opacity: 0.08,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        ></motion.div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-teal-400/5 to-teal-300/10"
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.02, 1],
          }}
          whileHover={{
            opacity: 0.3,
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-white to-teal-200 mb-6"
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 15px rgba(45, 212, 191, 0.5)"
              }}
            >
              Make a Difference Your Way!
            </motion.h2>
          </motion.div>

          <div className="flex justify-center flex-wrap gap-6 mb-16">
            {[
              {
                icon: <FaTrash className="text-4xl text-teal-300" />,
                title: "Beach Cleanups",
                description: "Join organized cleanups to keep our beaches trash-free."
              },
              {
                icon: <FaHandsHelping className="text-4xl text-teal-300" />,
                title: "Adopt-a-Beach",
                description: "Take responsibility for a section of the beach & maintain it regularly."
              },
              {
                icon: <FaCalendarAlt className="text-4xl text-teal-300" />,
                title: "Event Volunteering",
                description: "Assist in organizing sustainability workshops, eco-friendly activities, and beach events."
              }
            ].map((card, index) => (
              <motion.div 
                key={index}
                className="w-[280px] perspective-[1000px] cursor-pointer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onClick={() => handleCardFlip(index)}
              >
                <motion.div
                  className={`relative w-full h-full text-center transition-all duration-500 transform-gpu ${
                    activeCard === index ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  <div className="absolute inset-0 glass-card p-6 rounded-xl backdrop-blur-sm border border-teal-500/20 flex flex-col justify-center items-center backface-hidden min-h-[200px]">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
                      className="mb-4"
                    >
                      {card.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gradient mb-2">{card.title}</h3>
              </div>
                  <div className="absolute inset-0 glass-card p-6 rounded-xl backdrop-blur-sm border border-teal-500/20 flex flex-col justify-center items-center backface-hidden [transform:rotateY(180deg)] min-h-[200px]">
                    <p className="text-teal-100/90 mb-4 leading-relaxed">{card.description}</p>
                    <motion.button
                      className="btn btn-outline btn-accent btn-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
              </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Sign Up CTA */}
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p 
              className="text-2xl text-teal-100/90 mb-6 font-medium"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 10px rgba(45, 212, 191, 0.4)"
              }}
            >
              Ready to make an impact?
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white px-12 py-4 text-xl font-semibold rounded-xl shadow-xl hover:shadow-blue-500/30 transition-all duration-300 relative overflow-hidden group"
              onClick={() => navigate('/signup')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px 5px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              Join ShoreScan Today
            </motion.button>
          </motion.div>

          {/* Statistics Section */}
          <motion.div 
            className="mt-8 mb-8 relative"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-teal-500/20 hidden md:block"
              whileHover={{
                backgroundColor: "rgba(20, 184, 166, 0.4)",
                width: "4px",
                transition: { duration: 0.3 }
              }}
            ></motion.div>
            <div className="flex flex-col md:gap-12">
              {[
                {
                  number: "500+",
                  label: "Volunteers",
                  icon: <FaUsers className="text-teal-300" />,
                  side: "left"
                },
                {
                  number: "1000kg",
                  label: "Waste Collected",
                  icon: <FaTrash className="text-teal-300" />,
                  side: "right"
                },
                {
                  number: "20+",
                  label: "Beach Events",
                  icon: <FaCalendarAlt className="text-teal-300" />,
                  side: "left"
                },
                {
                  number: "5km",
                  label: "Beach Protected",
                  icon: <FaWater className="text-teal-300" />,
                  side: "right"
                }
              ].map((stat, index) => (
                <div key={index} className="relative">
                  <motion.div
                    className={`flex items-center gap-4 ${
                      stat.side === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col`}
                    initial={{ opacity: 0, x: stat.side === 'right' ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className={`hidden md:block w-[calc(50%-2rem)] ${
                      stat.side === 'right' ? 'text-left' : 'text-right'
                    }`}>
                      <motion.div 
                        className={`h-0.5 bg-gradient-to-${stat.side === 'right' ? 'r' : 'l'} from-transparent to-teal-500/50`}
                        whileHover={{
                          height: "2px",
                          backgroundColor: "rgba(20, 184, 166, 0.4)",
                          transition: { duration: 0.3 }
                        }}
                      ></motion.div>
        </div>
                    
                    <motion.div
                      className="glass-card p-6 rounded-2xl backdrop-blur-sm border border-teal-500/20 relative z-10 w-full md:w-auto"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 30px 5px rgba(20, 184, 166, 0.3)",
                        borderColor: "rgba(20, 184, 166, 0.4)",
                        backgroundColor: "rgba(20, 184, 166, 0.1)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-teal-500/30 animate-ping"></div>
                      <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-teal-500"></div>
                      <motion.div 
                        className="text-3xl mb-3"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, 5, -5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        {stat.icon}
                      </motion.div>
                      <motion.div 
                        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-white to-teal-200"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                      >
                        {stat.number}
                      </motion.div>
                      <motion.div 
                        className="text-teal-100/80 text-sm mt-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                      >
                        {stat.label}
                      </motion.div>
                    </motion.div>

                    <div className={`hidden md:block w-[calc(50%-2rem)] ${
                      stat.side === 'right' ? 'text-right' : 'text-left'
                    }`}>
                      <motion.div 
                        className={`h-0.5 bg-gradient-to-${stat.side === 'right' ? 'l' : 'r'} from-transparent to-teal-500/50`}
                        whileHover={{
                          height: "2px",
                          backgroundColor: "rgba(20, 184, 166, 0.4)",
                          transition: { duration: 0.3 }
                        }}
                      ></motion.div>
            </div>
                  </motion.div>
            </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.p
              className="text-xl text-teal-100/90 mb-6 font-medium"
              whileHover={{ 
                scale: 1.01,
                textShadow: "0 0 8px rgba(45, 212, 191, 0.3)"
              }}
            >
              Be part of our growing community of ocean protectors!
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-xl hover:shadow-blue-500/30 backdrop-blur-sm transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px 2px rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/signup')}
            >
              Sign Up Now
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default GetInvolved;