import React, { useEffect, useState } from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16 relative overflow-hidden">
      {/* Background Animation Elements - Now with lower z-index */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-teal-500 rounded-full opacity-5 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Title Section */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
  <h2 className="text-3xl font-bold text-white mb-2 transition duration-300 hover:text-blue-400">
  Reach Out Anytime

  </h2>
  <div className="mx-auto w-24 h-1 bg-blue-500 rounded-full"></div>
</div>

        
        {/* Social Icons Section */}
        <div className="flex justify-center space-x-10 mb-10">
          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com/in/muhammad-abdullah-ab5062241"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-125 hover:-rotate-6 hover:shadow-lg"
            aria-label="LinkedIn Profile"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 scale-0 hover:scale-150 transition-transform duration-700"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                fill="currentColor"
                className="bi bi-linkedin relative z-10"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </a>

          {/* Credly Icon */}
          <a
            href="https://www.credly.com/users/muhammad-abdullah.250a6edf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-125 hover:rotate-6 hover:shadow-lg"
            aria-label="Credly Profile"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 scale-0 hover:scale-150 transition-transform duration-700"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                fill="currentColor"
                className="bi bi-award relative z-10"
                viewBox="0 0 16 16"
              >
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Divider with Animation */}
        <div className="relative h-6 mb-8">
          <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60">
            <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Funny Contact Message with Typing Animation */}
        <div className="text-center mb-12 bg-gray-800 bg-opacity-40 p-6 rounded-xl backdrop-filter backdrop-blur-sm border border-gray-700 shadow-xl transform transition-all hover:scale-105 duration-500">
          <p className="text-base text-gray-300 leading-relaxed">
            <span className="text-blue-400 font-semibold">Need to contact me?</span> 🦄
            <br />
            Shoot me a message, I promise I don't bite (unless you're a bug 🐞)!
            <br />
            Just click those shiny icons above.
          </p>
          
          <div className="mt-4 flex items-center justify-center">
            <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-green-400 text-sm">Available for new opportunities</span>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-center mt-8 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Muhammad Abdullah Rauf</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2 transform hover:scale-105 transition-transform duration-300">
            Crafted with <span className="text-red-500 animate-pulse">♥</span> and code
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;