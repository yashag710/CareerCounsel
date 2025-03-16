import { motion } from "framer-motion";
import Navbar from "./Navbar";
function Landing(){
    return (
      <>
      <Navbar></Navbar>
        <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 pb-20">
          {/* Container */}
          <div className="container mx-auto px-4 pt-24 pb-16">
            <div className="flex flex-col lg:flex-row items-center">
              
              {/* Left Section */}
              <motion.div 
                className="lg:w-1/2 mb-10 lg:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                  Find Your <span className="text-blue-600">Perfect Career</span> Path Today
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-xl">
                  Expert guidance and personalized career counseling to help you discover opportunities aligned with your skills, interests, and goals.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.a 
                    href="#get-started" 
                    className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.a>
                  <motion.a 
                    href="#find-counselor" 
                    className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg shadow-md border border-blue-200 hover:bg-blue-50 transition duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Find a Counselor
                  </motion.a>
                </div>
              </motion.div>
    
              {/* Right Section */}
              <motion.div 
                className="lg:w-1/2 relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative z-10 bg-white p-2 rounded-xl shadow-xl">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg overflow-hidden">
                    <svg className="w-full h-auto" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M546 140.5C546 218.096 483.096 281 405.5 281C327.904 281 265 218.096 265 140.5C265 62.9035 327.904 0 405.5 0C483.096 0 546 62.9035 546 140.5Z" fill="#EBF4FF"/>
                      <rect x="56" y="93" width="320" height="216" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
                      <rect x="84" y="124" width="180" height="12" rx="6" fill="#93C5FD"/>
                      <rect x="84" y="148" width="264" height="8" rx="4" fill="#E5E7EB"/>
                      <rect x="84" y="168" width="264" height="8" rx="4" fill="#E5E7EB"/>
                      <rect x="84" y="188" width="120" height="8" rx="4" fill="#E5E7EB"/>
                      <rect x="84" y="228" width="96" height="36" rx="6" fill="#3B82F6"/>
                      <rect x="84" y="288" width="264" height="1" fill="#E5E7EB"/>
                      <circle cx="395" cy="203" r="76" fill="#60A5FA" fillOpacity="0.4"/>
                      <path d="M484 353.5C484 381.948 460.948 405 432.5 405C404.052 405 381 381.948 381 353.5C381 325.052 404.052 302 432.5 302C460.948 302 484 325.052 484 353.5Z" fill="#BFDBFE"/>
                    </svg>
                  </div>
                </div>
                {/* Background Blobs */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
              </motion.div>
            </div>
          </div>
    
          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="#FFFFFF" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        </>
      );
}

export default Landing