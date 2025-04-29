// LoginSignup.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  const tabVariants = {
    active: { 
      color: 'var(--accent-blue)', 
      borderBottom: '2px solid var(--accent-blue)',
    },
    inactive: { 
      color: 'var(--text-secondary)',
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
      boxShadow: '0 5px 15px rgba(74, 158, 255, 0.4)'
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
    <div className="flex justify-center items-center min-h-screen">
      <div className="glass-card w-full max-w-md p-8">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full border-2 border-accent-blue flex items-center justify-center glow-effect">
            <svg className="w-10 h-10 text-accent-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mb-8">
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

        <div className="space-y-6">
          {/* Login Form */}
          <motion.form 
            variants={formVariants}
            initial="hidden"
            animate={isLogin ? 'visible' : 'hidden'}
            onSubmit={handleLoginSubmit}
            className={!isLogin ? 'hidden' : 'space-y-4'}
          >
            <div>
              <input
                type="email"
                id="loginEmail"
                name="loginEmail"
                className="w-full"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                className="w-full"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="hover:text-accent-blue">
                Forgot Password?
              </a>
            </div>
            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn-primary w-full"
            >
              LOGIN
            </motion.button>

            <div className="mt-6 text-center">
              <p className="text-sm text-text-secondary">Or login with</p>
              <div className="flex justify-center mt-3 space-x-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-accent-blue cursor-pointer hover:glow-effect"
                >
                  G
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-accent-blue cursor-pointer hover:glow-effect"
                >
                  f
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-accent-blue cursor-pointer hover:glow-effect"
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
            className={isLogin ? 'hidden' : 'space-y-4'}
          >
            <div>
              <input
                type="text"
                id="signupName"
                name="signupName"
                className="w-full"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="signupEmail"
                name="signupEmail"
                className="w-full"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="signupPassword"
                name="signupPassword"
                className="w-full"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full"
                placeholder="Confirm Password"
                required
              />
            </div>
            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn-primary w-full"
            >
              SIGN UP
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;