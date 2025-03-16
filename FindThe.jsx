import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Search, Filter, Star, Calendar, Shield, Bookmark, CheckCircle } from 'lucide-react';

const counsellors = [
  {
    id: '1',
    initials: 'RC',
    name: 'Dr. Rebecca Chen',
    title: 'Technology Careers Specialist',
    rating: 5.0,
    reviews: 136,
    experience: '10+ years experience',
    specialties: ['Career Transitions', 'Technical Interviews'],
    availability: 'Available this week',
    description: 'Former Tech Executive with experience at Google and Microsoft. Specializes in helping professionals navigate career transitions into tech roles or advance within the industry.',
    price: 120,
    verified: true,
  },
  {
    id: '2',
    initials: 'MT',
    name: 'Mark Thompson',
    title: 'Business & Entrepreneurship Coach',
    rating: 4.9,
    reviews: 108,
    experience: '8+ years experience',
    specialties: ['Entrepreneurship', 'Business Development'],
    availability: 'Available next week',
    description: 'Serial entrepreneur and business coach who has founded three successful startups. Specializes in helping professionals start their own businesses or advance in entrepreneurship.',
    price: 95,
    verified: true,
  },
  {
    id: '3',
    initials: 'SJ',
    name: 'Dr. Sarah Jones',
    title: 'Academic & Research Career Advisor',
    rating: 4.8,
    reviews: 92,
    experience: '12+ years experience',
    specialties: ['Academic Careers', 'Research Development'],
    availability: 'Available today',
    description: 'Former Director of Graduate Studies with expertise in academic career planning, grant writing, and research development. Helps students and professionals navigate academic careers.',
    price: 110,
    verified: true,
  },
];

const specializations = [
  'Field Specialization',
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Creative Arts',
  'Business',
  'Career Change',
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className="ml-1 text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

function CounsellorCard({ counsellor }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold text-xl
          ${counsellor.initials === 'RC' ? 'bg-blue-500' : 
            counsellor.initials === 'MT' ? 'bg-emerald-500' : 
            'bg-purple-500'}`}>
          {counsellor.initials}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">{counsellor.name}</h3>
            {counsellor.verified && <CheckCircle className="w-5 h-5 text-blue-500" />}
          </div>
          <p className="text-gray-600">{counsellor.title}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <StarRating rating={counsellor.rating} />
        <span className="text-gray-600">({counsellor.reviews} reviews)</span>
      </div>

      <div className="flex flex-col gap-2 text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{counsellor.experience}</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4" />
          <span>{counsellor.specialties.join(', ')}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{counsellor.availability}</span>
        </div>
      </div>

      <p className="text-gray-700 line-clamp-2">{counsellor.description}</p>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold">${counsellor.price}</span>
          <span className="text-gray-600">/ session</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
            <Bookmark className="w-5 h-5 text-gray-600" />
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

CounsellorCard.propTypes = {
  counsellor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    initials: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    experience: PropTypes.string.isRequired,
    specialties: PropTypes.arrayOf(PropTypes.string).isRequired,
    availability: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    verified: PropTypes.bool.isRequired,
  }).isRequired,
};

function FindThe() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('Field Specialization');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find a Career Counsellor</h1>
        <p className="text-gray-600 mb-8">Connect with expert counsellors specialized in your field of interest</p>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search counsellors by name, specialty, or location"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
            >
              {specializations.map((spec) => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Find Counsellors
            </button>
          </div>
          <button className="flex items-center gap-2 text-blue-600 mt-4">
            <Filter className="w-4 h-4" />
            Advanced Filters
          </button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Counsellors</h2>
          <button className="text-blue-600 hover:text-blue-700">View All →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {counsellors.map((counsellor) => (
            <CounsellorCard key={counsellor.id} counsellor={counsellor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindThe;