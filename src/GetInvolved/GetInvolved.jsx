import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetInvolved = () => {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  const handleCardFlip = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex justify-center items-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: '#1E3A8A',opacity: 0.5 }}></div>
          <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://source.unsplash.com/random/1600x900/?beach,cleanup')"}}></div>
        </div>
        <div className="text-center max-w-3xl px-8 z-10">
          <h1 className="text-5xl font-bold mb-8 drop-shadow-md">Become an ocean hero! Join the Movement to Protect Our Oceans!</h1>
          <div className="flex justify-center gap-6 mt-8 flex-wrap">
            <button 
              className="bg-teal-500 text-white px-8 py-4 text-lg font-semibold rounded hover:translate-y-[-3px] transition duration-300 hover:shadow-lg"
              onClick={() => navigate('/login')}
            >
              Volunteer Now
            </button>
            <button 
              className="bg-white bg-opacity-90 text-blue-700 px-8 py-4 text-lg font-semibold rounded hover:translate-y-[-3px] transition duration-300 hover:shadow-lg"
              onClick={() => navigate('/report')}
            >
              Report an Issue
            </button>
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="py-20 px-[5%] bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-blue-700 inline-block mb-4 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:translate-x-[-50%] after:w-[60px] after:h-[3px] after:bg-teal-500">Make a Difference Your Way!</h2>
        </div>
        <div className="flex justify-center flex-wrap gap-8 my-12">
          <div 
            className="w-[300px] h-[300px] perspective-[1000px] cursor-pointer"
            onClick={() => handleCardFlip(0)}
          >
            <div className={`relative w-full h-full text-center transition-transform duration-800 transform-style-3d ${activeCard === 0 ? 'rotate-y-180' : ''}`}>
              <div className="absolute w-full h-full backface-hidden rounded-lg shadow-md flex flex-col justify-center items-center p-8 bg-gray-100">
                <div className="text-6xl mb-4">🌊</div>
                <h3 className="text-2xl mb-4">Beach Cleanups</h3>
              </div>
              <div className="absolute w-full h-full backface-hidden rounded-lg shadow-md flex flex-col justify-center items-center p-8 bg-blue-700 text-white rotate-y-180">
                <p className="mb-6 leading-relaxed">Join organized cleanups to keep our beaches trash-free.</p>
                <a href="#signup" className="bg-teal-500 text-white py-3 px-6 rounded font-medium transition duration-300 hover:bg-teal-600 hover:translate-y-[-2px]">Learn More</a>
              </div>
            </div>
          </div>
          
          <div 
            className="w-[300px] h-[300px] perspective-[1000px] cursor-pointer"
            onClick={() => handleCardFlip(1)}
          >
            <div className={`relative w-full h-full text-center transition-transform duration-800 transform-style-3d ${activeCard === 1 ? 'rotate-y-180' : ''}`}>
              <div className="absolute w-full h-full backface-hidden rounded-lg shadow-md flex flex-col justify-center items-center p-8 bg-gray-100">
                <div className="text-6xl mb-4">🏝️</div>
                <h3 className="text-2xl mb-4">Adopt-a-Beach</h3>
              </div>
              <div className="absolute w-full h-full backface-hidden rounded-lg shadow-md flex flex-col justify-center items-center p-8 bg-blue-700 text-white rotate-y-180">
                <p className="mb-6 leading-relaxed">Take responsibility for a section of the beach & maintain it regularly.</p>
                <a href="#signup" className="bg-teal-500 text-white py-3 px-6 rounded font-medium transition duration-300 hover:bg-teal-600 hover:translate-y-[-2px]">Learn More</a>
              </div>
            </div>
          </div>
          
          <div 
            className="w-[300px] h-[300px] perspective-[1000px] cursor-pointer"
            onClick={() => handleCardFlip(2)}
          >
            <div className={`relative w-full h-full text-center transition-transform duration-800 transform-style-3d ${activeCard === 2 ? 'rotate-y-180' : ''}`}>
              <div className="absolute w-full h-full backface-hidden rounded-lg shadow-md flex flex-col justify-center items-center p-8 bg-gray-100">
                <div className="text-6xl mb-4">🎟️</div>
                <h3 className="text-2xl mb-4">Event Volunteering</h3>
              </div>
              <div className="absolute w-full h-full backface-hidden rounded-lg shadow-md flex flex-col justify-center items-center p-8 bg-blue-700 text-white rotate-y-180">
                <p className="mb-6 leading-relaxed">Assist in organizing sustainability workshops, eco-friendly activities, and beach events.</p>
                <a href="#signup" className="bg-teal-500 text-white py-3 px-6 rounded font-medium transition duration-300 hover:bg-teal-600 hover:translate-y-[-2px]">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-xl mb-4">Sign up today and be a part of the change!</p>
          <a href="#signup" className="inline-block px-8 py-3 bg-blue-700 text-white no-underline rounded font-semibold transition duration-300 hover:bg-blue-800 hover:translate-y-[-2px]">Sign Up</a>
        </div>
      </section>

      {/* Reporting Tools Guide */}
      <section className="py-20 px-[5%] bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-blue-700 inline-block mb-4 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:translate-x-[-50%] after:w-[60px] after:h-[3px] after:bg-teal-500">Reporting Tools Guide</h2>
          <p className="max-w-xl mx-auto text-lg text-gray-600">Help us keep the beaches safe and clean by reporting issues like pollution, illegal dumping, or wildlife hazards.</p>
        </div>
        <div className="flex justify-center flex-wrap gap-8 my-12">
          <div className="flex-1 min-w-[250px] max-w-[300px] bg-white p-8 rounded-lg shadow-md text-center relative">
            <div className="absolute top-[-15px] left-1/2 transform translate-x-[-50%] w-[30px] h-[30px] bg-teal-500 text-white rounded-full flex justify-center items-center font-bold">1</div>
            <div className="text-5xl mb-4">📸</div>
            <h3 className="text-blue-700 mb-3">Snap a Picture</h3>
            <p>Take a clear photo of the issue.</p>
          </div>
          <div className="flex-1 min-w-[250px] max-w-[300px] bg-white p-8 rounded-lg shadow-md text-center relative">
            <div className="absolute top-[-15px] left-1/2 transform translate-x-[-50%] w-[30px] h-[30px] bg-teal-500 text-white rounded-full flex justify-center items-center font-bold">2</div>
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-blue-700 mb-3">Provide Location</h3>
            <p>Share the exact beach name or GPS coordinates.</p>
          </div>
          <div className="flex-1 min-w-[250px] max-w-[300px] bg-white p-8 rounded-lg shadow-md text-center relative">
            <div className="absolute top-[-15px] left-1/2 transform translate-x-[-50%] w-[30px] h-[30px] bg-teal-500 text-white rounded-full flex justify-center items-center font-bold">3</div>
            <div className="text-5xl mb-4">📩</div>
            <h3 className="text-blue-700 mb-3">Submit a Report</h3>
            <p>Use our online form to send the details.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg mb-4 font-medium">Every report helps authorities take action faster</p>
          <button className="px-8 py-3 bg-blue-700 text-white border-none rounded font-semibold cursor-pointer transition duration-300 hover:bg-blue-800 hover:translate-y-[-2px] hover:shadow-md">Report Now</button>
        </div>
      </section>

      {/* Partnerships & CSR Collaborations */}
      <section className="py-20 px-[5%] bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-8 text-white">Partner with Us for a Greener Future!</h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            Are you a business, NGO, or community organization looking to make an impact? 
            Partner with us for CSR initiatives, sponsorships, and sustainability campaigns.
          </p>
          <div className="flex justify-center flex-wrap gap-8 mb-12">
            <div className="flex-1 min-w-[250px] max-w-[350px] bg-white bg-opacity-10 p-8 rounded-lg text-center transition duration-300 hover:translate-y-[-5px] hover:bg-opacity-15">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-teal-500 mb-4">Corporate Volunteering</h3>
              <p>Engage employees in beach cleanups and environmental programs.</p>
            </div>
            <div className="flex-1 min-w-[250px] max-w-[350px] bg-white bg-opacity-10 p-8 rounded-lg text-center transition duration-300 hover:translate-y-[-5px] hover:bg-opacity-15">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-teal-500 mb-4">Sponsorships</h3>
              <p>Support our efforts through funding, equipment donations, or event sponsorships.</p>
            </div>
            <div className="flex-1 min-w-[250px] max-w-[350px] bg-white bg-opacity-10 p-8 rounded-lg text-center transition duration-300 hover:translate-y-[-5px] hover:bg-opacity-15">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-teal-500 mb-4">Eco-Friendly Initiatives</h3>
              <p>Work together on sustainable projects like recycling programs and waste reduction.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl mb-6">Let's work together for a cleaner, greener future! Fill out our contact form and let's connect!</p>
            <button className="px-8 py-3 bg-teal-500 text-white border-none rounded font-semibold cursor-pointer transition duration-300 hover:bg-teal-600 hover:translate-y-[-2px] hover:shadow-lg">Become a Partner</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;