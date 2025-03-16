import React from "react";

// FeatureCard Component
const FeatureCard = ({ icon, title, description, bgColor, iconColor }) => {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`w-14 h-14 ${bgColor} rounded-lg flex items-center justify-center mb-6`}>
        {icon(iconColor)}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Icons Component
const icons = {
  assessment: (color) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  counselors: (color) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  analytics: (color) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
  forum: (color) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  recommendations: (color) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  tracking: (color) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

// Features Data
const features = [
  { title: "Personalized Assessments", description: "Discover your strengths, interests, and ideal career paths through our scientifically-backed assessment tools.", icon: icons.assessment, bgColor: "bg-blue-100", iconColor: "text-blue-600" },
  { title: "Expert Counselors", description: "Connect with certified career counselors who specialize in your field of interest for personalized guidance.", icon: icons.counselors, bgColor: "bg-indigo-100", iconColor: "text-indigo-600" },
  { title: "Career Growth Analytics", description: "Access up-to-date statistics and growth projections to make informed decisions about your career path.", icon: icons.analytics, bgColor: "bg-green-100", iconColor: "text-green-600" },
  { title: "Community Forum", description: "Join discussions with peers and professionals, ask questions, and share experiences in our supportive community.", icon: icons.forum, bgColor: "bg-purple-100", iconColor: "text-purple-600" },
  { title: "Smart Recommendations", description: "Our AI-powered system provides tailored career recommendations based on your profile and market trends.", icon: icons.recommendations, bgColor: "bg-pink-100", iconColor: "text-pink-600" },
  { title: "Progress Tracking", description: "Track your career development journey with milestone achievements and personalized roadmaps.", icon: icons.tracking, bgColor: "bg-yellow-100", iconColor: "text-yellow-600" },
];

// Main Component
const HowWeHelp = () => {
  return (
    <div className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How We Help You Succeed</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our comprehensive career guidance platform provides you with all the tools and resources you need to make informed career decisions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default HowWeHelp;
