// LoginSignup.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  const tabVariants = {
    active: { 
      color: '#3b82f6', 
      borderBottom: '2px solid #3b82f6',
    },
    inactive: { 
      color: '#6b7280',
      borderBottom: '2px solid transparent', 
    }
  };
  
  const formVariants = {
    hidden: { 
      opacity: 0,
      x: 20,
      display: 'none',
    },
    visible: { 
      opacity: 1,
      x: 0,
      display: 'block',
      transition: { 
        duration: 0.3 
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.02,
      backgroundColor: '#2563eb'
    },
    tap: { 
      scale: 0.98
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.loginEmail.value;
    const password = e.target.elements.loginPassword.value;
    console.log('Login attempt:', { email, password });
    // Implement your login logic here
    alert('Login functionality would be implemented here.');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.signupName.value;
    const email = e.target.elements.signupEmail.value;
    const password = e.target.elements.signupPassword.value;
    const confirmPassword = e.target.elements.confirmPassword.value;
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    console.log('Signup attempt:', { name, email, password });
    // Implement your signup logic here
    alert('Signup functionality would be implemented here.');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b">
          <motion.div 
            className="flex-1 py-4 text-center font-medium cursor-pointer"
            variants={tabVariants}
            animate={isLogin ? 'active' : 'inactive'}
            onClick={() => setIsLogin(true)}
          >
            Login
          </motion.div>
          <motion.div 
            className="flex-1 py-4 text-center font-medium cursor-pointer"
            variants={tabVariants}
            animate={!isLogin ? 'active' : 'inactive'}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </motion.div>
        </div>

        <div className="p-6">
          {/* Login Form */}
          <motion.form 
            variants={formVariants}
            initial="hidden"
            animate={isLogin ? 'visible' : 'hidden'}
            onSubmit={handleLoginSubmit}
            className={!isLogin ? 'hidden' : ''}
          >
            <div className="mb-4">
              <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="loginEmail"
                name="loginEmail"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="text-right mb-4">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                Forgot password?
              </a>
            </div>
            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium shadow-sm"
            >
              Login
            </motion.button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Or login with</p>
              <div className="flex justify-center mt-3 space-x-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 cursor-pointer"
                >
                  G
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 cursor-pointer"
                >
                  f
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 cursor-pointer"
                >
                  in
                </motion.div>
              </div>
            </div>
          </motion.form>

          {/* Signup Form */}
          <motion.form 
            variants={formVariants}
            initial="hidden"
            animate={!isLogin ? 'visible' : 'hidden'}
            onSubmit={handleSignupSubmit}
            className={isLogin ? 'hidden' : ''}
          >
            <div className="mb-4">
              <label htmlFor="signupName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="signupName"
                name="signupName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="signupEmail"
                name="signupEmail"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="signupPassword"
                name="signupPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Create a password"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm your password"
                required
              />
            </div>
            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium shadow-sm"
            >
              Sign Up
            </motion.button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Or sign up with</p>
              <div className="flex justify-center mt-3 space-x-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 cursor-pointer"
                >
                  G
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 cursor-pointer"
                >
                  f
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 cursor-pointer"
                >
                  in
                </motion.div>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;