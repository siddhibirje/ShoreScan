import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Report = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    issueType: '',
    description: '',
    location: '',
    coordinates: '',
    image: null,
    contactEmail: ''
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const issueTypes = [
    { value: 'pollution', label: 'Beach Pollution' },
    { value: 'dumping', label: 'Illegal Dumping' },
    { value: 'wildlife', label: 'Wildlife Hazard' },
    { value: 'erosion', label: 'Coastal Erosion' },
    { value: 'facilities', label: 'Damaged Facilities' },
    { value: 'other', label: 'Other Issue' }
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const goToNextStep = () => {
    if ((step === 1 && formData.issueType) || 
        (step === 2 && imagePreview) || 
        (step === 3 && formData.location)) {
      setStep(step + 1);
    } else {
      alert('Please complete this step before continuing');
    }
  };

  const goToPrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Report submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      issueType: '',
      description: '',
      location: '',
      coordinates: '',
      image: null,
      contactEmail: ''
    });
    setImagePreview(null);
    setStep(1);
    setIsSubmitted(false);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: '#0d9488' },
    tap: { scale: 0.95 }
  };

  const progressVariants = {
    initial: { width: '0%' },
    step1: { width: '25%' },
    step2: { width: '50%' },
    step3: { width: '75%' },
    step4: { width: '100%' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 to-teal-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden border border-teal-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Coastal Issue Report</h1>
            <p className="text-teal-100 mt-1">
              Help us keep the beaches safe and clean by reporting issues
            </p>
          </div>
          
          {/* Progress bar */}
          {!isSubmitted && (
            <div className="px-6 pt-4">
              <div className="w-full bg-white/10 rounded-full h-2.5">
                <motion.div 
                  className="bg-teal-500 h-2.5 rounded-full"
                  variants={progressVariants}
                  initial="initial"
                  animate={`step${step}`}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
              <div className="flex justify-between text-xs text-white/70 mt-1">
                <span className={step >= 1 ? 'text-teal-300 font-medium' : ''}>Issue Type</span>
                <span className={step >= 2 ? 'text-teal-300 font-medium' : ''}>Photo</span>
                <span className={step >= 3 ? 'text-teal-300 font-medium' : ''}>Location</span>
                <span className={step >= 4 ? 'text-teal-300 font-medium' : ''}>Details</span>
              </div>
            </div>
          )}
          
          {!isSubmitted ? (
            <div className="p-6">
              {/* Step 1: Issue Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    What type of issue are you reporting?
                  </h2>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {issueTypes.map((issue) => (
                      <motion.div
                        key={issue.value}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`border rounded-lg p-4 cursor-pointer ${
                          formData.issueType === issue.value
                            ? 'border-teal-500 bg-teal-50'
                            : 'border-gray-200 hover:border-teal-300'
                        }`}
                        onClick={() => setFormData({ ...formData, issueType: issue.value })}
                      >
                        <div className="font-medium">{issue.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Snap a Picture */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    📸 Snap a Picture
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Take a clear photo of the issue to help authorities identify and address the problem quickly.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex justify-center items-center">
                      {imagePreview ? (
                        <div className="relative">
                          <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="max-h-64 rounded-lg"
                          />
                          <button 
                            onClick={() => {
                              setImagePreview(null);
                              setFormData({ ...formData, image: null });
                            }}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                          >
                            ✕
                          </button>
                        </div>
                      ) : (
                        <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-teal-500 rounded-lg shadow-lg tracking-wide border border-teal-200 cursor-pointer hover:bg-teal-50">
                          <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          <span className="mt-2 text-base">Select a photo</span>
                          <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageChange} 
                            className="hidden" 
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Provide Location */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    📍 Provide Location
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Share the exact beach name or GPS coordinates to help locate the issue.
                  </p>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Beach or Area Name
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="e.g. Sunset Beach, North Shore"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      GPS Coordinates (optional)
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        name="coordinates"
                        value={formData.coordinates}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="e.g. 34.0522° N, 118.2437° W"
                      />
                      <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        type="button"
                        className="bg-teal-500 text-white rounded-md px-4 flex items-center justify-center"
                        onClick={() => {
                          // This would normally use the Geolocation API
                          setFormData({ 
                            ...formData, 
                            coordinates: "Using current location..." 
                          });
                          
                          // Simulate getting location
                          setTimeout(() => {
                            setFormData({ 
                              ...formData, 
                              coordinates: "34.0522° N, 118.2437° W" 
                            });
                          }, 1000);
                        }}
                      >
                        Get Location
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Submit Details */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    📩 Submit Your Report
                  </h2>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Describe the issue
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Please provide details about what you observed..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Email (optional)
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="To receive updates on your report"
                    />
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg mb-6">
                    <h3 className="font-medium text-teal-800 mb-2">Your Report Summary</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><span className="font-medium">Issue Type:</span> {issueTypes.find(i => i.value === formData.issueType)?.label}</li>
                      <li><span className="font-medium">Location:</span> {formData.location}</li>
                      {formData.coordinates && (
                        <li><span className="font-medium">Coordinates:</span> {formData.coordinates}</li>
                      )}
                      <li><span className="font-medium">Photo:</span> {formData.image?.name || 'Uploaded'}</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    type="button"
                    onClick={goToPrevStep}
                    className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md font-medium"
                  >
                    Back
                  </motion.button>
                )}
                
                <div className="ml-auto">
                  {step < 4 ? (
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      type="button"
                      onClick={goToNextStep}
                      className="px-5 py-2 bg-teal-600 text-white rounded-md font-medium"
                    >
                      Continue
                    </motion.button>
                  ) : (
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`px-5 py-2 bg-teal-600 text-white rounded-md font-medium flex items-center ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Submit Report'
                      )}
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <motion.div 
              className="p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Report Submitted!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for helping keep our coastal areas clean and safe. Your report has been received and authorities will be notified.
              </p>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                type="button"
                onClick={resetForm}
                className="px-5 py-2 bg-teal-600 text-white rounded-md font-medium"
              >
                Submit Another Report
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Report;